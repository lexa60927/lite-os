/* =============================================================================
 * MyOS - Global Descriptor Table (GDT)
 * gdt.h - GDT structure and function declarations
 * =============================================================================
 */

#ifndef _GDT_H
#define _GDT_H

#include <stdint.h>

/* GDT Entry Structure (8 bytes each) */
struct gdt_entry {
    uint16_t limit_low;      /* Lower 16 bits of segment limit */
    uint16_t base_low;       /* Lower 16 bits of base address */
    uint8_t  base_middle;    /* Middle 8 bits of base address */
    uint8_t  access;         /* Access flags */
    uint8_t  granularity;    /* Granularity flags */
    uint8_t  base_high;      /* Upper 8 bits of base address */
} __attribute__((packed));

/* GDT Pointer Structure (for lgdt instruction) */
struct gdt_ptr {
    uint16_t limit;          /* Size of GDT - 1 */
    uint32_t base;           /* Base address of GDT */
} __attribute__((packed));

/* GDT Entry Count */
#define GDT_ENTRIES 5

/* GDT Access Byte Constants */
#define GDT_ACCESS_PRESENT    (1 << 7)
#define GDT_ACCESS_RING0      (0 << 5)
#define GDT_ACCESS_RING1      (1 << 5)
#define GDT_ACCESS_RING2      (2 << 5)
#define GDT_ACCESS_RING3      (3 << 5)
#define GDT_ACCESS_SEGMENT    (1 << 4)
#define GDT_ACCESS_CODE_EXEC  (1 << 3)
#define GDT_ACCESS_CODE_READ  (1 << 1)
#define GDT_ACCESS_DATA_WRITE (1 << 1)

/* GDT Granularity Constants */
#define GDT_GRAN_1BYTE        (0 << 3)
#define GDT_GRAN_4KB          (1 << 3)
#define GDT_GRAN_32BIT        (1 << 2)

/* Function Declarations */
void gdt_init(void);

#endif /* _GDT_H */
