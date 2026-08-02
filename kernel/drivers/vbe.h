/* =============================================================================
 * MyOS - VBE Framebuffer Driver
 * vbe.h - VESA BIOS Extensions framebuffer mode management
 * =============================================================================
 */

#ifndef _VBE_H
#define _VBE_H

#include <stdint.h>

/* VBE Mode Info Block structure */
typedef struct {
    /* Mandatory information for all VBE revisions */
    uint16_t mode_attributes;
    uint8_t  winA_attributes;
    uint8_t  winB_attributes;
    uint16_t granularity;
    uint16_t winsize;
    uint16_t winA_segment;
    uint16_t winB_segment;
    uint32_t win_func_ptr;
    uint16_t bytes_per_scanline;

    /* Mandatory information for VBE 1.2 and above */
    uint16_t x_resolution;
    uint16_t y_resolution;
    uint8_t  x_char_size;
    uint8_t  y_char_size;
    uint8_t  number_of_planes;
    uint8_t  bits_per_pixel;
    uint16_t number_of_banks;
    uint8_t  memory_model;
    uint8_t  bank_size;
    uint8_t  number_of_image_pages;
    uint8_t  reserved0;

    /* Direct Color fields (required for direct/6 and YUV/7) */
    uint8_t  red_mask_size;
    uint8_t  red_field_position;
    uint8_t  green_mask_size;
    uint8_t  green_field_position;
    uint8_t  blue_mask_size;
    uint8_t  blue_field_position;
    uint8_t  reserved_mask_size;
    uint8_t  reserved_field_position;
    uint8_t  direct_color_mode_info;

    /* Mandatory information for VBE 2.0 and above */
    uint32_t phys_base_ptr;
    uint32_t reserved1;
    uint16_t linear_bytes_per_scanline;

    /* Banked, Linear, and Tile modes info */
    uint8_t  num_pages;
    uint8_t  reserved2;
} __attribute__((packed)) vbe_mode_info_t;

/* VBE Controller Information */
typedef struct {
    char     signature[4];
    uint16_t version;
    uint32_t oem_string_ptr;
    uint32_t capabilities;
    uint32_t video_mode_ptr;
    uint16_t total_memory;
    uint16_t oem_software_rev;
    uint32_t oem_vendor_name_ptr;
    uint32_t oem_product_name_ptr;
    uint32_t oem_product_rev_ptr;
    uint8_t  reserved[222];
    uint8_t  oem_data[256];
} __attribute__((packed)) vbe_controller_info_t;

/* Standard VBE mode flags */
#define VBE_MODE_ATTRIBUTE_SUPPORTED        0x0001
#define VBE_MODE_ATTRIBUTE_TTY              0x0004
#define VBE_MODE_ATTRIBUTE_GRAPHICS         0x0010
#define VBE_MODE_ATTRIBUTE_LFB_AVAILABLE    0x0080

/* Default GUI mode: 1024x768x32bpp */
#define VBE_DEFAULT_WIDTH   1024
#define VBE_DEFAULT_HEIGHT  768
#define VBE_DEFAULT_BPP     32

/* Function Declarations */
int vbe_init(void);
void vbe_set_pixel(uint32_t x, uint32_t y, uint8_t r, uint8_t g, uint8_t b);
void vbe_clear_screen(uint8_t r, uint8_t g, uint8_t b);
void vbe_draw_rect(uint32_t x, uint32_t y, uint32_t w, uint32_t h, uint8_t r, uint8_t g, uint8_t b);
void vbe_fill_rect(uint32_t x, uint32_t y, uint32_t w, uint32_t h, uint8_t r, uint8_t g, uint8_t b);
void vbe_draw_line(uint32_t x0, uint32_t y0, uint32_t x1, uint32_t y1, uint8_t r, uint8_t g, uint8_t b);
void vbe_draw_char(char c, uint32_t x, uint32_t y, uint8_t r, uint8_t g, uint8_t b);
void vbe_draw_string(const char* str, uint32_t x, uint32_t y, uint8_t r, uint8_t g, uint8_t b);
uint32_t vbe_get_width(void);
uint32_t vbe_get_height(void);
uint32_t vbe_get_bpp(void);
int vbe_is_initialized(void);
void vbe_restore_text_mode(void);

#endif /* _VBE_H */
