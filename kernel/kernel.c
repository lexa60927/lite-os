/* =============================================================================
 * MyOS - Main Kernel Entry Point
 * kernel.c - Kernel initialization and main loop
 * =============================================================================
 */

#include "arch/i386/gdt.h"
#include "arch/i386/idt.h"
#include "arch/i386/pic.h"
#include "drivers/vga.h"
#include "drivers/keyboard.h"
#include "memory/pmm.h"
#include "memory/heap.h"
#include "shell/shell.h"
#include <stdint.h>

/* Magic number from multiboot spec */
#define MULTIBOOT_BOOTLOADER_MAGIC 0x2BADB002

/* Kernel entry point called from boot.asm */
void kmain(uint32_t magic, multiboot_info_t* mboot) {
    /* Verify multiboot magic number */
    if (magic != MULTIBOOT_BOOTLOADER_MAGIC) {
        /* Not booted with multiboot-compliant bootloader */
        while (1) {
            __asm__ volatile ("hlt");
        }
        return;
    }
    
    /* Initialize VGA driver first so we can see output */
    vga_init();
    
    kprintf("MyOS Kernel Starting...\n");
    kprintf("Bootloader magic: 0x%x\n", magic);
    
    /* Initialize GDT */
    kprintf("Initializing GDT...\n");
    gdt_init();
    
    /* Initialize PIC (interrupt controller) */
    kprintf("Initializing PIC...\n");
    pic_init();
    
    /* Initialize IDT (interrupt handlers) */
    kprintf("Initializing IDT...\n");
    idt_init();
    
    /* Initialize Physical Memory Manager */
    kprintf("Initializing Memory Manager...\n");
    pmm_init(mboot);
    
    /* Initialize Kernel Heap */
    kprintf("Initializing Heap...\n");
    heap_init();
    
    /* Initialize Keyboard Driver */
    kprintf("Initializing Keyboard...\n");
    keyboard_init();
    
    /* Enable interrupts */
    kprintf("Enabling Interrupts...\n");
    __asm__ volatile ("sti");
    
    /* Initialize Shell */
    shell_init();
    
    kprintf("\nKernel initialization complete!\n");
    
    /* Run the shell */
    shell_run();
    
    /* Should never reach here */
    kprintf("Kernel halted.\n");
    while (1) {
        __asm__ volatile ("hlt");
    }
}
