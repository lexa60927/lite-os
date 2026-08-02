/* =============================================================================
 * MyOS - Kernel Shell Implementation
 * shell.c - Interactive command-line interface with built-in commands
 * =============================================================================
 */

#include "shell.h"
#include "../drivers/vga.h"
#include "../drivers/keyboard.h"
#include "../memory/pmm.h"
#include "../memory/heap.h"
#include "../io.h"
#include <stdint.h>

/* Maximum command line length */
#define MAX_CMD_LEN 256

/* System uptime (in seconds, updated by timer) */
static uint32_t system_uptime = 0;

/* Update uptime - called from timer interrupt */
void shell_update_uptime(void) {
    system_uptime++;
}

/* Get uptime */
uint32_t shell_get_uptime(void) {
    return system_uptime;
}

/* Read a line of input */
static void read_line(char* buffer, int max_len) {
    int pos = 0;
    char c;
    
    while (1) {
        /* Wait for keyboard input */
        while (!keyboard_available()) {
            __asm__ volatile ("hlt");
        }
        
        c = keyboard_getchar();
        
        if (c == '\n' || c == '\r') {
            /* Enter pressed */
            kprint("\n");
            break;
        } else if (c == '\b') {
            /* Backspace */
            if (pos > 0) {
                pos--;
                kprintf("\b \b");
            }
        } else if (c >= 32 && c < 127 && pos < max_len - 1) {
            /* Printable character */
            buffer[pos++] = c;
            kprint_char(c);
        }
    }
    
    buffer[pos] = '\0';
}

/* Parse command arguments */
static int parse_args(char* cmd, char** argv, int max_args) {
    int argc = 0;
    char* p = cmd;
    
    while (*p && argc < max_args) {
        /* Skip leading whitespace */
        while (*p == ' ' || *p == '\t') p++;
        
        if (*p == '\0') break;
        
        argv[argc++] = p;
        
        /* Find end of argument */
        while (*p && *p != ' ' && *p != '\t') p++;
        
        if (*p) {
            *p++ = '\0';
        }
    }
    
    return argc;
}

/* Command: help */
static void cmd_help(void) {
    kprintf("\nAvailable commands:\n");
    kprintf("  help     - Show this help message\n");
    kprintf("  clear    - Clear the screen\n");
    kprintf("  info     - Display system information\n");
    kprintf("  echo     - Print text to screen\n");
    kprintf("  meminfo  - Show memory usage\n");
    kprintf("  reboot   - Reboot the system\n");
    kprintf("\n");
}

/* Command: clear */
static void cmd_clear(void) {
    vga_clear();
}

/* Command: info */
static void cmd_info(void) {
    kprintf("\n=== System Information ===\n");
    kprintf("OS: MyOS v1.0\n");
    kprintf("Architecture: x86 (32-bit Protected Mode)\n");
    kprintf("Uptime: %u seconds\n", system_uptime);
    kprintf("CPU: i686-compatible\n");
    kprintf("Video: VGA Text Mode (80x25)\n");
    kprintf("==========================\n\n");
}

/* Command: echo */
static void cmd_echo(int argc, char** argv) {
    for (int i = 0; i < argc; i++) {
        kprintf("%s ", argv[i]);
    }
    kprintf("\n");
}

/* Command: meminfo */
static void cmd_meminfo(void) {
    kprintf("\n=== Memory Information ===\n");
    kprintf("Total Physical Memory: %u KB\n", pmm_get_memory_size() / 1024);
    kprintf("Used Blocks: %u\n", (uint32_t)pmm_get_used_blocks());
    kprintf("Free Blocks: %u\n", (uint32_t)pmm_get_free_blocks());
    kprintf("Total Blocks: %u\n", (uint32_t)pmm_get_total_blocks());
    kprintf("Heap Usage: %u bytes\n", (uint32_t)kmalloc_usage());
    kprintf("==========================\n\n");
}

/* Command: reboot */
static void cmd_reboot(void) {
    kprintf("Rebooting...\n");
    
    /* Send reset command via keyboard controller */
    while (inb(0x64) & 0x02);  /* Wait for keyboard controller ready */
    outb(0x64, 0xFE);          /* Send reset command */
    
    /* If that doesn't work, triple fault */
    __asm__ volatile ("cli; hlt");
}

/* Unknown command handler */
static void cmd_unknown(const char* cmd) {
    kprintf("Unknown command: %s\n", cmd);
    kprintf("Type 'help' for available commands.\n");
}

/* Process a command */
static void process_command(char* cmd) {
    char* argv[16];
    int argc;
    
    /* Skip empty commands */
    char* p = cmd;
    while (*p == ' ' || *p == '\t') p++;
    if (*p == '\0') return;
    
    /* Parse command and arguments */
    argc = parse_args(cmd, argv, 16);
    if (argc == 0) return;
    
    /* Execute command */
    if (strcmp(argv[0], "help") == 0) {
        cmd_help();
    } else if (strcmp(argv[0], "clear") == 0) {
        cmd_clear();
    } else if (strcmp(argv[0], "info") == 0) {
        cmd_info();
    } else if (strcmp(argv[0], "echo") == 0) {
        cmd_echo(argc - 1, argv + 1);
    } else if (strcmp(argv[0], "meminfo") == 0) {
        cmd_meminfo();
    } else if (strcmp(argv[0], "reboot") == 0) {
        cmd_reboot();
    } else {
        cmd_unknown(argv[0]);
    }
}

/* Initialize shell */
void shell_init(void) {
    system_uptime = 0;
}

/* Run the shell main loop */
void shell_run(void) {
    char cmd_buffer[MAX_CMD_LEN];
    
    kprintf("\n");
    kprintf("=====================================\n");
    kprintf("  Welcome to MyOS Shell v1.0\n");
    kprintf("  Type 'help' for available commands\n");
    kprintf("=====================================\n\n");
    
    while (1) {
        /* Print prompt */
        kprintf("myos> ");
        
        /* Read command */
        read_line(cmd_buffer, MAX_CMD_LEN);
        
        /* Process command */
        process_command(cmd_buffer);
    }
}
