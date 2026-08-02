/* =============================================================================
 * MyOS - Kernel Heap Memory Manager
 * heap.h - Dynamic memory allocation (kmalloc/kfree) declarations
 * =============================================================================
 */

#ifndef _HEAP_H
#define _HEAP_H

#include <stdint.h>
#include <stddef.h>

/* Heap configuration */
#define HEAP_START      0x00100000    /* 1MB - start after kernel */
#define HEAP_SIZE       0x00400000    /* 4MB heap size */

/* Function Declarations */
void heap_init(void);
void* kmalloc(size_t size);
void* kmalloc_aligned(size_t size, size_t alignment);
void kfree(void* ptr);
size_t kmalloc_usage(void);

#endif /* _HEAP_H */
