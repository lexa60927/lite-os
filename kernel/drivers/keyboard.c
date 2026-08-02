/* =============================================================================
 * MyOS - PS/2 Keyboard Driver Implementation
 * keyboard.c - Scancode to ASCII conversion and interrupt handling
 * =============================================================================
 */

#include "keyboard.h"
#include "../arch/i386/pic.h"
#include "../io.h"
#include <stdint.h>

/* US QWERTY scancode to ASCII mapping (set 1) */
static const char scancode_to_ascii[] = {
    0,   /* 0x00 - Unused */
    0,   /* 0x01 - ESC */
    '1', /* 0x02 */
    '2', /* 0x03 */
    '3', /* 0x04 */
    '4', /* 0x05 */
    '5', /* 0x06 */
    '6', /* 0x07 */
    '7', /* 0x08 */
    '8', /* 0x09 */
    '9', /* 0x0A */
    '0', /* 0x0B */
    '-', /* 0x0C */
    '=', /* 0x0D */
    '\b',/* 0x0E - Backspace */
    '\t',/* 0x0F - Tab */
    'q', /* 0x10 */
    'w', /* 0x11 */
    'e', /* 0x12 */
    'r', /* 0x13 */
    't', /* 0x14 */
    'y', /* 0x15 */
    'u', /* 0x16 */
    'i', /* 0x17 */
    'o', /* 0x18 */
    'p', /* 0x19 */
    '[', /* 0x1A */
    ']', /* 0x1B */
    '\n',/* 0x1C - Enter */
    0,   /* 0x1D - Ctrl */
    'a', /* 0x1E */
    's', /* 0x1F */
    'd', /* 0x20 */
    'f', /* 0x21 */
    'g', /* 0x22 */
    'h', /* 0x23 */
    'j', /* 0x24 */
    'k', /* 0x25 */
    'l', /* 0x26 */
    ';', /* 0x27 */
    '\'',/* 0x28 */
    '`', /* 0x29 */
    0,   /* 0x2A - Left Shift */
    '\\',/* 0x2B */
    'z', /* 0x2C */
    'x', /* 0x2D */
    'c', /* 0x2E */
    'v', /* 0x2F */
    'b', /* 0x30 */
    'n', /* 0x31 */
    'm', /* 0x32 */
    ',', /* 0x33 */
    '.', /* 0x34 */
    '/', /* 0x35 */
    0,   /* 0x36 - Right Shift */
    '*', /* 0x37 - Keypad */
    0,   /* 0x38 - Alt */
    ' ', /* 0x39 - Space */
    0,   /* 0x3A - Caps Lock */
};

/* Shift key map for special characters */
static const char scancode_shift_ascii[] = {
    0,   /* 0x00 */
    0,   /* 0x01 */
    '!', /* 0x02 */
    '@', /* 0x03 */
    '#', /* 0x04 */
    '$', /* 0x05 */
    '%', /* 0x06 */
    '^', /* 0x07 */
    '&', /* 0x08 */
    '*', /* 0x09 */
    '(', /* 0x0A */
    ')', /* 0x0B */
    '_', /* 0x0C */
    '+', /* 0x0D */
    '\b',/* 0x0E */
    '\t',/* 0x0F */
    'Q', /* 0x10 */
    'W', /* 0x11 */
    'E', /* 0x12 */
    'R', /* 0x13 */
    'T', /* 0x14 */
    'Y', /* 0x15 */
    'U', /* 0x16 */
    'I', /* 0x17 */
    'O', /* 0x18 */
    'P', /* 0x19 */
    '{', /* 0x1A */
    '}', /* 0x1B */
    '\n',/* 0x1C */
    0,   /* 0x1D */
    'A', /* 0x1E */
    'S', /* 0x1F */
    'D', /* 0x20 */
    'F', /* 0x21 */
    'G', /* 0x22 */
    'H', /* 0x23 */
    'J', /* 0x24 */
    'K', /* 0x25 */
    'L', /* 0x26 */
    ':', /* 0x27 */
    '"', /* 0x28 */
    '~', /* 0x29 */
    0,   /* 0x2A */
    '|', /* 0x2B */
    'Z', /* 0x2C */
    'X', /* 0x2D */
    'C', /* 0x2E */
    'V', /* 0x2F */
    'B', /* 0x30 */
    'N', /* 0x31 */
    'M', /* 0x32 */
    '<', /* 0x33 */
    '>', /* 0x34 */
    '?', /* 0x35 */
    0,   /* 0x36 */
    '*', /* 0x37 */
    0,   /* 0x38 */
    ' ', /* 0x39 */
};

/* Keyboard state flags */
static int shift_pressed = 0;
static int caps_lock = 0;

/* Input buffer */
static char keyboard_buffer[KEYBOARD_BUFFER_SIZE];
static volatile int buffer_head = 0;
static volatile int buffer_tail = 0;

/* Check if a scancode is a make code (key press) or break code (key release) */
static inline int is_make_code(uint8_t scancode) {
    return !(scancode & 0x80);
}

/* Convert scancode to ASCII character */
static char scancode_to_char(uint8_t scancode) {
    char c = 0;
    
    if (scancode >= sizeof(scancode_to_ascii)) {
        return 0;
    }
    
    if (shift_pressed) {
        c = scancode_shift_ascii[scancode];
    } else {
        c = scancode_to_ascii[scancode];
    }
    
    /* Handle caps lock for letters */
    if (caps_lock && c >= 'a' && c <= 'z') {
        c = c - 'a' + 'A';
    } else if (caps_lock && c >= 'A' && c <= 'Z') {
        c = c - 'A' + 'a';
    }
    
    return c;
}

/* Add character to buffer */
static void buffer_put(char c) {
    int next_head = (buffer_head + 1) % KEYBOARD_BUFFER_SIZE;
    if (next_head != buffer_tail) {
        keyboard_buffer[buffer_head] = c;
        buffer_head = next_head;
    }
}

/* Get character from buffer */
char keyboard_getchar(void) {
    char c = 0;
    if (buffer_head != buffer_tail) {
        c = keyboard_buffer[buffer_tail];
        buffer_tail = (buffer_tail + 1) % KEYBOARD_BUFFER_SIZE;
    }
    return c;
}

/* Check if buffer has data */
int keyboard_available(void) {
    return buffer_head != buffer_tail;
}

/* Keyboard interrupt handler (IRQ1) */
void keyboard_handler(registers_t* regs) {
    uint8_t scancode = inb(KEYBOARD_PORT);
    
    /* Ignore break codes (key releases) except for tracking modifier keys */
    if (!is_make_code(scancode)) {
        switch (scancode & 0x7F) {
            case KEY_LSHIFT:
            case KEY_RSHIFT:
                shift_pressed = 0;
                break;
            case KEY_CAPSLOCK:
                /* Toggle handled on make only */
                break;
        }
        goto done;
    }
    
    /* Handle special keys */
    switch (scancode) {
        case KEY_LSHIFT:
        case KEY_RSHIFT:
            shift_pressed = 1;
            break;
            
        case KEY_CAPSLOCK:
            caps_lock = !caps_lock;
            break;
            
        default: {
            char c = scancode_to_char(scancode);
            if (c != 0) {
                buffer_put(c);
            }
            break;
        }
    }
    
done:
    /* Send EOI to PIC */
    pic_send_eoi(1);
}

/* Initialize keyboard driver */
void keyboard_init(void) {
    /* Clear buffer */
    buffer_head = 0;
    buffer_tail = 0;
    shift_pressed = 0;
    caps_lock = 0;
    
    /* Register interrupt handler */
    register_interrupt_handler(33, keyboard_handler);
    
    /* Enable IRQ1 (keyboard) */
    pic_clear_mask(1);
}
