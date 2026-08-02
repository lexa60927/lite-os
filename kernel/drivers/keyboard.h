/* =============================================================================
 * MyOS - PS/2 Keyboard Driver
 * keyboard.h - Keyboard driver function declarations
 * =============================================================================
 */

#ifndef _KEYBOARD_H
#define _KEYBOARD_H

#include <stdint.h>
#include "../arch/i386/idt.h"

/* Keyboard I/O port */
#define KEYBOARD_PORT   0x60

/* Scancode constants */
#define KEY_ESCAPE      0x01
#define KEY_BACKSPACE   0x0E
#define KEY_TAB         0x0F
#define KEY_ENTER       0x1C
#define KEY_CTRL        0x1D
#define KEY_LSHIFT      0x2A
#define KEY_RSHIFT      0x36
#define KEY_ALT         0x38
#define KEY_CAPSLOCK    0x3A
#define KEY_F1          0x3B
#define KEY_F12         0x57

/* Buffer size */
#define KEYBOARD_BUFFER_SIZE 256

/* Function Declarations */
void keyboard_init(void);
char keyboard_getchar(void);
int keyboard_available(void);
void keyboard_handler(registers_t* regs);

#endif /* _KEYBOARD_H */
