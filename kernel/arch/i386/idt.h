/* =============================================================================
 * MyOS - Interrupt Descriptor Table (IDT)
 * idt.h - IDT structure and function declarations
 * =============================================================================
 */

#ifndef _IDT_H
#define _IDT_H

#include <stdint.h>

/* IDT Entry Structure (8 bytes each) */
struct idt_entry {
    uint16_t base_low;       /* Lower 16 bits of handler address */
    uint16_t selector;       /* Kernel segment selector */
    uint8_t  zero;           /* Always zero */
    uint8_t  flags;          /* Type and attributes */
    uint16_t base_high;      /* Upper 16 bits of handler address */
} __attribute__((packed));

/* IDT Pointer Structure (for lidt instruction) */
struct idt_ptr {
    uint16_t limit;          /* Size of IDT - 1 */
    uint32_t base;           /* Base address of IDT */
} __attribute__((packed));

/* Number of IDT entries (256) */
#define IDT_ENTRIES 256

/* IDT Flags */
#define IDT_FLAG_PRESENT    (1 << 7)
#define IDT_FLAG_RING0      (0 << 5)
#define IDT_FLAG_RING3      (3 << 5)
#define IDT_FLAG_INT_GATE   0x0E    /* 32-bit interrupt gate */
#define IDT_FLAG_TRAP_GATE  0x0F    /* 32-bit trap gate */

/* ISR and IRQ function types */
typedef struct {
    uint32_t ds;
    uint32_t edi, esi, ebp, esp, ebx, edx, ecx, eax;
    uint32_t int_no, err_code;
    uint32_t eip, cs, eflags, useresp, ss;
} registers_t;

/* Function Declarations */
void idt_init(void);
void idt_set_gate(uint8_t num, uint32_t base, uint16_t selector, uint8_t flags);

/* External assembly handlers */
extern void isr0(void);
extern void isr1(void);
extern void isr2(void);
extern void isr3(void);
extern void isr4(void);
extern void isr5(void);
extern void isr6(void);
extern void isr7(void);
extern void isr8(void);
extern void isr9(void);
extern void isr10(void);
extern void isr11(void);
extern void isr12(void);
extern void isr13(void);
extern void isr14(void);
extern void isr15(void);
extern void isr16(void);
extern void isr17(void);
extern void isr18(void);
extern void isr19(void);
extern void isr20(void);
extern void isr21(void);
extern void isr22(void);
extern void isr23(void);
extern void isr24(void);
extern void isr25(void);
extern void isr26(void);
extern void isr27(void);
extern void isr28(void);
extern void isr29(void);
extern void isr30(void);
extern void isr31(void);

extern void irq0(void);
extern void irq1(void);
extern void irq2(void);
extern void irq3(void);
extern void irq4(void);
extern void irq5(void);
extern void irq6(void);
extern void irq7(void);
extern void irq8(void);
extern void irq9(void);
extern void irq10(void);
extern void irq11(void);
extern void irq12(void);
extern void irq13(void);
extern void irq14(void);
extern void irq15(void);

/* Handler registration */
typedef void (*interrupt_handler_t)(registers_t*);
void register_interrupt_handler(uint8_t n, interrupt_handler_t handler);

#endif /* _IDT_H */
