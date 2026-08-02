/* =============================================================================
 * MyOS - File Manager Application
 * filemgr.c - Graphical file browser for VFS/initrd filesystem
 * =============================================================================
 */

#include "filemgr.h"
#include "../../include/stddef.h"
#include "../drivers/vga.h"
#include "../gui/desktop.h"
#include "../fs/vfs.h"
#include "../memory/heap.h"
#include "../drivers/vbe.h"

/* File Manager window state */
static gui_window_t* filemgr_window = NULL;
static int filemgr_running = 0;
static char current_path[128] = "/";

/* Draw file manager content */
static void filemgr_draw_content(gui_window_t* win) {
    if (!win) return;

    /* Clear background using VBE */
    vbe_fill_rect(win->x, win->y + 20, win->width, win->height - 20, 0xFF, 0xFF, 0xFF);

    /* Draw path bar */
    vbe_fill_rect(win->x, win->y + 30, win->width, 20, 0xF0, 0xF0, 0xF0);
    vbe_draw_string(current_path, win->x + 10, win->y + 34, 0, 0, 0);

    /* List directory contents */
    char buffer[512];
    int result = vfs_listdir(current_path, buffer, sizeof(buffer));

    if (result > 0) {
        /* Parse and display files */
        int y_pos = 65;
        const char* line = buffer;

        /* Skip header lines */
        while (*line && *line != '[') {
            line++;
        }

        while (*line && y_pos < (int)win->height - 10) {
            /* Find end of line */
            int len = 0;
            while (line[len] && line[len] != '\n') len++;

            if (len > 0) {
                char filename[64];
                int i;
                for (i = 0; i < 63 && i < len; i++) {
                    filename[i] = line[i];
                }
                filename[i] = '\0';

                /* Determine icon based on type */
                uint8_t r = 0, g = 0, b = 0;
                if (filename[0] == '[' && filename[1] == 'D') {
                    r = 0; g = 102; b = 204;  /* Blue for directories */
                }

                vbe_draw_string(filename, win->x + 15, win->y + y_pos, r, g, b);
                y_pos += 20;
            }

            line += len + 1;
        }
    } else {
        vbe_draw_string("Directory empty or not found", win->x + 15, win->y + 65, 255, 0, 0);
    }
}

/* Handle mouse click in file manager */
static void filemgr_handle_click(gui_window_t* win, int mx, int my, int button) {
    (void)button;
    if (!win) return;

    /* Simple click handling - would navigate to folders in full implementation */
    if (my > 65 && my < (int)win->height - 10) {
        /* File/folder clicked */
        kprintf("[FileMgr] Item clicked at (%d, %d)\n", mx, my);
    }
}

/* Open File Manager */
void filemgr_open(void) {
    if (filemgr_running) return;

    filemgr_window = gui_create_window("File Manager", 150, 150, 400, 350);
    if (!filemgr_window) return;

    filemgr_window->draw_content = filemgr_draw_content;
    filemgr_window->handle_click = filemgr_handle_click;
    filemgr_running = 1;

    gui_show_window(filemgr_window);
}

/* Close File Manager */
void filemgr_close(void) {
    if (filemgr_window) {
        gui_destroy_window(filemgr_window);
        filemgr_window = NULL;
    }
    filemgr_running = 0;
}

/* Update file manager display */
void filemgr_update(void) {
    if (filemgr_window && filemgr_running) {
        filemgr_draw_content(filemgr_window);
    }
}
