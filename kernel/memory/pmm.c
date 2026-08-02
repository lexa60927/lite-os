/* =============================================================================
 * MyOS - Physical Memory Manager (PMM) Implementation
 * pmm.c - Bitmap-based physical memory allocation
 * =============================================================================
 */

#include "pmm.h"
#include "../drivers/vga.h"
#include <stdint.h>
#include <string.h>

/* Memory bitmap - one bit per 4KB block */
static uint32_t memory_bitmap[PMM_MAX_BLOCKS / 32];

/* Total number of blocks available */
static size_t total_blocks = 0;

/* Number of used blocks */
static size_t used_blocks = 0;

/* Total physical memory size in bytes */
static uint32_t memory_size = 0;

/* Check if a bit is set in the bitmap */
static inline int test_block(size_t block) {
    return memory_bitmap[block / 32] & (1 << (block % 32));
}

/* Set a bit in the bitmap */
static inline void set_block(size_t block) {
    memory_bitmap[block / 32] |= (1 << (block % 32));
}

/* Clear a bit in the bitmap */
static inline void clear_block(size_t block) {
    memory_bitmap[block / 32] &= ~(1 << (block % 32));
}

/* Find first free block */
static ssize_t find_first_free_block(void) {
    for (size_t i = 0; i < total_blocks / 32; i++) {
        if (memory_bitmap[i] != 0xFFFFFFFF) {
            /* Found a word with at least one free bit */
            for (int j = 0; j < 32; j++) {
                size_t block = i * 32 + j;
                if (block >= total_blocks) {
                    return -1;
                }
                if (!test_block(block)) {
                    return (ssize_t)block;
                }
            }
        }
    }
    return -1;
}

/* Initialize PMM using multiboot memory map */
void pmm_init(multiboot_info_t* mboot) {
    /* Clear bitmap */
    memset(memory_bitmap, 0, sizeof(memory_bitmap));
    
    /* Get memory size from multiboot info */
    if (mboot->flags & (1 << 0)) {
        /* Use mem_upper (in KB, above 1MB) */
        memory_size = (mboot->mem_upper + 1024) * 1024;
    }
    
    /* Parse memory map if available */
    if (mboot->flags & (1 << 6) && mboot->mmap_length > 0) {
        multiboot_mmap_entry_t* entry = 
            (multiboot_mmap_entry_t*)(uintptr_t)mboot->mmap_addr;
        
        /* Find highest usable memory address */
        uint32_t max_addr = 0;
        while ((uintptr_t)entry < (uintptr_t)mboot->mmap_addr + mboot->mmap_length) {
            /* Type 1 is available RAM */
            if (entry->type == 1) {
                uint32_t end_addr = entry->addr_low + entry->len_low;
                if (end_addr > max_addr) {
                    max_addr = end_addr;
                }
            }
            
            /* Move to next entry */
            uintptr_t next = (uintptr_t)entry + entry->size + sizeof(entry->size);
            entry = (multiboot_mmap_entry_t*)next;
        }
        
        if (max_addr > memory_size) {
            memory_size = max_addr;
        }
    }
    
    /* Calculate total blocks */
    total_blocks = memory_size / PMM_BLOCK_SIZE;
    if (total_blocks > PMM_MAX_BLOCKS) {
        total_blocks = PMM_MAX_BLOCKS;
    }
    
    /* Mark all memory as used initially */
    memset(memory_bitmap, 0xFF, sizeof(memory_bitmap));
    used_blocks = total_blocks;
    
    /* Mark kernel memory as used (first few MB) */
    /* Kernel loaded at 1MB typically, mark first 2MB as used */
    size_t kernel_blocks = (2 * 1024 * 1024) / PMM_BLOCK_SIZE;
    for (size_t i = 0; i < kernel_blocks && i < total_blocks; i++) {
        set_block(i);
    }
    
    kprintf("PMM: Initialized with %u KB (%u blocks)\n", 
            memory_size / 1024, (uint32_t)total_blocks);
}

/* Set block as used or free */
void pmm_set_block(uint32_t block_addr, int used) {
    size_t block = block_addr / PMM_BLOCK_SIZE;
    if (block >= total_blocks) {
        return;
    }
    
    if (used) {
        if (!test_block(block)) {
            set_block(block);
            used_blocks++;
        }
    } else {
        if (test_block(block)) {
            clear_block(block);
            used_blocks--;
        }
    }
}

/* Allocate a single block */
uint32_t pmm_alloc_block(void) {
    ssize_t block = find_first_free_block();
    if (block < 0) {
        return 0;  /* Out of memory */
    }
    
    set_block((size_t)block);
    used_blocks++;
    
    return (uint32_t)block * PMM_BLOCK_SIZE;
}

/* Free a single block */
void pmm_free_block(uint32_t block_addr) {
    size_t block = block_addr / PMM_BLOCK_SIZE;
    if (block < total_blocks && test_block(block)) {
        clear_block(block);
        used_blocks--;
    }
}

/* Allocate multiple contiguous blocks */
uint32_t pmm_alloc_blocks(size_t count) {
    if (count == 0) {
        return 0;
    }
    
    /* Simple allocator - find 'count' consecutive free blocks */
    size_t found = 0;
    size_t start = 0;
    
    for (size_t i = 0; i < total_blocks; i++) {
        if (!test_block(i)) {
            if (found == 0) {
                start = i;
            }
            found++;
            if (found == count) {
                /* Allocate all blocks */
                for (size_t j = 0; j < count; j++) {
                    set_block(start + j);
                }
                used_blocks += count;
                return (uint32_t)start * PMM_BLOCK_SIZE;
            }
        } else {
            found = 0;
        }
    }
    
    return 0;  /* Out of memory */
}

/* Free multiple contiguous blocks */
void pmm_free_blocks(uint32_t block_addr, size_t count) {
    size_t block = block_addr / PMM_BLOCK_SIZE;
    for (size_t i = 0; i < count && block + i < total_blocks; i++) {
        if (test_block(block + i)) {
            clear_block(block + i);
            used_blocks--;
        }
    }
}

/* Get statistics */
size_t pmm_get_used_blocks(void) {
    return used_blocks;
}

size_t pmm_get_total_blocks(void) {
    return total_blocks;
}

size_t pmm_get_free_blocks(void) {
    return total_blocks - used_blocks;
}

uint32_t pmm_get_memory_size(void) {
    return memory_size;
}
