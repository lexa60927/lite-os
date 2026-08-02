/* =============================================================================
 * MyOS - Initial RAM Disk Implementation
 * initrd.c - Embedded filesystem with sample files and scripts
 * =============================================================================
 */

#include "initrd.h"
#include "../../include/stddef.h"
#include "vfs.h"
#include "../memory/heap.h"

/* Sample files embedded in initrd */
static const char* welcome_txt = 
    "Welcome to MyOS!\n"
    "================\n\n"
    "This is a hybrid x86 operating system.\n"
    "Type 'help' in the shell for available commands.\n"
    "Type 'startx' or 'win' to launch the GUI.\n\n"
    "Enjoy!\n";

static const char* readme_txt =
    "MyOS README\n"
    "===========\n\n"
    "Architecture: x86 (32-bit Protected Mode)\n"
    "Bootloader: Multiboot 1 compliant\n"
    "GUI: VBE Framebuffer (1024x768x32bpp)\n\n"
    "Features:\n"
    "- Preemptive multitasking\n"
    "- Virtual memory (paging)\n"
    "- Virtual File System\n"
    "- PS/2 Keyboard and Mouse drivers\n"
    "- VGA Text Mode and VBE Graphics\n";

static const char* test_script =
    "#!/bin/sh\n"
    "# Sample script\n"
    "echo \"Hello from MyOS!\"\n"
    "echo \"System is running.\"\n";

static const char* config_sys =
    "# MyOS Configuration\n"
    "SHELL=/bin/shell\n"
    "GUI_ENABLED=1\n"
    "RESOLUTION=1024x768\n";

/* Initialize initrd and populate VFS */
void initrd_init(void) {
    /* Create files in /home directory */
    vfs_create_file("/welcome.txt", welcome_txt, strlen(welcome_txt));
    vfs_create_file("/readme.txt", readme_txt, strlen(readme_txt));
    vfs_create_file("/test.sh", test_script, strlen(test_script));
    vfs_create_file("/config.sys", config_sys, strlen(config_sys));
    
    /* Create a sample file in /bin */
    const char* info_data = "MyOS v1.0 - Hybrid Operating System\n";
    vfs_create_file("/version.dat", info_data, strlen(info_data));
}

/* Get number of files in initrd */
int initrd_get_file_count(void) {
    return 5;  /* welcome.txt, readme.txt, test.sh, config.sys, version.dat */
}

/* List all initrd files */
int initrd_list_files(char* buffer, int buf_size) {
    int offset = 0;
    offset += snprintf(buffer + offset, buf_size - offset, "Initrd Files:\n");
    offset += snprintf(buffer + offset, buf_size - offset, "------------\n");
    offset += snprintf(buffer + offset, buf_size - offset, "/welcome.txt\n");
    offset += snprintf(buffer + offset, buf_size - offset, "/readme.txt\n");
    offset += snprintf(buffer + offset, buf_size - offset, "/test.sh\n");
    offset += snprintf(buffer + offset, buf_size - offset, "/config.sys\n");
    offset += snprintf(buffer + offset, buf_size - offset, "/version.dat\n");
    return offset;
}
