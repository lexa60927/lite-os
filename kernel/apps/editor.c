/* =============================================================================
 * MyOS - Text Editor / Notepad Application
 * editor.c - Simple text editor with typing, cursor, and file save/load
 * =============================================================================
 */

#include "editor.h"
#include "../../include/stddef.h"
#include "../drivers/vga.h"
#include "../gui/desktop.h"
#include "../fs/vfs.h"
#include "../memory/heap.h"

/* Editor window state */
static gui_window_t* editor_window = NULL;
static int editor_running = 0;
static char editor_buffer[2048];
static int buffer_len = 0;
static int cursor_pos = 0;
static char current_file[64] = "";

/* Draw editor content */
static void editor_draw_content(gui_window_t* win) {
    if (!win || !win->fb) return;
    
    /* Clear background to white */
    uint32_t* fb = (uint32_t*)win->fb;
    for (int y = 0; y < win->height; y++) {
        for (int x = 0; x < win->width; x++) {
            fb[y * win->width + x] = 0xFFFFFF;
        }
    }
    
    /* Draw title bar */
    gui_draw_rect(win->fb, win->width, win->height, 0, 0, win->width, 25, 0x0066CC);
    
    char title[64];
    if (current_file[0]) {
        snprintf(title, sizeof(title), "Notepad - %s", current_file);
    } else {
        snprintf(title, sizeof(title), "Notepad - Unsaved");
    }
    gui_draw_string(win->fb, win->width, title, 10, 7, 0xFFFFFF);
    
    /* Draw toolbar */
    gui_draw_rect(win->fb, win->width, win->height, 0, 30, win->width, 22, 0xF0F0F0);
    gui_draw_string(win->fb, win->width, "[S] Save  [O] Open  [N] New  [X] Close", 5, 34, 0x000000);
    
    /* Draw text area border */
    gui_draw_rect(win->fb, win->width, win->height, 5, 57, win->width - 10, win->height - 62, 0x808080);
    
    /* Draw text content */
    int line_y = 62;
    int line_start = 0;
    int i;
    
    for (i = 0; i <= buffer_len && line_y < win->height - 10; i++) {
        if (editor_buffer[i] == '\n' || editor_buffer[i] == '\0' || i == buffer_len) {
            /* Draw this line */
            int line_len = i - line_start;
            char line_buf[128];
            int copy_len = (line_len < 127) ? line_len : 127;
            
            memcpy(line_buf, &editor_buffer[line_start], copy_len);
            line_buf[copy_len] = '\0';
            
            gui_draw_string(win->fb, win->width, line_buf, 10, line_y, 0x000000);
            line_y += 16;
            line_start = i + 1;
        }
    }
    
    /* Draw cursor blink indicator */
    if (cursor_pos >= 0 && cursor_pos <= buffer_len) {
        /* Calculate cursor position */
        int cur_line = 0;
        int cur_col = 0;
        for (i = 0; i < cursor_pos && i < buffer_len; i++) {
            if (editor_buffer[i] == '\n') {
                cur_line++;
                cur_col = 0;
            } else {
                cur_col++;
            }
        }
        
        int cursor_x = 10 + cur_col * 8;
        int cursor_y = 62 + cur_line * 16;
        
        /* Draw blinking block cursor */
        static int blink = 0;
        blink = !blink;
        if (blink) {
            gui_draw_rect(win->fb, win->width, win->height, cursor_x, cursor_y, 8, 14, 0x000000);
        }
    }
}

/* Handle keyboard input in editor */
void editor_handle_key(char key) {
    if (!editor_running) return;
    
    if (key == '\b') {
        /* Backspace */
        if (cursor_pos > 0) {
            cursor_pos--;
            for (int i = cursor_pos; i < buffer_len - 1; i++) {
                editor_buffer[i] = editor_buffer[i + 1];
            }
            buffer_len--;
            editor_buffer[buffer_len] = '\0';
        }
    } else if (key == '\n') {
        /* Enter */
        if (buffer_len < sizeof(editor_buffer) - 2) {
            for (int i = buffer_len; i > cursor_pos; i--) {
                editor_buffer[i] = editor_buffer[i - 1];
            }
            editor_buffer[cursor_pos] = '\n';
            buffer_len++;
            cursor_pos++;
            editor_buffer[buffer_len] = '\0';
        }
    } else if (key >= 32 && key < 127) {
        /* Printable character */
        if (buffer_len < sizeof(editor_buffer) - 2) {
            for (int i = buffer_len; i > cursor_pos; i--) {
                editor_buffer[i] = editor_buffer[i - 1];
            }
            editor_buffer[cursor_pos] = key;
            buffer_len++;
            cursor_pos++;
            editor_buffer[buffer_len] = '\0';
        }
    }
}

/* Handle mouse click */
static void editor_handle_click(int mx, int my) {
    if (!editor_window) return;
    
    /* Check toolbar buttons */
    if (my >= 30 && my < 52) {
        if (mx >= 5 && mx < 50) {
            /* Save */
            kprintf("[Editor] Save clicked\n");
        } else if (mx >= 55 && mx < 100) {
            /* Open */
            kprintf("[Editor] Open clicked\n");
        } else if (mx >= 105 && mx < 150) {
            /* New */
            buffer_len = 0;
            cursor_pos = 0;
            current_file[0] = '\0';
            memset(editor_buffer, 0, sizeof(editor_buffer));
        } else if (mx >= 155 && mx < 210) {
            /* Close */
            editor_close();
        }
    }
}

/* Open Notepad */
void editor_open(void) {
    if (editor_running) return;
    
    editor_window = gui_create_window("Notepad", 100, 50, 500, 350);
    if (!editor_window) return;
    
    editor_window->draw_content = editor_draw_content;
    editor_window->handle_click = editor_handle_click;
    editor_running = 1;
    
    /* Initialize empty buffer */
    buffer_len = 0;
    cursor_pos = 0;
    current_file[0] = '\0';
    memset(editor_buffer, 0, sizeof(editor_buffer));
    
    gui_show_window(editor_window);
}

/* Close Notepad */
void editor_close(void) {
    if (editor_window) {
        gui_destroy_window(editor_window);
        editor_window = NULL;
    }
    editor_running = 0;
}

/* Update editor display */
void editor_update(void) {
    if (editor_window && editor_running) {
        editor_draw_content(editor_window);
    }
}
