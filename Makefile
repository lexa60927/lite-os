# =============================================================================
# MyOS Makefile
# Complete build system for x86 operating system kernel
# =============================================================================

# Cross-compiler toolchain (use native gcc with -m32 if cross-compiler not available)
CC = gcc
AS = nasm
OBJCOPY = objcopy

# Compiler flags
CFLAGS = -ffreestanding -nostdlib -fno-builtin -Wall -Wextra -m32 \
         -I./include -I./kernel -g -O0 -fno-stack-protector \
         -fno-pie -no-pie

# Assembler flags
ASFLAGS = -f elf32

# Linker flags
LDFLAGS = -Wl,-m,elf_i386 -nostdlib -T linker.ld

# Directories
BOOT_DIR = boot
KERNEL_DIR = kernel
INCLUDE_DIR = include
ISO_DIR = iso
BUILD_DIR = build

# Source files
ASM_SOURCES = $(BOOT_DIR)/boot.asm \
              $(KERNEL_DIR)/arch/i386/isr.asm

C_SOURCES = $(KERNEL_DIR)/kernel.c \
            $(KERNEL_DIR)/string.c \
            $(KERNEL_DIR)/arch/i386/gdt.c \
            $(KERNEL_DIR)/arch/i386/idt.c \
            $(KERNEL_DIR)/arch/i386/pic.c \
            $(KERNEL_DIR)/drivers/vga.c \
            $(KERNEL_DIR)/drivers/keyboard.c \
            $(KERNEL_DIR)/drivers/vbe.c \
            $(KERNEL_DIR)/drivers/mouse.c \
            $(KERNEL_DIR)/memory/pmm.c \
            $(KERNEL_DIR)/memory/heap.c \
            $(KERNEL_DIR)/shell/shell.c \
            $(KERNEL_DIR)/gui/desktop.c \
            $(KERNEL_DIR)/arch/i386/paging.c \
            $(KERNEL_DIR)/arch/i386/sched.c \
            $(KERNEL_DIR)/arch/i386/syscall.c \
            $(KERNEL_DIR)/fs/vfs.c \
            $(KERNEL_DIR)/fs/initrd.c \
            $(KERNEL_DIR)/apps/taskmgr.c \
            $(KERNEL_DIR)/apps/filemgr.c \
            $(KERNEL_DIR)/apps/editor.c \
            $(KERNEL_DIR)/apps/demos.c

# Object files
ASM_OBJECTS = $(BUILD_DIR)/boot.o \
              $(BUILD_DIR)/isr.o

C_OBJECTS = $(BUILD_DIR)/kernel.o \
            $(BUILD_DIR)/string.o \
            $(BUILD_DIR)/gdt.o \
            $(BUILD_DIR)/idt.o \
            $(BUILD_DIR)/pic.o \
            $(BUILD_DIR)/vga.o \
            $(BUILD_DIR)/keyboard.o \
            $(BUILD_DIR)/vbe.o \
            $(BUILD_DIR)/mouse.o \
            $(BUILD_DIR)/pmm.o \
            $(BUILD_DIR)/heap.o \
            $(BUILD_DIR)/shell.o \
            $(BUILD_DIR)/desktop.o \
            $(BUILD_DIR)/paging.o \
            $(BUILD_DIR)/sched.o \
            $(BUILD_DIR)/syscall.o \
            $(BUILD_DIR)/vfs.o \
            $(BUILD_DIR)/initrd.o \
            $(BUILD_DIR)/taskmgr.o \
            $(BUILD_DIR)/filemgr.o \
            $(BUILD_DIR)/editor.o \
            $(BUILD_DIR)/demos.o

# Output files
KERNEL_BIN = $(BUILD_DIR)/kernel.bin
KERNEL_ELF = $(BUILD_DIR)/kernel.elf
ISO_IMAGE = myos.iso

# Default target
all: $(ISO_IMAGE)

# Create build directory
$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

# Assemble bootloader
$(BUILD_DIR)/boot.o: $(BOOT_DIR)/boot.asm | $(BUILD_DIR)
	$(AS) $(ASFLAGS) $< -o $@

# Assemble ISR stubs
$(BUILD_DIR)/isr.o: $(KERNEL_DIR)/arch/i386/isr.asm | $(BUILD_DIR)
	$(AS) $(ASFLAGS) $< -o $@

# Compile C source files
$(BUILD_DIR)/kernel.o: $(KERNEL_DIR)/kernel.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/string.o: $(KERNEL_DIR)/string.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/gdt.o: $(KERNEL_DIR)/arch/i386/gdt.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/idt.o: $(KERNEL_DIR)/arch/i386/idt.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/pic.o: $(KERNEL_DIR)/arch/i386/pic.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/vga.o: $(KERNEL_DIR)/drivers/vga.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/keyboard.o: $(KERNEL_DIR)/drivers/keyboard.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/vbe.o: $(KERNEL_DIR)/drivers/vbe.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/mouse.o: $(KERNEL_DIR)/drivers/mouse.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/pmm.o: $(KERNEL_DIR)/memory/pmm.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/heap.o: $(KERNEL_DIR)/memory/heap.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/shell.o: $(KERNEL_DIR)/shell/shell.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/desktop.o: $(KERNEL_DIR)/gui/desktop.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/paging.o: $(KERNEL_DIR)/arch/i386/paging.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/sched.o: $(KERNEL_DIR)/arch/i386/sched.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/syscall.o: $(KERNEL_DIR)/arch/i386/syscall.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/vfs.o: $(KERNEL_DIR)/fs/vfs.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/initrd.o: $(KERNEL_DIR)/fs/initrd.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/taskmgr.o: $(KERNEL_DIR)/apps/taskmgr.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/filemgr.o: $(KERNEL_DIR)/apps/filemgr.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/editor.o: $(KERNEL_DIR)/apps/editor.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

$(BUILD_DIR)/demos.o: $(KERNEL_DIR)/apps/demos.c | $(BUILD_DIR)
	$(CC) $(CFLAGS) -c $< -o $@

# Link kernel ELF
$(KERNEL_ELF): $(ASM_OBJECTS) $(C_OBJECTS) linker.ld
	$(CC) $(LDFLAGS) -o $@ $(ASM_OBJECTS) $(C_OBJECTS)

# Create raw binary kernel
$(KERNEL_BIN): $(KERNEL_ELF)
	$(OBJCOPY) -O binary $< $@

# Create bootable ISO image
$(ISO_IMAGE): $(KERNEL_BIN)
	mkdir -p $(ISO_DIR)/boot/grub
	cp $(KERNEL_BIN) $(ISO_DIR)/boot/kernel.bin
	grub-mkrescue -o $@ $(ISO_DIR) 2>/dev/null || \
		xorriso -as mkisofs -b boot/grub/stage2_eltorito \
		-no-emul-boot -boot-load-size 4 -boot-info-table \
		-o $@ $(ISO_DIR)

# Run in QEMU
run: $(ISO_IMAGE)
	qemu-system-i386 -cdrom $(ISO_IMAGE) -m 64M

# Run with debugging
debug: $(ISO_IMAGE)
	qemu-system-i386 -cdrom $(ISO_IMAGE) -m 64M -s -S

# Clean build artifacts
clean:
	rm -rf $(BUILD_DIR)
	rm -f $(ISO_IMAGE)
	rm -f $(KERNEL_BIN)
	rm -f $(KERNEL_ELF)

# Rebuild from scratch
rebuild: clean all

# Show help
help:
	@echo "MyOS Build System"
	@echo ""
	@echo "Targets:"
	@echo "  all      - Build the bootable ISO image (default)"
	@echo "  run      - Build and run in QEMU"
	@echo "  debug    - Build and run in QEMU with GDB server"
	@echo "  clean    - Remove all build artifacts"
	@echo "  rebuild  - Clean and rebuild"
	@echo "  help     - Show this help message"

.PHONY: all run debug clean rebuild help
