/* =============================================================================
 * MyOS - Minimal C Standard Library Headers
 * string.h - String manipulation functions
 * =============================================================================
 */

#ifndef _STRING_H
#define _STRING_H

#include <stddef.h>

/* Copy memory area */
void* memcpy(void* dest, const void* src, size_t n);

/* Fill memory area with byte */
void* memset(void* s, int c, size_t n);

/* Compare memory areas */
int memcmp(const void* s1, const void* s2, size_t n);

/* Copy string */
char* strcpy(char* dest, const char* src);

/* Concatenate strings */
char* strcat(char* dest, const char* src);

/* Get string length */
size_t strlen(const char* s);

/* Compare strings */
int strcmp(const char* s1, const char* s2);

/* Find character in string */
char* strchr(const char* s, int c);

#endif /* _STRING_H */
