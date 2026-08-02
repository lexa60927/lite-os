/* =============================================================================
 * MyOS - Kernel Heap Memory Manager Implementation
 * heap.c - Simple block-based dynamic memory allocation
 * =============================================================================
 */

#include "heap.h"
#include "../drivers/vga.h"
#include <stdint.h>
#include <string.h>

/* Block header structure */
typedef struct block_header {
    size_t size;                    /* Size of data portion (not including header) */
    int is_free;                    /* 1 if free, 0 if allocated */
    struct block_header* next;      /* Next block in list */
    struct block_header* prev;      /* Previous block in list */
} block_header_t;

#define BLOCK_HEADER_SIZE   sizeof(block_header_t)
#define MIN_BLOCK_SIZE      32      /* Minimum allocation size */

/* Heap boundaries */
static uint8_t* heap_start = (uint8_t*)HEAP_START;
static uint8_t* heap_end = (uint8_t*)(HEAP_START + HEAP_SIZE);

/* First block in the linked list */
static block_header_t* first_block = NULL;

/* Total bytes allocated (excluding headers) */
static size_t total_allocated = 0;

/* Align address to 4-byte boundary */
static inline size_t align_up(size_t addr, size_t alignment) {
    if (alignment == 0) return addr;
    return (addr + alignment - 1) & ~(alignment - 1);
}

/* Initialize the heap */
void heap_init(void) {
    /* Set up the first block spanning the entire heap */
    first_block = (block_header_t*)heap_start;
    first_block->size = HEAP_SIZE - BLOCK_HEADER_SIZE;
    first_block->is_free = 1;
    first_block->next = NULL;
    first_block->prev = NULL;
    
    total_allocated = 0;
    
    kprintf("Heap: Initialized at 0x%x (%u KB)\n", 
            HEAP_START, HEAP_SIZE / 1024);
}

/* Split a block if it's large enough */
static void split_block(block_header_t* block, size_t size) {
    /* Only split if remaining space can hold a block + minimum data */
    if (block->size >= size + BLOCK_HEADER_SIZE + MIN_BLOCK_SIZE) {
        block_header_t* new_block = (block_header_t*)((uint8_t*)block + 
                                         BLOCK_HEADER_SIZE + size);
        new_block->size = block->size - size - BLOCK_HEADER_SIZE;
        new_block->is_free = 1;
        new_block->next = block->next;
        new_block->prev = block;
        
        if (block->next) {
            block->next->prev = new_block;
        }
        
        block->size = size;
        block->next = new_block;
    }
}

/* Merge adjacent free blocks */
static void merge_blocks(block_header_t* block) {
    /* Merge with next block if free */
    if (block->next && block->next->is_free) {
        block->size += BLOCK_HEADER_SIZE + block->next->size;
        block->next = block->next->next;
        if (block->next) {
            block->next->prev = block;
        }
    }
    
    /* Merge with previous block if free */
    if (block->prev && block->prev->is_free) {
        block->prev->size += BLOCK_HEADER_SIZE + block->size;
        block->prev->next = block->next;
        if (block->next) {
            block->next->prev = block->prev;
        }
    }
}

/* Allocate memory from heap */
void* kmalloc(size_t size) {
    if (size == 0) {
        return NULL;
    }
    
    /* Round up to minimum block size */
    if (size < MIN_BLOCK_SIZE) {
        size = MIN_BLOCK_SIZE;
    }
    
    /* Align size to 4 bytes */
    size = align_up(size, 4);
    
    /* Find first fit */
    block_header_t* current = first_block;
    while (current) {
        if (current->is_free && current->size >= size) {
            /* Found a suitable block */
            split_block(current, size);
            current->is_free = 0;
            total_allocated += current->size;
            
            /* Return pointer to data area (after header) */
            return (void*)((uint8_t*)current + BLOCK_HEADER_SIZE);
        }
        current = current->next;
    }
    
    /* Out of memory */
    kprintf("kmalloc: Out of memory! Requested %u bytes\n", (uint32_t)size);
    return NULL;
}

/* Allocate aligned memory */
void* kmalloc_aligned(size_t size, size_t alignment) {
    if (size == 0) {
        return NULL;
    }
    
    /* For simplicity, over-allocate and adjust */
    /* This is not optimal but works for basic cases */
    void* ptr = kmalloc(size + alignment);
    if (!ptr) {
        return NULL;
    }
    
    /* Align the returned pointer */
    uintptr_t addr = (uintptr_t)ptr;
    uintptr_t aligned = align_up(addr, alignment);
    
    /* Note: This wastes some memory but keeps implementation simple */
    return (void*)aligned;
}

/* Free allocated memory */
void kfree(void* ptr) {
    if (!ptr) {
        return;
    }
    
    /* Get block header */
    block_header_t* block = (block_header_t*)((uint8_t*)ptr - BLOCK_HEADER_SIZE);
    
    /* Validate pointer is within heap */
    if ((uint8_t*)block < heap_start || (uint8_t*)block >= heap_end) {
        return;
    }
    
    /* Mark as free and merge */
    total_allocated -= block->size;
    block->is_free = 1;
    merge_blocks(block);
}

/* Get current heap usage */
size_t kmalloc_usage(void) {
    return total_allocated;
}
