/* =============================================================================
 * MyOS - 8259 Programmable Interrupt Controller (PIC)
 * pic.h - PIC remapping function declarations
 * =============================================================================
 */

#ifndef _PIC_H
#define _PIC_H

#include <stdint.h>

/* PIC I/O ports */
#define PIC1_COMMAND    0x20    /* Master PIC command port */
#define PIC1_DATA       0x21    /* Master PIC data port */
#define PIC2_COMMAND    0xA0    /* Slave PIC command port */
#define PIC2_DATA       0xA1    /* Slave PIC data port */

/* PIC commands */
#define PIC_ICW1_ICW4       0x01    /* ICW4 will be present */
#define PIC_ICW1_SINGLE     0x02    /* Single mode */
#define PIC_ICW1_INTERVAL4  0x04    /* Call address interval 4 */
#define PIC_ICW1_LEVEL      0x08    /* Level triggered */
#define PIC_ICW1_INIT       0x10    /* Initialization */

#define PIC_ICW4_8086       0x01    /* 8086 mode */
#define PIC_ICW4_AUTO       0x02    /* Auto EOI */
#define PIC_ICW4_BUF_SLAVE  0x08    /* Buffered mode, slave */
#define PIC_ICW4_BUF_MASTER 0x0C    /* Buffered mode, master */
#define PIC_ICW4_SFNM       0x10    /* Special fully nested mode */

#define PIC_EOI             0x20    /* End of Interrupt command */

/* Function Declarations */
void pic_init(void);
void pic_send_eoi(uint8_t irq);
void pic_set_mask(uint8_t irq);
void pic_clear_mask(uint8_t irq);
uint16_t pic_get_irr(void);
uint16_t pic_get_isr(void);

#endif /* _PIC_H */
