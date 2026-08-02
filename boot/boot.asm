; =============================================================================
; MyOS Bootloader - Multiboot Compliant Entry Point
; =============================================================================
; This file contains the Multiboot header and kernel entry point.
; It sets up a minimal environment and jumps to the C kernel main function.
; =============================================================================

; Multiboot 1 specification constants
MBALIGN  equ  1 << 0             ; Align loaded modules on page boundaries
MEMINFO  equ  1 << 1             ; Provide memory map
FLAGS    equ  MBALIGN | MEMINFO  ; Multiboot flag field
MAGIC    equ  0x1BADB002         ; Magic number for bootloader identification
CHECKSUM equ -(MAGIC + FLAGS)    ; Checksum to make magic+flags+checksum = 0

; Stack size (16KB)
STACK_SIZE equ 0x4000

section .multiboot
align 4
    dd MAGIC
    dd FLAGS
    dd CHECKSUM

section .bss
align 16
stack_bottom:
    resb STACK_SIZE
stack_top:

section .text
global _start
extern kmain
extern kernel_main_end

_start:
    ; Set up stack
    mov esp, stack_top

    ; Push multiboot info pointer and magic number as arguments to kmain
    ; EBX contains multiboot info structure address
    ; EAX contains multiboot magic number
    push ebx        ; multiboot_info_t* mboot
    push eax        ; unsigned int magic

    ; Call kernel main function
    call kmain

    ; If kmain returns, halt the CPU
    cli
.halt:
    hlt
    jmp .halt

; Kernel end marker (used by linker script logic)
kernel_main_end:
    nop
