/* =============================================================================
 * MyOS - Global Descriptor Table (GDT) Implementation
 * gdt.c - Sets up segment descriptors for protected mode
 * =============================================================================
 */

#include "gdt.h"
#include <stdint.h>
#include <string.h>

/* GDT and GDT Pointer */
static struct gdt_entry gdt[GDT_ENTRIES];
static struct gdt_ptr gdt_ptr;

/* External assembly function to load GDT */
extern void gdt_flush(uint32_t);

/* Create a GDT entry */
static void gdt_set_entry(int index, uint32_t base, uint32_t limit, 
                          uint8_t access, uint8_t granularity) {
    gdt[index].base_low = base & 0xFFFF;
    gdt[index].base_middle = (base >> 16) & 0xFF;
    gdt[index].base_high = (base >> 24) & 0xFF;
    
    gdt[index].limit_low = limit & 0xFFFF;
    gdt[index].granularity = ((limit >> 16) & 0x0F) | (granularity & 0xF0);
    
    gdt[index].access = access;
}

/* Initialize the GDT */
void gdt_init(void) {
    /* Set GDT pointer */
    gdt_ptr.limit = sizeof(gdt) - 1;
    gdt_ptr.base = (uint32_t)&gdt;
    
    /* Clear all entries */
    memset(gdt, 0, sizeof(gdt));
    
    /* Entry 0: Null descriptor (required by CPU) */
    gdt_set_entry(0, 0, 0, 0, 0);
    
    /* Entry 1: Kernel Code Segment (0x08)
     * Base: 0x00000000, Limit: 4GB, Ring 0
     * Executable, Readable, Present
     */
    gdt_set_entry(1, 0x00000000, 0xFFFFFFFF,
                  GDT_ACCESS_PRESENT | GDT_ACCESS_RING0 | 
                  GDT_ACCESS_SEGMENT | GDT_ACCESS_CODE_EXEC | GDT_ACCESS_CODE_READ,
                  GDT_GRAN_4KB | GDT_GRAN_32BIT);
    
    /* Entry 2: Kernel Data Segment (0x10)
     * Base: 0x00000000, Limit: 4GB, Ring 0
     * Writable, Present
     */
    gdt_set_entry(2, 0x00000000, 0xFFFFFFFF,
                  GDT_ACCESS_PRESENT | GDT_ACCESS_RING0 | 
                  GDT_ACCESS_SEGMENT | GDT_ACCESS_DATA_WRITE,
                  GDT_GRAN_4KB | GDT_GRAN_32BIT);
    
    /* Entry 3: User Code Segment (0x18)
     * Base: 0x00000000, Limit: 4GB, Ring 3
     * Executable, Readable, Present
     */
    gdt_set_entry(3, 0x00000000, 0xFFFFFFFF,
                  GDT_ACCESS_PRESENT | GDT_ACCESS_RING3 | 
                  GDT_ACCESS_SEGMENT | GDT_ACCESS_CODE_EXEC | GDT_ACCESS_CODE_READ,
                  GDT_GRAN_4KB | GDT_GRAN_32BIT);
    
    /* Entry 4: User Data Segment (0x20)
     * Base: 0x00000000, Limit: 4GB, Ring 3
     * Writable, Present
     */
    gdt_set_entry(4, 0x00000000, 0xFFFFFFFF,
                  GDT_ACCESS_PRESENT | GDT_ACCESS_RING3 | 
                  GDT_ACCESS_SEGMENT | GDT_ACCESS_DATA_WRITE,
                  GDT_GRAN_4KB | GDT_GRAN_32BIT);
    
    /* Load GDT using assembly stub */
    gdt_flush((uint32_t)&gdt_ptr);
}
