/* =============================================================================
 * MyOS - Initial RAM Disk Header
 * initrd.h - Initrd initialization and file access
 * =============================================================================
 */

#ifndef INITRD_H
#define INITRD_H

#include "../../include/stddef.h"

/* Initialize initrd */
void initrd_init(void);

/* Get file count */
int initrd_get_file_count(void);

/* List all files */
int initrd_list_files(char* buffer, int buf_size);

#endif /* INITRD_H */
