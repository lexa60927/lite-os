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
#include "../drivers/vbe.h"

/* Editor window state */
static gui_window_t* editor_window = NULL;
static int editor_running = 0;
static char editor_buffer[2048];
static int buffer_len = 0;
static int cursor_pos = 0;
static char current_file[64] = "";

/* Draw editor content */
static void editor_draw_content(gui_window_t* win) {
    if (!win) return;

    /* Clear background to white using VBE */
    vbe_fill_rect(win->x, win->y + 20, win->width, win->height - 20, 0xFF, 0xFF, 0xFF);

    /* Draw toolbar */
    vbe_fill_rect(win->x, win->y + 30, win->width, 22, 0xF0, 0xF0, 0xF0);
    vbe_draw_string("[S] Save  [O] Open  [N] New  [X] Close", win->x + 5, win->y + 34, 0, 0, 0);

    /* Draw text content */
    int line_y = 62;
    int line_start = 0;
    int i;

    for (i = 0; i <= buffer_len && line_y < (int)win->height - 10; i++) {
        if (editor_buffer[i] == '\n' || editor_buffer[i] == '\0' || i == buffer_len) {
            /* Draw this line */
            int line_len = i - line_start;
            char line_buf[128];
            int copy_len = (line_len < 127) ? line_len : 127;

            memcpy(line_buf, &editor_buffer[line_start], copy_len);
            line_buf[copy_len] = '\0';

            vbe_draw_string(line_buf, win->x + 10, win->y + line_y, 0, 0, 0);
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

        int cursor_x = win->x + 10 + cur_col * 8;
        int cursor_y = win->y + 62 + cur_line * 16;

        /* Draw blinking block cursor */
        static int blink = 0;
        blink = !blink;
        if (blink) {
            vbe_fill_rect(cursor_x, cursor_y, 8, 14, 0x00, 0x00, 0x00);
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
    } else if (key == 75) {
        /* Left arrow */
        if (cursor_pos > 0) cursor_pos--;
    } else if (key == 77) {
        /* Right arrow */
        if (cursor_pos < buffer_len) cursor_pos++;
    }
}

/* Handle mouse click in editor */
static void editor_handle_click(gui_window_t* win, int mx, int my, int button) {
    (void)button;
    (void)mx;
    (void)my;
    if (!win) return;
    /* Could implement text selection here */
}

/* Open Notepad */
void editor_open(void) {
    if (editor_running) return;

    editor_window = gui_create_window("Notepad", 100, 100, 500, 400);
    if (!editor_window) return;

    editor_window->draw_content = editor_draw_content;
    editor_window->handle_click = editor_handle_click;
    editor_window->handle_key = editor_handle_key;
    editor_running = 1;

    /* Initialize buffer */
    buffer_len = 0;
    cursor_pos = 0;
    editor_buffer[0] = '\0';
    current_file[0] = '\0';

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
