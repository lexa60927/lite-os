/* =============================================================================
 * MyOS - PS/2 Mouse Driver Implementation
 * mouse.c - PS/2 mouse driver via IRQ12 for X/Y coordinates and clicks
 * =============================================================================
 */

#include "mouse.h"
#include "../arch/i386/pic.h"
#include "../io.h"
#include <stdint.h>

/* PS/2 mouse port */
#define MOUSE_PORT      0x60
#define MOUSE_CMD_PORT  0x64

/* Mouse packet states */
#define MOUSE_PACKET_SIZE 3

/* Mouse state */
static mouse_state_t mouse = {
    .x = 320,
    .y = 240,
    .left_button = 0,
    .right_button = 0,
    .middle_button = 0,
    .visible = 0
};

/* Packet buffer */
static uint8_t mouse_packet[MOUSE_PACKET_SIZE];
static int mouse_byte_index = 0;

/* Check if mouse data is available */
static int mouse_data_available(void) {
    return inb(MOUSE_CMD_PORT) & 0x20;
}

/* Write command to mouse */
static void mouse_write(uint8_t data) {
    /* Wait for mouse controller to be ready */
    while (inb(MOUSE_CMD_PORT) & 0x02);
    
    /* Wait for transmit buffer to be empty */
    while (inb(MOUSE_CMD_PORT) & 0x01);
    
    outb(MOUSE_PORT, data);
}

/* Read data from mouse */
static uint8_t mouse_read(void) {
    /* Wait for data to be available */
    while (!mouse_data_available());
    return inb(MOUSE_PORT);
}

/* Enable mouse device */
static void mouse_enable(void) {
    mouse_write(0xA8);  /* Enable AUX device */
}

/* Set mouse sample rate */
static void mouse_set_sample_rate(uint8_t rate) {
    mouse_write(0xF3);
    mouse_write(rate);
}

/* Set mouse resolution */
static void mouse_set_resolution(uint8_t res) {
    mouse_write(0xE8);
    mouse_write(res);
}

/* Set mouse scaling to 1:1 */
static void mouse_set_scaling(void) {
    mouse_write(0xE6);
}

/* Initialize mouse */
static int mouse_hw_init(void) {
    /* Reset mouse */
    mouse_write(0xFF);
    if (mouse_read() != 0xFA) {
        return -1;  /* No ACK received */
    }
    mouse_read();  /* Read completion code */
    mouse_read();
    
    /* Enable mouse */
    mouse_enable();
    
    /* Set default settings */
    mouse_set_sample_rate(100);
    mouse_set_resolution(3);  /* 8 counts per mm */
    mouse_set_scaling();
    
    return 0;
}

/* Process mouse packet */
static void process_mouse_packet(void) {
    uint8_t status = mouse_packet[0];
    
    /* Extract button states */
    int left = status & 0x01;
    int right = status & 0x02;
    int middle = status & 0x04;
    int x_overflow = status & 0x80;
    int y_overflow = status & 0x40;
    int x_sign = status & 0x10;
    int y_sign = status & 0x20;
    
    /* Calculate delta X */
    int dx = (int16_t)mouse_packet[1];
    if (x_overflow) dx = 0;
    if (x_sign) dx |= 0xFF00;
    
    /* Calculate delta Y */
    int dy = (int16_t)mouse_packet[2];
    if (y_overflow) dy = 0;
    if (y_sign) dy |= 0xFF00;
    
    /* Update position */
    mouse.x += dx;
    mouse.y -= dy;  /* Y is inverted (up is positive in hardware) */
    
    /* Clamp to screen bounds (will be adjusted by GUI) */
    if (mouse.x < 0) mouse.x = 0;
    if (mouse.y < 0) mouse.y = 0;
    if (mouse.x > 2048) mouse.x = 2048;
    if (mouse.y > 2048) mouse.y = 2048;
    
    /* Update button states */
    mouse.left_button = left;
    mouse.right_button = right;
    mouse.middle_button = middle;
}

/* Mouse interrupt handler (IRQ12) */
void mouse_handler(registers_t* regs) {
    uint8_t data = inb(MOUSE_PORT);
    
    if (mouse_byte_index == 0) {
        /* Check if this is the start of a new packet */
        if (data & 0x08) {
            mouse_packet[0] = data;
            mouse_byte_index = 1;
        }
    } else if (mouse_byte_index < MOUSE_PACKET_SIZE) {
        mouse_packet[mouse_byte_index++] = data;
        
        if (mouse_byte_index == MOUSE_PACKET_SIZE) {
            /* Complete packet received */
            process_mouse_packet();
            mouse_byte_index = 0;
        }
    }
    
    /* Send EOI to PIC */
    pic_send_eoi(12);
}

/* Initialize mouse driver */
void mouse_init(void) {
    /* Initialize hardware */
    if (mouse_hw_init() != 0) {
        /* Mouse not detected, but continue anyway */
    }
    
    /* Reset state */
    mouse.x = 320;
    mouse.y = 240;
    mouse.left_button = 0;
    mouse.right_button = 0;
    mouse.middle_button = 0;
    mouse.visible = 0;
    mouse_byte_index = 0;
    
    /* Register interrupt handler for IRQ12 */
    register_interrupt_handler(44, mouse_handler);
    
    /* Enable IRQ12 (mouse) */
    pic_clear_mask(12);
}

/* Get mouse X coordinate */
int mouse_get_x(void) {
    return mouse.x;
}

/* Get mouse Y coordinate */
int mouse_get_y(void) {
    return mouse.y;
}

/* Get button state as bitmask */
int mouse_get_buttons(void) {
    return (mouse.left_button) | 
           (mouse.right_button << 1) | 
           (mouse.middle_button << 2);
}

/* Check if left button is pressed */
int mouse_is_left_pressed(void) {
    return mouse.left_button;
}

/* Check if right button is pressed */
int mouse_is_right_pressed(void) {
    return mouse.right_button;
}

/* Check if middle button is pressed */
int mouse_is_middle_pressed(void) {
    return mouse.middle_button;
}

/* Set mouse position */
void mouse_set_position(int x, int y) {
    mouse.x = x;
    mouse.y = y;
}

/* Show cursor */
void mouse_show_cursor(void) {
    mouse.visible = 1;
}

/* Hide cursor */
void mouse_hide_cursor(void) {
    mouse.visible = 0;
}

/* Check if cursor is visible */
int mouse_is_visible(void) {
    return mouse.visible;
}

/* Update mouse state (called by GUI) */
void mouse_update(int dx, int dy, int buttons) {
    mouse.x += dx;
    mouse.y += dy;
    mouse.left_button = buttons & 0x01;
    mouse.right_button = buttons & 0x02;
    mouse.middle_button = buttons & 0x04;
}

/* Get full mouse state */
mouse_state_t* mouse_get_state(void) {
    return &mouse;
}
