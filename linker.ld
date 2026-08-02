/* =============================================================================
 * MyOS Linker Script
 * Defines memory layout for the kernel
 * =============================================================================
 */

ENTRY(_start)

SECTIONS
{
    /* Start at 1MB (typical multiboot load address) */
    . = 1M;

    /* Multiboot section must be first to ensure proper alignment */
    .multiboot ALIGN(4K) :
    {
        *(.multiboot)
    }

    /* Text section (code) */
    .text ALIGN(4K) :
    {
        *(.text)
    }

    /* Read-only data */
    .rodata ALIGN(4K) :
    {
        *(.rodata)
        *(.rodata.*)
    }

    /* Initialized data */
    .data ALIGN(4K) :
    {
        *(.data)
    }

    /* Uninitialized data (zero-initialized) */
    .bss ALIGN(4K) :
    {
        __bss_start = .;
        *(COMMON)
        *(.bss)
        __bss_end = .;
    }

    /* Kernel end marker */
    __kernel_end = .;
}
