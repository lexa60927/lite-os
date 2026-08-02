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

/* File Manager window state */
static gui_window_t* filemgr_window = NULL;
static int filemgr_running = 0;
static char current_path[128] = "/";

/* Draw file manager content */
static void filemgr_draw_content(gui_window_t* win) {
    if (!win || !win->fb) return;
    
    /* Clear background */
    uint32_t* fb = (uint32_t*)win->fb;
    for (int y = 0; y < win->height; y++) {
        for (int x = 0; x < win->width; x++) {
            fb[y * win->width + x] = 0xFFFFFF;  /* White background */
        }
    }
    
    /* Draw header bar */
    gui_draw_rect(win->fb, win->width, win->height, 0, 0, win->width, 25, 0x0066CC);
    gui_draw_string(win->fb, win->width, "File Manager", 10, 7, 0xFFFFFF);
    
    /* Draw path bar */
    gui_draw_rect(win->fb, win->width, win->height, 0, 30, win->width, 20, 0xF0F0F0);
    gui_draw_string(win->fb, win->width, current_path, 10, 34, 0x000000);
    
    /* Draw separator */
    gui_draw_line(win->fb, win->width, 0, 55, win->width, 55, 0xC0C0C0);
    
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
        
        while (*line && y_pos < win->height - 10) {
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
                uint32_t color = 0x000000;
                if (filename[0] == '[' && filename[1] == 'D') {
                    color = 0x0066CC;  /* Blue for directories */
                }
                
                gui_draw_string(win->fb, win->width, filename, 15, y_pos, color);
                y_pos += 20;
            }
            
            line += len + 1;
        }
    } else {
        gui_draw_string(win->fb, win->width, "Directory empty or not found", 15, 65, 0xFF0000);
    }
}

/* Handle mouse click in file manager */
static void filemgr_handle_click(int mx, int my) {
    if (!filemgr_window) return;
    
    /* Simple click handling - would navigate to folders in full implementation */
    if (my > 65 && my < filemgr_window->height - 10) {
        /* File/folder clicked */
        kprintf("[FileMgr] Item clicked at (%d, %d)\n", mx, my);
    }
}

/* Open File Manager */
void filemgr_open(void) {
    if (filemgr_running) return;
    
    filemgr_window = gui_create_window("File Manager", 150, 80, 400, 320);
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

/* Update file manager */
void filemgr_update(void) {
    if (filemgr_window && filemgr_running) {
        filemgr_draw_content(filemgr_window);
    }
}
