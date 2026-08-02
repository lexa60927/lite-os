/* =============================================================================
 * MyOS - Graphical Desktop Environment
 * desktop.h - Window manager, taskbar, start menu declarations
 * =============================================================================
 */

#ifndef _DESKTOP_H
#define _DESKTOP_H

#include <stdint.h>

/* Desktop colors (RGB) */
#define DESKTOP_BG_R        0x3A
#define DESKTOP_BG_G        0x6E
#define DESKTOP_BG_B        0xAA

#define TASKBAR_R           0xC0
#define TASKBAR_G           0xC0
#define TASKBAR_B           0xC0

#define WINDOW_TITLE_R      0x00
#define WINDOW_TITLE_G      0x00
#define WINDOW_TITLE_B      0x80

#define BUTTON_R            0xE0
#define BUTTON_G            0xE0
#define BUTTON_B            0xE0

#define BUTTON_HOVER_R      0xFF
#define BUTTON_HOVER_G      0xFF
#define BUTTON_HOVER_B      0xFF

/* Taskbar dimensions */
#define TASKBAR_HEIGHT      28

/* Window structure */
typedef struct {
    int x;
    int y;
    uint32_t width;
    uint32_t height;
    char title[64];
    int active;
    int visible;
    int draggable;
} window_t;

/* GUI Window with callbacks for applications */
typedef struct gui_window {
    int x;
    int y;
    uint32_t width;
    uint32_t height;
    char title[64];
    int active;
    int visible;
    int draggable;
    void (*draw_content)(struct gui_window* win);
    void (*handle_click)(struct gui_window* win, int x, int y, int button);
    void (*handle_key)(struct gui_window* win, char key);
    void* user_data;
} gui_window_t;

/* Button structure */
typedef struct {
    int x;
    int y;
    uint32_t width;
    uint32_t height;
    char label[32];
    int hovered;
    void (*callback)(void);
} button_t;

/* Start menu state */
typedef struct {
    int visible;
    int x;
    int y;
    uint32_t width;
    uint32_t height;
} start_menu_t;

/* Function Declarations */
void gui_init(void);
void gui_run(void);
void gui_exit(void);
void gui_draw_desktop(void);
void gui_draw_taskbar(void);
void gui_draw_start_menu(void);
void gui_draw_window(window_t* win);
void gui_draw_cursor(int x, int y);
void gui_update(void);
void gui_handle_click(int x, int y, int button);
void gui_handle_move(int x, int y);
int gui_is_running(void);
void gui_create_default_windows(void);

/* GUI Window management for applications */
gui_window_t* gui_create_window(const char* title, int x, int y, uint32_t width, uint32_t height);
void gui_destroy_window(gui_window_t* win);
void gui_show_window(gui_window_t* win);
void gui_hide_window(gui_window_t* win);
void gui_redraw_window(gui_window_t* win);

/* Global GUI state access */
int gui_get_screen_width(void);
int gui_get_screen_height(void);

#endif /* _DESKTOP_H */
