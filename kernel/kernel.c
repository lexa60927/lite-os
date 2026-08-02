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

/* Multiboot info structure (from bootloader) */
typedef struct {
    uint32_t flags;
    uint32_t mem_lower;
    uint32_t mem_upper;
    uint32_t boot_device;
    uint32_t cmdline;
    uint32_t mods_count;
    uint32_t mods_addr;
    uint32_t syms[4];
    uint32_t mmap_length;
    uint32_t mmap_addr;
    uint32_t drives_length;
    uint32_t drives_addr;
    uint32_t config_table;
    uint32_t boot_loader_name;
    uint32_t apm_table;
    uint32_t vbe_control_info;
    uint32_t vbe_mode_info;
    uint16_t vbe_mode;
    uint16_t vbe_interface_seg;
    uint16_t vbe_interface_off;
    uint16_t vbe_interface_len;
} __attribute__((packed)) multiboot_info_t;

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
