/* =============================================================================
 * MyOS - Interrupt Descriptor Table (IDT) Implementation
 * idt.c - Sets up interrupt handlers and exception handling
 * =============================================================================
 */

#include "idt.h"
#include "gdt.h"
#include "../drivers/vga.h"
#include <stdint.h>
#include <string.h>

/* IDT and IDT Pointer */
static struct idt_entry idt[IDT_ENTRIES];
static struct idt_ptr idt_ptr;

/* Interrupt handler array */
static interrupt_handler_t interrupt_handlers[IDT_ENTRIES];

/* Exception messages */
static const char* exception_messages[] = {
    "Division By Zero",
    "Debug",
    "Non Maskable Interrupt",
    "Breakpoint",
    "Overflow",
    "Bound Range Exceeded",
    "Invalid Opcode",
    "Device Not Available",
    "Double Fault",
    "Coprocessor Segment Overrun",
    "Invalid TSS",
    "Segment Not Present",
    "Stack-Segment Fault",
    "General Protection Fault",
    "Page Fault",
    "Reserved",
    "x87 Floating-Point Exception",
    "Alignment Check",
    "Machine Check",
    "SIMD Floating-Point Exception",
    "Virtualization Exception",
    "Control Protection Exception",
    "Reserved",
    "Reserved",
    "Reserved",
    "Reserved",
    "Reserved",
    "Reserved",
    "Reserved",
    "Reserved",
    "Reserved",
    "Reserved",
    "Security Exception",
    "Reserved"
};

/* External assembly function to load IDT */
extern void idt_flush(uint32_t);

/* Set an IDT gate */
void idt_set_gate(uint8_t num, uint32_t base, uint16_t selector, uint8_t flags) {
    idt[num].base_low = base & 0xFFFF;
    idt[num].base_high = (base >> 16) & 0xFFFF;
    idt[num].selector = selector;
    idt[num].zero = 0;
    idt[num].flags = flags;
}

/* Register an interrupt handler */
void register_interrupt_handler(uint8_t n, interrupt_handler_t handler) {
    interrupt_handlers[n] = handler;
}

/* C-level interrupt handler called from assembly stubs */
void isr_handler(registers_t* regs) {
    if (interrupt_handlers[regs->int_no] != NULL) {
        interrupt_handlers[regs->int_no](regs);
    } else {
        /* No handler registered - print error */
        kprintf("\n!! EXCEPTION: %s\n", exception_messages[regs->int_no]);
        kprintf("   INT: 0x%02X  ERR: 0x%08X\n", regs->int_no, regs->err_code);
        kprintf("   EIP: 0x%08X  CS: 0x%04X  EFLAGS: 0x%08X\n", 
                regs->eip, regs->cs, regs->eflags);
        
        /* Halt on critical exceptions */
        while (1) {
            __asm__ volatile ("hlt");
        }
    }
}

/* IRQ handler wrapper */
void irq_handler(registers_t* regs) {
    if (interrupt_handlers[regs->int_no] != NULL) {
        interrupt_handlers[regs->int_no](regs);
    }
}

/* Initialize the IDT */
void idt_init(void) {
    /* Set IDT pointer */
    idt_ptr.limit = sizeof(idt) - 1;
    idt_ptr.base = (uint32_t)&idt;
    
    /* Clear all entries */
    memset(&idt, 0, sizeof(idt));
    memset(&interrupt_handlers, 0, sizeof(interrupt_handlers));
    
    /* Setup ISRs (0-31) */
    idt_set_gate(0, (uint32_t)isr0, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(1, (uint32_t)isr1, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(2, (uint32_t)isr2, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(3, (uint32_t)isr3, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(4, (uint32_t)isr4, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(5, (uint32_t)isr5, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(6, (uint32_t)isr6, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(7, (uint32_t)isr7, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(8, (uint32_t)isr8, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(9, (uint32_t)isr9, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(10, (uint32_t)isr10, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(11, (uint32_t)isr11, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(12, (uint32_t)isr12, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(13, (uint32_t)isr13, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(14, (uint32_t)isr14, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(15, (uint32_t)isr15, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(16, (uint32_t)isr16, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(17, (uint32_t)isr17, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(18, (uint32_t)isr18, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(19, (uint32_t)isr19, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(20, (uint32_t)isr20, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(21, (uint32_t)isr21, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(22, (uint32_t)isr22, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(23, (uint32_t)isr23, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(24, (uint32_t)isr24, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(25, (uint32_t)isr25, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(26, (uint32_t)isr26, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(27, (uint32_t)isr27, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(28, (uint32_t)isr28, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(29, (uint32_t)isr29, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(30, (uint32_t)isr30, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(31, (uint32_t)isr31, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    
    /* Setup IRQs (32-47) - remapped to 0x20-0x2F by PIC */
    idt_set_gate(32, (uint32_t)irq0, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(33, (uint32_t)irq1, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(34, (uint32_t)irq2, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(35, (uint32_t)irq3, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(36, (uint32_t)irq4, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(37, (uint32_t)irq5, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(38, (uint32_t)irq6, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(39, (uint32_t)irq7, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(40, (uint32_t)irq8, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(41, (uint32_t)irq9, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(42, (uint32_t)irq10, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(43, (uint32_t)irq11, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(44, (uint32_t)irq12, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(45, (uint32_t)irq13, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(46, (uint32_t)irq14, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    idt_set_gate(47, (uint32_t)irq15, 0x08, IDT_FLAG_PRESENT | IDT_FLAG_INT_GATE);
    
    /* Load IDT */
    idt_flush((uint32_t)&idt_ptr);
}
