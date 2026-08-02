/* =============================================================================
 * MyOS - Virtual File System Header
 * vfs.h - VFS node structure and function declarations
 * =============================================================================
 */

#ifndef VFS_H
#define VFS_H

#include "../../include/stddef.h"

/* Node types */
#define VFS_FILE  1
#define VFS_DIR   2

/* Maximum path length */
#define VFS_MAX_PATH 256

/* VFS node structure */
typedef struct vfs_node {
    char name[32];          /* File/directory name */
    uint8_t type;           /* VFS_FILE or VFS_DIR */
    uint32_t size;          /* File size in bytes */
    void* data;             /* File data pointer */
    struct vfs_node* parent;/* Parent directory */
} vfs_node_t;

/* Initialize VFS */
void vfs_init(void);

/* Create a directory */
int vfs_mkdir(const char* path);

/* Create a file with data */
int vfs_create_file(const char* path, const char* data, uint32_t size);

/* Find a node by path */
vfs_node_t* vfs_find(const char* path);

/* Read file contents */
int vfs_read(const char* path, char* buffer, int buf_size);

/* List directory contents */
int vfs_listdir(const char* path, char* buffer, int buf_size);

#endif /* VFS_H */
