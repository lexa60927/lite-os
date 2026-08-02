/* =============================================================================
 * MyOS - Physical Memory Manager (PMM)
 * pmm.h - Bitmap-based physical memory management declarations
 * =============================================================================
 */

#ifndef _PMM_H
#define _PMM_H

#include <stdint.h>
#include <stddef.h>

/* Memory block size (4KB pages) */
#define PMM_BLOCK_SIZE  0x1000

/* Maximum memory size we can track (32MB with bitmap approach) */
#define PMM_MAX_BLOCKS  8192

/* Multiboot memory structure */
typedef struct {
    uint32_t size;
    uint32_t addr_low;
    uint32_t addr_high;
    uint32_t len_low;
    uint32_t len_high;
    uint32_t type;
} __attribute__((packed)) multiboot_mmap_entry_t;

/* Multiboot info structure */
typedef struct {
    uint32_t flags;
    uint32_t mem_lower;
    uint32_t mem_upper;
    uint32_t boot_device;
    uint32_t cmdline;
    uint32_t mods_count;
    uint32_t mods_addr;
    uint32_t syms[4];
    uint32_t mmap_length;
    uint32_t mmap_addr;
    uint32_t drives_length;
    uint32_t drives_addr;
    uint32_t config_table;
    uint32_t boot_loader_name;
    uint32_t apm_table;
    uint32_t vbe_control_info;
    uint32_t vbe_mode_info;
    uint16_t vbe_mode;
    uint16_t vbe_interface_seg;
    uint16_t vbe_interface_off;
    uint16_t vbe_interface_len;
} __attribute__((packed)) multiboot_info_t;

/* Function Declarations */
void pmm_init(multiboot_info_t* mboot);
void pmm_set_block(uint32_t block_addr, int used);
uint32_t pmm_alloc_block(void);
void pmm_free_block(uint32_t block_addr);
uint32_t pmm_alloc_blocks(size_t count);
void pmm_free_blocks(uint32_t block_addr, size_t count);
size_t pmm_get_used_blocks(void);
size_t pmm_get_total_blocks(void);
size_t pmm_get_free_blocks(void);
uint32_t pmm_get_memory_size(void);

#endif /* _PMM_H */
