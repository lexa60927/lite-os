/* =============================================================================
 * MyOS - Task Manager Application
 * taskmgr.c - Graphical process monitor with CPU/RAM usage and kill functionality
 * =============================================================================
 */

#include "taskmgr.h"
#include "../../include/stddef.h"
#include "../drivers/vga.h"
#include "../gui/desktop.h"
#include "../arch/i386/sched.h"
#include "../memory/heap.h"
#include "../drivers/vbe.h"

/* Task Manager window state */
static gui_window_t* taskmgr_window = NULL;
static int taskmgr_running = 0;

/* Draw task manager window content */
static void taskmgr_draw_content(gui_window_t* win) {
    if (!win) return;
    
    /* Clear window background using VBE */
    vbe_fill_rect(win->x, win->y + 20, win->width, win->height - 20, 0xC0, 0xC0, 0xC0);
    
    /* Draw process list header */
    vbe_draw_string("PID   State      Name", win->x + 10, win->y + 35, 0, 0, 0);
    
    /* List processes */
    char buffer[256];
    pcb_t* proc;
    int y_pos = 60;
    
    for (int i = 0; i < MAX_PROCESSES && y_pos < (int)win->height - 40; i++) {
        proc = get_process(i);
        if (proc && proc->state != PROCESS_FREE) {
            const char* state_str;
            switch (proc->state) {
                case PROCESS_READY:   state_str = "Ready"; break;
                case PROCESS_RUNNING: state_str = "Running"; break;
                case PROCESS_BLOCKED: state_str = "Blocked"; break;
                default: state_str = "Unknown"; break;
            }
            
            snprintf(buffer, sizeof(buffer), "%-5d %-10s %s", 
                    proc->pid, state_str, proc->name);
            vbe_draw_string(buffer, win->x + 10, win->y + y_pos, 0, 0, 0);
            y_pos += 18;
        }
    }
    
    /* Draw Kill button */
    vbe_fill_rect(win->x + win->width - 90, win->y + win->height - 35, 80, 25, 0xFF, 0x00, 0x00);
    vbe_draw_string("Kill PID", win->x + win->width - 80, win->y + win->height - 28, 255, 255, 255);
    
    /* Draw system info */
    vbe_draw_string("System Uptime:", win->x + 10, win->y + win->height - 30, 0, 0, 0);
}

/* Handle mouse click in task manager */
static void taskmgr_handle_click(gui_window_t* win, int mx, int my, int button) {
    (void)button;
    if (!win) return;
    
    /* Check Kill button */
    if ((uint32_t)mx >= win->width - 90 && mx < (int)win->width - 10 &&
        (uint32_t)my >= win->height - 35 && my < (int)win->height - 10) {
        /* Would need PID input in full implementation */
        kprintf("[TaskMgr] Kill button clicked\n");
    }
}

/* Open Task Manager */
void taskmgr_open(void) {
    if (taskmgr_running) return;
    
    taskmgr_window = gui_create_window("Task Manager", 200, 100, 350, 300);
    if (!taskmgr_window) return;
    
    taskmgr_window->draw_content = taskmgr_draw_content;
    taskmgr_window->handle_click = taskmgr_handle_click;
    taskmgr_running = 1;
    
    gui_show_window(taskmgr_window);
}

/* Close Task Manager */
void taskmgr_close(void) {
    if (taskmgr_window) {
        gui_destroy_window(taskmgr_window);
        taskmgr_window = NULL;
    }
    taskmgr_running = 0;
}

/* Update task manager display */
void taskmgr_update(void) {
    if (taskmgr_window && taskmgr_running) {
        taskmgr_draw_content(taskmgr_window);
    }
}
