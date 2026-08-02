/* =============================================================================
 * MyOS - 8259 Programmable Interrupt Controller (PIC) Implementation
 * pic.c - Remaps PIC interrupts to CPU vector 0x20-0x2F
 * =============================================================================
 */

#include "pic.h"
#include "../io.h"
#include <stdint.h>

/* Remap the PICs so IRQs 0-15 map to interrupts 32-47 */
void pic_init(void) {
    uint8_t mask1, mask2;
    
    /* Save current masks */
    mask1 = inb(PIC1_DATA);
    mask2 = inb(PIC2_DATA);
    
    /* Start initialization sequence */
    outb(PIC1_COMMAND, PIC_ICW1_INIT | PIC_ICW1_ICW4);
    io_wait();
    outb(PIC2_COMMAND, PIC_ICW1_INIT | PIC_ICW1_ICW4);
    io_wait();
    
    /* Set vector offsets */
    outb(PIC1_DATA, 0x20);    /* Master PIC: vectors 0x20-0x27 */
    io_wait();
    outb(PIC2_DATA, 0x28);    /* Slave PIC: vectors 0x28-0x2F */
    io_wait();
    
    /* Configure cascade identity */
    outb(PIC1_DATA, 0x04);    /* Tell master about slave at IRQ2 */
    io_wait();
    outb(PIC2_DATA, 0x02);    /* Tell slave its cascade identity */
    io_wait();
    
    /* Set 8086 mode */
    outb(PIC1_DATA, PIC_ICW4_8086);
    io_wait();
    outb(PIC2_DATA, PIC_ICW4_8086);
    io_wait();
    
    /* Restore saved masks */
    outb(PIC1_DATA, mask1);
    outb(PIC2_DATA, mask2);
}

/* Send End of Interrupt signal */
void pic_send_eoi(uint8_t irq) {
    if (irq >= 8) {
        outb(PIC2_COMMAND, PIC_EOI);
    }
    outb(PIC1_COMMAND, PIC_EOI);
}

/* Mask a specific IRQ line */
void pic_set_mask(uint8_t irq) {
    uint16_t port;
    uint8_t value;
    
    if (irq < 8) {
        port = PIC1_DATA;
    } else {
        port = PIC2_DATA;
        irq -= 8;
    }
    
    value = inb(port) | (1 << irq);
    outb(port, value);
}

/* Unmask a specific IRQ line */
void pic_clear_mask(uint8_t irq) {
    uint16_t port;
    uint8_t value;
    
    if (irq < 8) {
        port = PIC1_DATA;
    } else {
        port = PIC2_DATA;
        irq -= 8;
    }
    
    value = inb(port) & ~(1 << irq);
    outb(port, value);
}

/* Get Interrupt Request Register */
uint16_t pic_get_irr(void) {
    outb(PIC1_COMMAND, 0x0A);
    outb(PIC2_COMMAND, 0x0A);
    return (inb(PIC2_COMMAND) << 8) | inb(PIC1_COMMAND);
}

/* Get In-Service Register */
uint16_t pic_get_isr(void) {
    outb(PIC1_COMMAND, 0x0B);
    outb(PIC2_COMMAND, 0x0B);
    return (inb(PIC2_COMMAND) << 8) | inb(PIC1_COMMAND);
}
