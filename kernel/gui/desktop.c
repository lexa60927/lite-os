/* =============================================================================
 * MyOS - Graphical Desktop Environment Implementation
 * desktop.c - Window manager, taskbar, start menu, and mouse cursor rendering
 * =============================================================================
 */

#include "desktop.h"
#include "../drivers/vbe.h"
#include "../drivers/mouse.h"
#include "../drivers/vga.h"
#include "../arch/i386/pic.h"
#include "../io.h"
#include <stdint.h>

/* GUI state */
static int gui_running = 0;
static int screen_width = 1024;
static int screen_height = 768;

/* Start menu state */
static start_menu_t start_menu = {
    .visible = 0,
    .x = 0,
    .y = 768 - 28 - 200,
    .width = 200,
    .height = 200
};

/* Windows array */
#define MAX_WINDOWS 8
static window_t windows[MAX_WINDOWS];
static int num_windows = 0;

/* Mouse cursor sprite (16x16 arrow) */
static const uint8_t cursor_sprite[16][2] = {
    {0x00, 0x00}, {0x80, 0x00}, {0xC0, 0x00}, {0xE0, 0x00},
    {0xF0, 0x00}, {0xF8, 0x00}, {0xFC, 0x00}, {0xFE, 0x00},
    {0xFF, 0x00}, {0xFF, 0x80}, {0xFF, 0xC0}, {0xFF, 0xE0},
    {0xF0, 0x00}, {0xF0, 0x00}, {0xC0, 0x00}, {0xC0, 0x00}
};

/* Draw mouse cursor */
void gui_draw_cursor(int x, int y) {
    if (!vbe_is_initialized()) return;
    
    /* Simple white cursor with black outline */
    for (int row = 0; row < 16 && y + row < screen_height; row++) {
        for (int col = 0; col < 8 && x + col < screen_width; col++) {
            uint8_t bit = (cursor_sprite[row][0] >> (7 - col)) & 1;
            if (bit) {
                vbe_set_pixel(x + col, y + row, 255, 255, 255);
            }
        }
        for (int col = 0; col < 8 && x + 8 + col < screen_width; col++) {
            uint8_t bit = (cursor_sprite[row][1] >> (7 - col)) & 1;
            if (bit) {
                vbe_set_pixel(x + 8 + col, y + row, 255, 255, 255);
            }
        }
    }
}

/* Draw desktop background */
void gui_draw_desktop(void) {
    vbe_clear_screen(DESKTOP_BG_R, DESKTOP_BG_G, DESKTOP_BG_B);
}

/* Draw taskbar at bottom of screen */
void gui_draw_taskbar(void) {
    int tb_y = screen_height - TASKBAR_HEIGHT;
    
    /* Taskbar background */
    vbe_fill_rect(0, tb_y, screen_width, TASKBAR_HEIGHT, 
                  TASKBAR_R, TASKBAR_G, TASKBAR_B);
    
    /* Start button */
    vbe_fill_rect(4, tb_y + 4, 80, TASKBAR_HEIGHT - 8,
                  BUTTON_R, BUTTON_G, BUTTON_B);
    vbe_draw_rect(4, tb_y + 4, 80, TASKBAR_HEIGHT - 8,
                  0x80, 0x80, 0x80);
    vbe_draw_string("Start", 14, tb_y + 10, 0, 0, 0);
    
    /* Clock area (right side) */
    vbe_fill_rect(screen_width - 100, tb_y + 4, 96, TASKBAR_HEIGHT - 8,
                  0xD0, 0xD0, 0xD0);
    vbe_draw_rect(screen_width - 100, tb_y + 4, 96, TASKBAR_HEIGHT - 8,
                  0x80, 0x80, 0x80);
    
    /* Divider line at top of taskbar */
    vbe_draw_line(0, tb_y, screen_width, tb_y, 0xFF, 0xFF, 0xFF);
}

/* Draw start menu */
void gui_draw_start_menu(void) {
    if (!start_menu.visible) return;
    
    int mx = start_menu.x;
    int my = start_menu.y;
    int mw = start_menu.width;
    int mh = start_menu.height;
    
    /* Menu background */
    vbe_fill_rect(mx, my, mw, mh, 0xC0, 0xC0, 0xC0);
    vbe_draw_rect(mx, my, mw, mh, 0x80, 0x80, 0x80);
    
    /* Menu items */
    vbe_draw_string("Programs", mx + 10, my + 20, 0, 0, 0);
    vbe_draw_string("Documents", mx + 10, my + 40, 0, 0, 0);
    vbe_draw_string("Settings", mx + 10, my + 60, 0, 0, 0);
    vbe_draw_string("Help", mx + 10, my + 80, 0, 0, 0);
    
    /* Exit to DOS button */
    vbe_fill_rect(mx + 10, my + 120, mw - 20, 30, 0xE0, 0x60, 0x60);
    vbe_draw_rect(mx + 10, my + 120, mw - 20, 30, 0x80, 0x00, 0x00);
    vbe_draw_string("Exit to DOS", mx + 20, my + 135, 255, 255, 255);
}

/* Draw a window */
void gui_draw_window(window_t* win) {
    if (!win->visible) return;
    
    /* Window shadow */
    vbe_fill_rect(win->x + 3, win->y + 3, win->width, win->height, 
                  0x40, 0x40, 0x40);
    
    /* Window background */
    vbe_fill_rect(win->x, win->y, win->width, win->height,
                  0xC0, 0xC0, 0xC0);
    
    /* Title bar */
    vbe_fill_rect(win->x, win->y, win->width, 20,
                  WINDOW_TITLE_R, WINDOW_TITLE_G, WINDOW_TITLE_B);
    
    /* Window title */
    vbe_draw_string(win->title, win->x + 5, win->y + 4, 255, 255, 255);
    
    /* Close button */
    vbe_fill_rect(win->x + win->width - 22, win->y + 2, 18, 16,
                  0xE0, 0x60, 0x60);
    vbe_draw_rect(win->x + win->width - 22, win->y + 2, 18, 16,
                  0x80, 0x00, 0x00);
    vbe_draw_string("X", win->x + win->width - 16, win->y + 5, 
                    255, 255, 255);
    
    /* Window border */
    vbe_draw_rect(win->x, win->y, win->width, win->height,
                  0x80, 0x80, 0x80);
}

/* Create default windows */
void gui_create_default_windows(void) {
    num_windows = 0;
    
    /* Welcome window */
    window_t* win = &windows[num_windows++];
    win->x = 100;
    win->y = 100;
    win->width = 400;
    win->height = 250;
    win->active = 1;
    win->visible = 1;
    win->draggable = 1;
    
    /* Copy title */
    const char* title = "Welcome to MyOS GUI";
    int i = 0;
    while (title[i] && i < 63) {
        win->title[i] = title[i];
        i++;
    }
    win->title[i] = '\0';
    
    /* Info window */
    win = &windows[num_windows++];
    win->x = 550;
    win->y = 150;
    win->width = 350;
    win->height = 200;
    win->active = 0;
    win->visible = 1;
    win->draggable = 1;
    
    title = "System Info";
    i = 0;
    while (title[i] && i < 63) {
        win->title[i] = title[i];
        i++;
    }
    win->title[i] = '\0';
}

/* Handle mouse click */
void gui_handle_click(int x, int y, int button) {
    int tb_y = screen_height - TASKBAR_HEIGHT;
    
    /* Check start button click */
    if (y >= tb_y && y < screen_height && x >= 4 && x <= 84) {
        start_menu.visible = !start_menu.visible;
        return;
    }
    
    /* Check exit to DOS button in start menu */
    if (start_menu.visible) {
        int mx = start_menu.x;
        int my = start_menu.y;
        if (x >= mx + 10 && x <= mx + start_menu.width - 10 &&
            y >= my + 120 && y <= my + 150) {
            gui_exit();
            return;
        }
        
        /* Click outside start menu closes it */
        if (x < mx || x > mx + start_menu.width ||
            y < my || y > my + start_menu.height) {
            start_menu.visible = 0;
        }
    }
    
    /* Check window close buttons */
    for (int i = 0; i < num_windows; i++) {
        window_t* win = &windows[i];
        if (win->visible) {
            int close_x = win->x + win->width - 22;
            int close_y = win->y + 2;
            if (x >= close_x && x <= close_x + 18 &&
                y >= close_y && y <= close_y + 16) {
                win->visible = 0;
                return;
            }
        }
    }
}

/* Handle mouse movement */
void gui_handle_move(int x, int y) {
    (void)x;
    (void)y;
    /* Could implement window dragging here */
}

/* Update GUI (called in main loop) */
void gui_update(void) {
    static int last_mouse_x = -1;
    static int last_mouse_y = -1;
    
    mouse_state_t* ms = mouse_get_state();
    
    /* Only redraw if mouse moved */
    if (ms->x != last_mouse_x || ms->y != last_mouse_y) {
        /* Redraw everything */
        gui_draw_desktop();
        
        /* Draw windows (back to front) */
        for (int i = 0; i < num_windows; i++) {
            gui_draw_window(&windows[i]);
        }
        
        gui_draw_taskbar();
        gui_draw_start_menu();
        
        /* Draw cursor */
        if (ms->visible) {
            gui_draw_cursor(ms->x, ms->y);
        }
        
        last_mouse_x = ms->x;
        last_mouse_y = ms->y;
    }
    
    /* Handle left click */
    static int last_left = 0;
    if (ms->left_button && !last_left) {
        gui_handle_click(ms->x, ms->y, 0);
    }
    last_left = ms->left_button;
}

/* Initialize GUI */
void gui_init(void) {
    /* Initialize VBE graphics mode */
    if (vbe_init() != 0) {
        kprintf("Failed to initialize VBE graphics mode\n");
        return;
    }
    
    /* Initialize mouse driver */
    mouse_init();
    
    /* Get screen dimensions */
    screen_width = vbe_get_width();
    screen_height = vbe_get_height();
    
    /* Update start menu position */
    start_menu.y = screen_height - TASKBAR_HEIGHT - start_menu.height;
    start_menu.x = 0;
    
    /* Show mouse cursor */
    mouse_show_cursor();
    
    /* Create default windows */
    gui_create_default_windows();
    
    /* Draw initial desktop */
    gui_draw_desktop();
    for (int i = 0; i < num_windows; i++) {
        gui_draw_window(&windows[i]);
    }
    gui_draw_taskbar();
    
    gui_running = 1;
    
    kprintf("GUI initialized: %dx%d@32bpp\n", screen_width, screen_height);
}

/* Run GUI main loop */
void gui_run(void) {
    kprintf("Starting GUI desktop environment...\n");
    kprintf("Move mouse to navigate. Click 'Start' for menu.\n");
    kprintf("Click 'Exit to DOS' to return to text mode.\n");
    
    while (gui_running) {
        gui_update();
        
        /* Small delay to prevent busy-waiting */
        for (volatile int i = 0; i < 100000; i++);
    }
}

/* Exit GUI and return to text mode */
void gui_exit(void) {
    gui_running = 0;
    
    /* Restore VGA text mode */
    vbe_restore_text_mode();
    
    /* Reinitialize VGA text driver */
    vga_init();
    
    kprintf("\nReturning to CLI mode...\n");
}

/* Check if GUI is running */
int gui_is_running(void) {
    return gui_running;
}

/* Get screen width */
int gui_get_screen_width(void) {
    return screen_width;
}

/* Get screen height */
int gui_get_screen_height(void) {
    return screen_height;
}
