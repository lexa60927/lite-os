# =============================================================================
# MyOS Docker Build Environment
# Provides all necessary tools for building the OS
# =============================================================================

FROM ubuntu:22.04

# Avoid interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install build dependencies
RUN apt-get update && apt-get install -y \
    # Build tools
    build-essential \
    make \
    nasm \
    # GRUB and ISO creation tools
    grub-pc-bin \
    grub-common \
    xorriso \
    # QEMU for testing
    qemu-system-x86 \
    # Cross-compiler (alternative if available)
    gcc-multilib \
    # Cleanup
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /myos

# Default command shows help
CMD ["make", "help"]
