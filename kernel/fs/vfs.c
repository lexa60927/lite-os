/* =============================================================================
 * MyOS - Virtual File System Implementation
 * vfs.c - Lightweight VFS layer for initrd filesystem
 * =============================================================================
 */

#include "vfs.h"
#include "../memory/heap.h"
#include <stdint.h>
#include <stddef.h>

/* Root directory node */
static vfs_node_t root_dir;

/* Initialize VFS */
void vfs_init(void) {
    root_dir.is_directory = 1;
    root_dir.size = 0;
    root_dir.data = NULL;
    
    /* Copy root name manually */
    const char* root_name = "/";
    int i = 0;
    while (root_name[i] && i < 63) {
        root_dir.name[i] = root_name[i];
        i++;
    }
    root_dir.name[i] = '\0';
}

/* Create a file in VFS */
int vfs_create_file(const char* path, const void* data, uint32_t size) {
    if (!path || !data) return -1;
    
    /* For now, only support root directory files */
    vfs_node_t* node = (vfs_node_t*)kmalloc(sizeof(vfs_node_t));
    if (!node) return -1;
    
    node->is_directory = 0;
    node->size = size;
    node->data = (void*)data;
    
    /* Copy path to name */
    int i = 0;
    while (path[i] && i < 63) {
        node->name[i] = path[i];
        i++;
    }
    node->name[i] = '\0';
    
    return 0;
}

/* Find a node by path */
vfs_node_t* vfs_find(const char* path) {
    if (!path) return NULL;
    
    /* Return root for "/" */
    if (path[0] == '/' && path[1] == '\0') {
        return &root_dir;
    }
    
    /* For simplicity, return NULL for other paths */
    /* A full implementation would search the filesystem tree */
    return NULL;
}

/* Read from a VFS node */
int vfs_read(vfs_node_t* node, void* buf, uint32_t buf_size) {
    if (!node || !buf || !buf_size) return -1;
    
    if (node->is_directory) {
        return -1;  /* Can't read directory as file */
    }
    
    /* Determine copy size */
    uint32_t copy_size = node->size;
    if (copy_size > buf_size) {
        copy_size = buf_size;
    }
    
    /* Copy data */
    volatile uint8_t* src = (volatile uint8_t*)node->data;
    uint8_t* dst = (uint8_t*)buf;
    for (uint32_t i = 0; i < copy_size; i++) {
        dst[i] = src[i];
    }
    
    return (int)copy_size;
}

/* List directory contents */
int vfs_listdir(const char* path, char* buffer, uint32_t buf_size) {
    if (!path || !buffer || !buf_size) return -1;
    
    /* Simple directory listing */
    /* Format: [DIR] dirname\n[FILE] filename\n */
    
    uint32_t offset = 0;
    
    /* Add header */
    const char* header = "Directory: ";
    while (*header && offset < buf_size - 1) {
        buffer[offset++] = *header++;
    }
    
    /* Add path */
    while (*path && offset < buf_size - 1) {
        buffer[offset++] = *path++;
    }
    buffer[offset++] = '\n';
    buffer[offset++] = '\n';
    
    /* For root directory, list some sample entries */
    if (path[0] == '/' && path[1] == '\0') {
        const char* entries[] = {
            "[DIR] bin\n",
            "[DIR] home\n", 
            "[FILE] welcome.txt\n",
            "[FILE] readme.txt\n",
            NULL
        };
        
        for (int i = 0; entries[i] != NULL; i++) {
            const char* entry = entries[i];
            while (*entry && offset < buf_size - 1) {
                buffer[offset++] = *entry++;
            }
        }
    }
    
    buffer[offset] = '\0';
    return (int)offset;
}
