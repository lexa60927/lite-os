# MyOS - A Simple x86 Operating System Kernel

A minimal, bootable x86 operating system kernel written in C and NASM Assembly.

## Features

- **Multiboot Compliant**: Boots via GRUB using Multiboot 1 specification
- **32-bit Protected Mode**: Full protected mode operation
- **GDT/IDT**: Global and Interrupt Descriptor Tables configured
- **VGA Text Mode Driver**: 80x25 text output with scrolling and colors
- **PS/2 Keyboard Driver**: Interrupt-driven keyboard input
- **Physical Memory Manager**: Bitmap-based memory management
- **Kernel Heap**: Dynamic memory allocation (kmalloc/kfree)
- **Interactive Shell**: Built-in CLI with commands

## Shell Commands

| Command | Description |
|---------|-------------|
| `help`  | List available commands |
| `clear` | Clear the screen |
| `info`  | Display system information |
| `echo`  | Print text to screen |
| `meminfo` | Show memory usage statistics |
| `reboot` | Reboot the system |

## Build Requirements

### Native Build
- GCC Cross Compiler (`i686-elf-gcc`)
- NASM Assembler
- GNU Make
- GRUB utilities (`grub-mkrescue`, `xorriso`)

### Docker Build
- Docker installed

## Building

### Using Docker (Recommended)
```bash
docker build -t myos-build .
docker run --rm -v $(pwd):/myos myos-build make all
```

### Native Build
```bash
make all
```

## Output

- `kernel.bin`: Raw kernel binary
- `myos.iso`: Bootable ISO image

## Running

### With QEMU
```bash
qemu-system-i386 -cdrom myos.iso
```

### With Bochs
```bash
bochs -f bochsrc.txt
```

## Project Structure

```
.
├── boot/               # Bootloader assembly code
├── kernel/             # Kernel source
│   ├── arch/i386/      # Architecture-specific code
│   ├── drivers/        # Device drivers
│   ├── memory/         # Memory management
│   └── shell/          # Shell implementation
├── include/            # Header files
├── iso/boot/grub/      # GRUB configuration
├── .github/workflows/  # CI/CD pipeline
├── Dockerfile          # Build container
└── Makefile            # Build system
```

## License

MIT License
