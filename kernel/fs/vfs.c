/* =============================================================================
 * MyOS - Virtual File System Implementation
 * vfs.c - Lightweight VFS layer for /dev, /bin, /home directories
 * =============================================================================
 */

#include "vfs.h"
#include "../../include/stddef.h"
#include "../memory/heap.h"

/* Root directory structure */
static vfs_node_t root_dir;
static vfs_node_t* directories[16];
static int num_dirs = 0;

/* Initialize VFS */
void vfs_init(void) {
    /* Set up root directory */
    strcpy(root_dir.name, "/");
    root_dir.type = VFS_DIR;
    root_dir.size = 0;
    root_dir.data = NULL;
    root_dir.parent = NULL;
    
    num_dirs = 0;
    
    /* Create standard directories */
    vfs_mkdir("/dev");
    vfs_mkdir("/bin");
    vfs_mkdir("/home");
}

/* Create a directory */
int vfs_mkdir(const char* path) {
    if (num_dirs >= 16) {
        return -1;
    }
    
    vfs_node_t* dir = (vfs_node_t*)kmalloc(sizeof(vfs_node_t));
    if (!dir) {
        return -1;
    }
    
    /* Extract directory name from path */
    const char* name = path;
    while (*name == '/') name++;
    
    int i = 0;
    while (name[i] && name[i] != '/' && i < 31) {
        dir->name[i] = name[i];
        i++;
    }
    dir->name[i] = '\0';
    
    dir->type = VFS_DIR;
    dir->size = 0;
    dir->data = NULL;
    dir->parent = &root_dir;
    
    directories[num_dirs++] = dir;
    return 0;
}

/* Create a file with data */
int vfs_create_file(const char* path, const char* data, uint32_t size) {
    if (num_dirs >= 16) {
        return -1;
    }
    
    vfs_node_t* file = (vfs_node_t*)kmalloc(sizeof(vfs_node_t));
    if (!file) {
        return -1;
    }
    
    /* Extract filename from path */
    const char* name = path;
    while (*name == '/') name++;
    
    int i = 0;
    while (name[i] && name[i] != '/' && i < 31) {
        file->name[i] = name[i];
        i++;
    }
    file->name[i] = '\0';
    
    file->type = VFS_FILE;
    file->size = size;
    
    /* Copy data */
    if (data && size > 0) {
        file->data = kmalloc(size);
        if (file->data) {
            memcpy(file->data, (void*)data, size);
        }
    } else {
        file->data = NULL;
    }
    
    file->parent = &root_dir;
    directories[num_dirs++] = file;
    return 0;
}

/* Find a node by path */
vfs_node_t* vfs_find(const char* path) {
    if (strcmp(path, "/") == 0) {
        return &root_dir;
    }
    
    /* Simple linear search */
    const char* name = path;
    while (*name == '/') name++;
    
    for (int i = 0; i < num_dirs; i++) {
        if (strcmp(directories[i]->name, name) == 0) {
            return directories[i];
        }
    }
    
    return NULL;
}

/* Read file contents */
int vfs_read(const char* path, char* buffer, int buf_size) {
    vfs_node_t* node = vfs_find(path);
    if (!node || node->type != VFS_FILE) {
        return -1;
    }
    
    if (!node->data) {
        return 0;
    }
    
    int copy_size = (node->size < (uint32_t)buf_size) ? node->size : buf_size;
    memcpy(buffer, node->data, copy_size);
    buffer[copy_size] = '\0';
    
    return copy_size;
}

/* List directory contents */
int vfs_listdir(const char* path, char* buffer, int buf_size) {
    vfs_node_t* node = vfs_find(path);
    if (!node || node->type != VFS_DIR) {
        return -1;
    }
    
    int offset = 0;
    offset += snprintf(buffer + offset, buf_size - offset, "Directory: %s\n", path);
    offset += snprintf(buffer + offset, buf_size - offset, "---\n");
    
    for (int i = 0; i < num_dirs; i++) {
        const char* type_str = (directories[i]->type == VFS_DIR) ? "[DIR]  " : "[FILE] ";
        offset += snprintf(buffer + offset, buf_size - offset, 
                           "%s%s\n", type_str, directories[i]->name);
    }
    
    return offset;
}
