/* =============================================================================
 * MyOS - Scheduler Header
 * sched.h - Process Control Block and scheduler functions
 * =============================================================================
 */

#ifndef SCHED_H
#define SCHED_H

#include "../../include/stddef.h"

/* Maximum number of processes */
#define MAX_PROCESSES 64

/* Process stack size (8KB) */
#define PROCESS_STACK_SIZE 8192

/* Process states */
#define PROCESS_FREE      0
#define PROCESS_READY     1
#define PROCESS_RUNNING   2
#define PROCESS_BLOCKED   3

/* CPU context structure for context switching */
typedef struct {
    uint32_t gs, fs, es, ds;
    uint32_t edi, esi, ebp, ebx, edx, ecx, eax;
    uint32_t eip, cs, eflags, esp, ss;
} cpu_context_t;

/* Process Control Block */
typedef struct {
    int pid;                        /* Process ID */
    int state;                      /* Process state */
    int priority;                   /* Priority (higher = more CPU time) */
    char name[32];                  /* Process name */
    uint8_t kernel_stack[PROCESS_STACK_SIZE];
    uint32_t stack_top;             /* Current stack pointer */
    uint32_t stack_bottom;          /* Stack base */
    cpu_context_t context;          /* Saved CPU context */
    uint32_t user_esp;              /* User mode stack pointer */
    uint32_t user_eip;              /* User mode instruction pointer */
    uint32_t start_time;            /* Process creation tick */
    uint32_t cpu_time;              /* CPU time used */
} pcb_t;

/* Initialize scheduler */
void sched_init(void);

/* Create a new kernel thread */
int kthread_create(void (*entry)(void), const char* name);

/* Yield CPU to next process */
void yield(void);

/* Timer interrupt handler */
void timer_handler(registers_t* regs);

/* Get system ticks */
uint32_t get_system_ticks(void);

/* Get current PID */
int get_current_pid(void);

/* Get process by PID */
pcb_t* get_process(int pid);

/* Kill a process */
int process_kill(int pid);

/* List all processes */
int sched_list_processes(char* buffer, int buf_size);

#endif /* SCHED_H */
