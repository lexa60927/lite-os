/* =============================================================================
 * MyOS - Paging and Virtual Memory Implementation
 * paging.c - Identity mapping with 4KB pages, CR0.PG enable
 * =============================================================================
 */

#include "paging.h"
#include "../../include/stddef.h"
#include "../drivers/vga.h"

/* Page directory and first page table */
static uint32_t page_directory[1024] __attribute__((aligned(4096)));
static uint32_t page_tables[4][1024] __attribute__((aligned(4096)));

/* Current page directory physical address (for CR3) */
static uint32_t page_directory_phys;

/* Initialize paging structures with identity mapping for first 16MB */
void paging_init(void) {
    /* Clear page directory */
    for (int i = 0; i < 1024; i++) {
        page_directory[i] = 0;
    }
    
    /* Clear page tables */
    for (int t = 0; t < 4; t++) {
        for (int i = 0; i < 1024; i++) {
            page_tables[t][i] = 0;
        }
    }
    
    /* Map first 16MB of physical memory to virtual addresses 0-16MB
     * Each page table covers 4MB (1024 entries * 4KB)
     * We use 4 page tables for 16MB total */
    for (int t = 0; t < 4; t++) {
        /* Page directory entry: present, read/write, points to page table */
        page_directory[t] = ((uint32_t)&page_tables[t]) | PAGE_PRESENT | PAGE_RW;
        
        /* Map 4MB in this page table */
        for (int i = 0; i < 1024; i++) {
            uint32_t phys_addr = (t * 1024 + i) * 4096;
            page_tables[t][i] = phys_addr | PAGE_PRESENT | PAGE_RW;
        }
    }
    
    /* Get physical address of page directory for CR3 */
    page_directory_phys = (uint32_t)page_directory;
    
    /* Load page directory into CR3 */
    __asm__ volatile("mov %0, %%cr3" :: "r"(page_directory_phys) : "memory");
    
    /* Enable paging and write protection in CR0 */
    uint32_t cr0;
    __asm__ volatile("mov %%cr0, %0" : "=r"(cr0));
    cr0 |= CR0_PG | CR0_WP | CR0_PE;
    __asm__ volatile("mov %0, %%cr0" :: "r"(cr0) : "memory");
}

/* Flush TLB by reloading CR3 */
void paging_flush_tlb(void) {
    __asm__ volatile("mov %0, %%cr3" :: "r"(page_directory_phys) : "memory");
}

/* Map a virtual address to a physical address */
void paging_map_page(uint32_t virt_addr, uint32_t phys_addr, uint32_t flags) {
    uint32_t pd_index = (virt_addr >> 22) & 0x3FF;
    uint32_t pt_index = (virt_addr >> 12) & 0x3FF;
    
    /* Check if page directory entry exists */
    if (!(page_directory[pd_index] & PAGE_PRESENT)) {
        /* Would need to allocate a new page table here for full implementation */
        return;
    }
    
    /* Get page table pointer */
    uint32_t* pt = (uint32_t*)(page_directory[pd_index] & 0xFFFFF000);
    
    /* Set page table entry */
    pt[pt_index] = (phys_addr & 0xFFFFF000) | flags;
    
    /* Flush TLB */
    paging_flush_tlb();
}

/* Unmap a virtual address */
void paging_unmap_page(uint32_t virt_addr) {
    uint32_t pd_index = (virt_addr >> 22) & 0x3FF;
    uint32_t pt_index = (virt_addr >> 12) & 0x3FF;
    
    if (!(page_directory[pd_index] & PAGE_PRESENT)) {
        return;
    }
    
    uint32_t* pt = (uint32_t*)(page_directory[pd_index] & 0xFFFFF000);
    pt[pt_index] = 0;
    
    paging_flush_tlb();
}

/* Get physical address from virtual address */
uint32_t paging_get_physical(uint32_t virt_addr) {
    uint32_t pd_index = (virt_addr >> 22) & 0x3FF;
    uint32_t pt_index = (virt_addr >> 12) & 0x3FF;
    
    if (!(page_directory[pd_index] & PAGE_PRESENT)) {
        return 0;
    }
    
    uint32_t* pt = (uint32_t*)(page_directory[pd_index] & 0xFFFFF000);
    
    if (!(pt[pt_index] & PAGE_PRESENT)) {
        return 0;
    }
    
    return (pt[pt_index] & 0xFFFFF000) | (virt_addr & 0xFFF);
}
