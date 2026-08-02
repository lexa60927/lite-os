/* =============================================================================
 * MyOS - Paging and Virtual Memory Header
 * paging.h - Page directory/table structures and functions
 * =============================================================================
 */

#ifndef PAGING_H
#define PAGING_H

#include <stdint.h>
#include <stddef.h>

/* CR0 flags */
#define CR0_PE          0x00000001  /* Protection Enable */
#define CR0_WP          0x00010000  /* Write Protect */
#define CR0_PG          0x80000000  /* Paging */

/* Page entry flags */
#define PAGE_PRESENT    0x01        /* Page is present in memory */
#define PAGE_RW         0x02        /* Read/Write (0 = read-only) */
#define PAGE_USER       0x04        /* User/Supervisor (0 = supervisor only) */
#define PAGE_WRITETHROUGH 0x08      /* Write-through caching */
#define PAGE_NOCACHE    0x10        /* Disable caching */
#define PAGE_ACCESSED   0x20        /* Page has been accessed */
#define PAGE_DIRTY      0x40        /* Page has been written to */
#define PAGE_SIZE       0x80        /* Large page (4MB) */

/* Page size */
#define PAGE_SIZE_4KB   4096

/* Initialize paging */
void paging_init(void);

/* Flush TLB */
void paging_flush_tlb(void);

/* Map a virtual address to physical */
void paging_map_page(uint32_t virt_addr, uint32_t phys_addr, uint32_t flags);

/* Unmap a virtual address */
void paging_unmap_page(uint32_t virt_addr);

/* Get physical address from virtual */
uint32_t paging_get_physical(uint32_t virt_addr);

#endif /* PAGING_H */
