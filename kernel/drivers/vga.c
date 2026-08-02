/* =============================================================================
 * MyOS - VGA Text Mode Driver Implementation
 * vga.c - Direct video memory access for text output
 * =============================================================================
 */

#include "vga.h"
#include <stdint.h>
#include <stdarg.h>
#include <stddef.h>

/* VGA buffer pointer */
static uint16_t* vga_buffer = (uint16_t*)VGA_MEMORY;

/* Current cursor position */
static int cursor_x = 0;
static int cursor_y = 0;

/* Current color attribute */
static uint8_t current_color = 0x0F;  /* White on black */

/* Create VGA color byte from foreground and background */
static inline uint8_t vga_make_color(uint8_t fg, uint8_t bg) {
    return fg | (bg << 4);
}

/* Create VGA entry (character + color) */
static inline uint16_t vga_make_entry(char c, uint8_t color) {
    return (uint16_t)c | ((uint16_t)color << 8);
}

/* Initialize VGA driver */
void vga_init(void) {
    cursor_x = 0;
    cursor_y = 0;
    current_color = vga_make_color(VGA_LIGHT_GREY, VGA_BLACK);
    vga_clear();
}

/* Clear the screen */
void vga_clear(void) {
    for (int y = 0; y < VGA_HEIGHT; y++) {
        for (int x = 0; x < VGA_WIDTH; x++) {
            vga_buffer[y * VGA_WIDTH + x] = vga_make_entry(' ', current_color);
        }
    }
    cursor_x = 0;
    cursor_y = 0;
}

/* Set text color */
void vga_set_color(uint8_t fg, uint8_t bg) {
    current_color = vga_make_color(fg, bg);
}

/* Put a character at specific position */
void vga_putchar(char c, int x, int y, uint8_t color) {
    if (x >= 0 && x < VGA_WIDTH && y >= 0 && y < VGA_HEIGHT) {
        vga_buffer[y * VGA_WIDTH + x] = vga_make_entry(c, color);
    }
}

/* Scroll the screen up by one line */
void vga_scroll(void) {
    /* Move all lines up by one */
    for (int y = 0; y < VGA_HEIGHT - 1; y++) {
        for (int x = 0; x < VGA_WIDTH; x++) {
            vga_buffer[y * VGA_WIDTH + x] = vga_buffer[(y + 1) * VGA_WIDTH + x];
        }
    }
    
    /* Clear the last line */
    for (int x = 0; x < VGA_WIDTH; x++) {
        vga_buffer[(VGA_HEIGHT - 1) * VGA_WIDTH + x] = vga_make_entry(' ', current_color);
    }
}

/* Put a character and advance cursor */
static void vga_putc(char c) {
    if (c == '\n') {
        cursor_x = 0;
        cursor_y++;
    } else if (c == '\r') {
        cursor_x = 0;
    } else if (c == '\t') {
        cursor_x = (cursor_x + 8) & ~7;
    } else if (c == '\b') {
        if (cursor_x > 0) {
            cursor_x--;
            vga_putchar(' ', cursor_x, cursor_y, current_color);
        }
    } else {
        vga_putchar(c, cursor_x, cursor_y, current_color);
        cursor_x++;
    }
    
    /* Handle line wrap */
    if (cursor_x >= VGA_WIDTH) {
        cursor_x = 0;
        cursor_y++;
    }
    
    /* Handle scrolling */
    if (cursor_y >= VGA_HEIGHT) {
        vga_scroll();
        cursor_y = VGA_HEIGHT - 1;
    }
}

/* Print a string */
void kprint(const char* str) {
    while (*str) {
        vga_putc(*str++);
    }
}

/* Print a single character (helper for kprintf) */
static void kprint_char(char c);

/* Convert integer to string and print */
static void kprint_int(int value, int base, int is_signed) {
    char buffer[32];
    int i = 0;
    unsigned int uvalue;
    
    if (is_signed && value < 0) {
        kprint("-");
        uvalue = (unsigned int)(-value);
    } else {
        uvalue = (unsigned int)value;
    }
    
    if (uvalue == 0) {
        kprint("0");
        return;
    }
    
    while (uvalue > 0) {
        int digit = uvalue % base;
        buffer[i++] = (digit < 10) ? ('0' + digit) : ('A' + digit - 10);
        uvalue /= base;
    }
    
    /* Print in reverse order */
    while (i > 0) {
        kprint_char(buffer[--i]);
    }
}

/* Print a single character (helper for kprintf) */
static void kprint_char(char c) {
    vga_putc(c);
}

/* Formatted print function (simplified printf) */
void kprintf(const char* format, ...) {
    va_list args;
    va_start(args, format);
    
    while (*format) {
        if (*format == '%') {
            format++;
            switch (*format) {
                case 's': {
                    const char* str = va_arg(args, const char*);
                    kprint(str);
                    break;
                }
                case 'd': {
                    int value = va_arg(args, int);
                    kprint_int(value, 10, 1);
                    break;
                }
                case 'u': {
                    unsigned int value = va_arg(args, unsigned int);
                    kprint_int((int)value, 10, 0);
                    break;
                }
                case 'x': {
                    unsigned int value = va_arg(args, unsigned int);
                    kprint("0x");
                    kprint_int((int)value, 16, 0);
                    break;
                }
                case 'c': {
                    char c = (char)va_arg(args, int);
                    kprint_char(c);
                    break;
                }
                case '%': {
                    kprint_char('%');
                    break;
                }
                default:
                    kprint_char('%');
                    kprint_char(*format);
                    break;
            }
        } else {
            kprint_char(*format);
        }
        format++;
    }
    
    va_end(args);
}
