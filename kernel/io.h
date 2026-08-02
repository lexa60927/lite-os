/* =============================================================================
 * MyOS - I/O Port Access Functions
 * io.h - Assembly port I/O (inb/outb)
 * =============================================================================
 */

#ifndef _IO_H
#define _IO_H

#include <stdint.h>

/* Read a byte from I/O port */
static inline uint8_t inb(uint16_t port) {
    uint8_t value;
    __asm__ volatile ("inb %w1, %0" : "=a"(value) : "Nd"(port));
    return value;
}

/* Write a byte to I/O port */
static inline void outb(uint16_t port, uint8_t value) {
    __asm__ volatile ("outb %0, %w1" : : "a"(value), "Nd"(port));
}

/* Read a word (16-bit) from I/O port */
static inline uint16_t inw(uint16_t port) {
    uint16_t value;
    __asm__ volatile ("inw %w1, %0" : "=a"(value) : "Nd"(port));
    return value;
}

/* Write a word (16-bit) to I/O port */
static inline void outw(uint16_t port, uint16_t value) {
    __asm__ volatile ("outw %0, %w1" : : "a"(value), "Nd"(port));
}

/* Read a dword (32-bit) from I/O port */
static inline uint32_t inl(uint16_t port) {
    uint32_t value;
    __asm__ volatile ("inl %w1, %0" : "=a"(value) : "Nd"(port));
    return value;
}

/* Write a dword (32-bit) to I/O port */
static inline void outl(uint16_t port, uint32_t value) {
    __asm__ volatile ("outl %0, %w1" : : "a"(value), "Nd"(port));
}

/* I/O wait - small delay for port operations */
static inline void io_wait(void) {
    /* Jump to port 0x80 which is unused, creates small delay */
    __asm__ volatile ("outb %%al, $0x80" : : "a"(0));
}

#endif /* _IO_H */
