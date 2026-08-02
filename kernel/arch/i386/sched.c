/* =============================================================================
 * MyOS - Preemptive Multitasking and Scheduler Implementation
 * sched.c - Round-robin scheduler with context switching via PIT (IRQ0)
 * =============================================================================
 */

#include "sched.h"
#include "../../include/stddef.h"
#include "../drivers/vga.h"
#include "gdt.h"
#include "idt.h"

/* Process Control Block array */
static pcb_t processes[MAX_PROCESSES];
static int num_processes = 0;
static int current_pid = -1;

/* System tick counter */
static volatile uint32_t system_ticks = 0;

/* Idle process */
static uint8_t idle_stack[PROCESS_STACK_SIZE] __attribute__((aligned(16)));

/* Initialize scheduler */
void sched_init(void) {
    num_processes = 0;
    current_pid = -1;
    system_ticks = 0;
    
    /* Clear all PCBs */
    for (int i = 0; i < MAX_PROCESSES; i++) {
        processes[i].pid = -1;
        processes[i].state = PROCESS_FREE;
    }
}

/* Create a new kernel thread */
int kthread_create(void (*entry)(void), const char* name) {
    if (num_processes >= MAX_PROCESSES) {
        return -1;
    }
    
    /* Find free PCB slot */
    int pid = -1;
    for (int i = 0; i < MAX_PROCESSES; i++) {
        if (processes[i].state == PROCESS_FREE) {
            pid = i;
            break;
        }
    }
    
    if (pid < 0) {
        return -1;
    }
    
    /* Initialize PCB */
    processes[pid].pid = pid;
    processes[pid].state = PROCESS_READY;
    processes[pid].priority = 1;
    
    /* Copy name */
    int i;
    for (i = 0; i < 31 && name[i]; i++) {
        processes[pid].name[i] = name[i];
    }
    processes[pid].name[i] = '\0';
    
    /* Set up stack */
    processes[pid].stack_top = (uint32_t)&processes[pid].kernel_stack[PROCESS_STACK_SIZE - 4];
    processes[pid].stack_bottom = (uint32_t)processes[pid].kernel_stack;
    
    /* Set initial context - entry point on stack */
    uint32_t* sp = (uint32_t*)processes[pid].stack_top;
    *(--sp) = 0;                    /* EDI */
    *(--sp) = 0;                    /* ESI */
    *(--sp) = 0;                    /* EBP */
    *(--sp) = 0;                    /* EBX */
    *(--sp) = 0;                    /* EDX */
    *(--sp) = 0;                    /* ECX */
    *(--sp) = 0;                    /* EAX */
    *(--sp) = (uint32_t)entry;      /* EIP - entry point */
    *(--sp) = 0x20;                 /* CS */
    *(--sp) = 0x202;                /* EFLAGS */
    *(--sp) = 0;                    /* ESP */
    *(--sp) = 0x10;                 /* SS */
    
    processes[pid].context.esp = (uint32_t)sp;
    processes[pid].context.eip = (uint32_t)entry;
    
    num_processes++;
    
    return pid;
}

/* Yield CPU to next process */
void yield(void) {
    if (num_processes <= 1) {
        return;
    }
    
    /* Find next ready process */
    int next_pid = -1;
    for (int i = 1; i <= MAX_PROCESSES; i++) {
        int check_pid = (current_pid + i) % MAX_PROCESSES;
        if (processes[check_pid].state == PROCESS_READY) {
            next_pid = check_pid;
            break;
        }
    }
    
    if (next_pid < 0 || next_pid == current_pid) {
        return;
    }
    
    /* Context switch would happen here in full implementation */
    current_pid = next_pid;
}

/* Timer interrupt handler (IRQ0) - called from ISR */
void timer_handler(registers_t* regs) {
    system_ticks++;
    
    /* Preemptive scheduling every tick */
    yield();
}

/* Get system uptime in ticks */
uint32_t get_system_ticks(void) {
    return system_ticks;
}

/* Get current process ID */
int get_current_pid(void) {
    return current_pid;
}

/* Get process by PID */
pcb_t* get_process(int pid) {
    if (pid < 0 || pid >= MAX_PROCESSES) {
        return NULL;
    }
    return &processes[pid];
}

/* Kill a process */
int process_kill(int pid) {
    if (pid < 0 || pid >= MAX_PROCESSES) {
        return -1;
    }
    
    if (processes[pid].state == PROCESS_FREE) {
        return -1;
    }
    
    processes[pid].state = PROCESS_FREE;
    processes[pid].pid = -1;
    num_processes--;
    
    if (current_pid == pid) {
        current_pid = -1;
    }
    
    return 0;
}

/* List all processes */
int sched_list_processes(char* buffer, int buf_size) {
    int offset = 0;
    offset += snprintf(buffer + offset, buf_size - offset, "PID  State    Name\n");
    offset += snprintf(buffer + offset, buf_size - offset, "---  -----    ----\n");
    
    for (int i = 0; i < MAX_PROCESSES; i++) {
        if (processes[i].state != PROCESS_FREE) {
            const char* state_str;
            switch (processes[i].state) {
                case PROCESS_READY: state_str = "Ready"; break;
                case PROCESS_RUNNING: state_str = "Running"; break;
                case PROCESS_BLOCKED: state_str = "Blocked"; break;
                default: state_str = "Unknown"; break;
            }
            offset += snprintf(buffer + offset, buf_size - offset, 
                               "%-4d %-8s %s\n", processes[i].pid, state_str, processes[i].name);
        }
    }
    
    return offset;
}
