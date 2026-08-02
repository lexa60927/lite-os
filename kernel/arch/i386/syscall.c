/* =============================================================================
 * MyOS - System Calls Implementation
 * syscall.c - int 0x80 interface for user-kernel communication
 * =============================================================================
 */

#include "syscall.h"
#include "../../include/stddef.h"
#include "../drivers/vga.h"
#include "sched.h"
#include "../memory/heap.h"

/* System call numbers */
#define SYS_YIELD       0
#define SYS_EXIT        1
#define SYS_MALLOC      2
#define SYS_FREE        3
#define SYS_GET_TIME    4
#define SYS_GET_PID     5
#define SYS_DRAW_PIXEL  6
#define SYS_READ_CHAR   7

/* System call handler */
uint32_t syscall_handler(uint32_t eax, uint32_t ebx, uint32_t ecx, uint32_t edx) {
    switch (eax) {
        case SYS_YIELD:
            yield();
            return 0;
            
        case SYS_EXIT:
            process_kill((int)ebx);
            return 0;
            
        case SYS_MALLOC:
            return (uint32_t)kmalloc(ebx);
            
        case SYS_FREE:
            kfree((void*)ebx);
            return 0;
            
        case SYS_GET_TIME:
            return get_system_ticks();
            
        case SYS_GET_PID:
            return get_current_pid();
            
        case SYS_DRAW_PIXEL:
            /* Would call VBE draw function in GUI mode */
            return 0;
            
        case SYS_READ_CHAR:
            /* Would read from keyboard buffer */
            return 0;
            
        default:
            return -1;
    }
}

/* Assembly wrapper to be called from ISR */
void syscall_entry(void) {
    /* This is a placeholder - actual implementation would save registers
     * and call syscall_handler with proper arguments */
}

/* Initialize system calls */
void syscall_init(void) {
    /* System calls are ready to use */
}
