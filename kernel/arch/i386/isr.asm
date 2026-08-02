; =============================================================================
; MyOS - Interrupt Service Routines (Assembly Stubs)
; isr.asm - Low-level interrupt handlers for CPU exceptions and IRQs
; =============================================================================

; External C handlers
extern isr_handler
extern irq_handler

; Macro to create ISR stub without error code
%macro ISR_NOERR 1
global isr%1
isr%1:
    cli                     ; Disable interrupts
    push dword 0            ; Push dummy error code
    push dword %1           ; Push interrupt number
    jmp isr_common_stub
%endmacro

; Macro to create ISR stub with error code
%macro ISR_ERR 1
global isr%1
isr%1:
    cli                     ; Disable interrupts
    push dword %1           ; Push interrupt number (error code already on stack)
    jmp isr_common_stub
%endmacro

; Macro to create IRQ stub
%macro IRQ 2
global irq%1
irq%1:
    cli                     ; Disable interrupts
    push dword 0            ; Push dummy error code
    push dword %2           ; Push interrupt number
    jmp irq_common_stub
%endmacro

; ISRs 0-31 (CPU Exceptions)
ISR_NOERR 0
ISR_NOERR 1
ISR_NOERR 2
ISR_NOERR 3
ISR_NOERR 4
ISR_NOERR 5
ISR_NOERR 6
ISR_NOERR 7
ISR_ERR   8                 ; Double Fault has error code
ISR_NOERR 9
ISR_ERR   10                ; Invalid TSS has error code
ISR_ERR   11                ; Segment Not Present has error code
ISR_ERR   12                ; Stack-Segment Fault has error code
ISR_ERR   13                ; General Protection Fault has error code
ISR_ERR   14                ; Page Fault has error code
ISR_NOERR 15
ISR_NOERR 16
ISR_NOERR 17
ISR_NOERR 18
ISR_NOERR 19
ISR_NOERR 20
ISR_NOERR 21
ISR_NOERR 22
ISR_NOERR 23
ISR_NOERR 24
ISR_NOERR 25
ISR_NOERR 26
ISR_NOERR 27
ISR_NOERR 28
ISR_NOERR 29
ISR_NOERR 30
ISR_NOERR 31

; IRQs 0-15 (Hardware Interrupts, remapped to 32-47)
IRQ 0, 32                   ; Timer
IRQ 1, 33                   ; Keyboard
IRQ 2, 34                   ; Cascade
IRQ 3, 35                   ; COM2
IRQ 4, 36                   ; COM1
IRQ 5, 37                   ; LPT2
IRQ 6, 38                   ; Floppy
IRQ 7, 39                   ; LPT1
IRQ 8, 40                   ; RTC
IRQ 9, 41                   ; ACPI
IRQ 10, 42                  ; Available
IRQ 11, 43                  ; Available
IRQ 12, 44                  ; PS/2 Mouse
IRQ 13, 45                  ; FPU
IRQ 14, 46                  ; Primary ATA
IRQ 15, 47                  ; Secondary ATA

; Common ISR stub - saves all registers and calls C handler
isr_common_stub:
    pusha                   ; Push all general purpose registers
    
    mov ax, ds              ; Save data segment
    push eax
    
    mov ax, 0x10            ; Load kernel data segment
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    
    push esp                ; Push pointer to registers structure
    call isr_handler        ; Call C handler
    add esp, 4              ; Clean up stack
    
    pop eax                 ; Restore data segment
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    
    popa                    ; Restore all registers
    add esp, 8              ; Clean up error code and int number
    sti                     ; Re-enable interrupts
    iret                    ; Return from interrupt

; Common IRQ stub - saves all registers and calls C handler
irq_common_stub:
    pusha
    
    mov ax, ds
    push eax
    
    mov ax, 0x10
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    
    push esp
    call irq_handler
    add esp, 4
    
    pop eax
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    
    popa
    add esp, 8
    sti
    iret

; GDT flush function - reloads segment registers
global gdt_flush
gdt_flush:
    mov eax, [esp + 4]      ; Get pointer to GDT
    lgdt [eax]              ; Load GDT
    
    mov ax, 0x10            ; Kernel data segment
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    mov ss, ax
    
    jmp 0x08:.flush         ; Far jump to kernel code segment
.flush:
    ret

; IDT flush function - loads IDT
global idt_flush
idt_flush:
    mov eax, [esp + 4]      ; Get pointer to IDT
    lidt [eax]              ; Load IDT
    ret
