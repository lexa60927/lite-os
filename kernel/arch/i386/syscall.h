/* =============================================================================
 * MyOS - System Calls Header
 * syscall.h - System call interface definitions
 * =============================================================================
 */

#ifndef SYSCALL_H
#define SYSCALL_H

#include "../../include/stddef.h"

/* System call handler function */
uint32_t syscall_handler(uint32_t eax, uint32_t ebx, uint32_t ecx, uint32_t edx);

/* Initialize system calls */
void syscall_init(void);

/* Assembly entry point */
void syscall_entry(void);

#endif /* SYSCALL_H */
