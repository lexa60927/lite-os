/* =============================================================================
 * MyOS - VGA Text Mode Driver
 * vga.h - VGA driver function declarations and constants
 * =============================================================================
 */

#ifndef _VGA_H
#define _VGA_H

#include <stdint.h>

/* VGA text mode dimensions */
#define VGA_WIDTH     80
#define VGA_HEIGHT    25

/* VGA memory address */
#define VGA_MEMORY    0xB8000

/* VGA color codes */
typedef enum {
    VGA_BLACK         = 0,
    VGA_BLUE          = 1,
    VGA_GREEN         = 2,
    VGA_CYAN          = 3,
    VGA_RED           = 4,
    VGA_MAGENTA       = 5,
    VGA_BROWN         = 6,
    VGA_LIGHT_GREY    = 7,
    VGA_DARK_GREY     = 8,
    VGA_LIGHT_BLUE    = 9,
    VGA_LIGHT_GREEN   = 10,
    VGA_LIGHT_CYAN    = 11,
    VGA_LIGHT_RED     = 12,
    VGA_LIGHT_MAGENTA = 13,
    VGA_YELLOW        = 14,
    VGA_WHITE         = 15,
} vga_color_t;

/* Function Declarations */
void vga_init(void);
void vga_clear(void);
void vga_set_color(uint8_t fg, uint8_t bg);
void vga_putchar(char c, int x, int y, uint8_t color);
void vga_scroll(void);
void kprintf(const char* format, ...);
void kprint(const char* str);

#endif /* _VGA_H */
