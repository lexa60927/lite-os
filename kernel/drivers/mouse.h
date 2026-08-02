/* =============================================================================
 * MyOS - PS/2 Mouse Driver
 * mouse.h - PS/2 mouse driver declarations for IRQ12
 * =============================================================================
 */

#ifndef _MOUSE_H
#define _MOUSE_H

#include <stdint.h>
#include "../arch/i386/idt.h"

/* Mouse event structure */
typedef struct {
    int x;              /* X coordinate */
    int y;              /* Y coordinate */
    int left;           /* Left button state (0 or 1) */
    int right;          /* Right button state (0 or 1) */
    int middle;         /* Middle button state (0 or 1) */
    int buttons_changed;/* Buttons changed flag */
} mouse_event_t;

/* Mouse state */
typedef struct {
    int x;
    int y;
    int left_button;
    int right_button;
    int middle_button;
    int visible;
} mouse_state_t;

/* Default mouse cursor dimensions */
#define MOUSE_CURSOR_WIDTH  16
#define MOUSE_CURSOR_HEIGHT 16

/* Function Declarations */
void mouse_init(void);
void mouse_handler(registers_t* regs);
int mouse_get_x(void);
int mouse_get_y(void);
int mouse_get_buttons(void);
int mouse_is_left_pressed(void);
int mouse_is_right_pressed(void);
int mouse_is_middle_pressed(void);
void mouse_set_position(int x, int y);
void mouse_show_cursor(void);
void mouse_hide_cursor(void);
int mouse_is_visible(void);
void mouse_update(int dx, int dy, int buttons);
mouse_state_t* mouse_get_state(void);

#endif /* _MOUSE_H */
