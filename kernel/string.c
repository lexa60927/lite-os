/* =============================================================================
 * MyOS - String Library Implementation
 * string.c - Standard string manipulation functions
 * =============================================================================
 */

#include <string.h>
#include <stdint.h>

/* Copy memory area */
void* memcpy(void* dest, const void* src, size_t n) {
    uint8_t* d = (uint8_t*)dest;
    const uint8_t* s = (const uint8_t*)src;
    
    while (n--) {
        *d++ = *s++;
    }
    
    return dest;
}

/* Fill memory area with byte */
void* memset(void* s, int c, size_t n) {
    uint8_t* p = (uint8_t*)s;
    
    while (n--) {
        *p++ = (uint8_t)c;
    }
    
    return s;
}

/* Compare memory areas */
int memcmp(const void* s1, const void* s2, size_t n) {
    const uint8_t* p1 = (const uint8_t*)s1;
    const uint8_t* p2 = (const uint8_t*)s2;
    
    while (n--) {
        if (*p1 != *p2) {
            return *p1 - *p2;
        }
        p1++;
        p2++;
    }
    
    return 0;
}

/* Copy string */
char* strcpy(char* dest, const char* src) {
    char* d = dest;
    
    while ((*d++ = *src++) != '\0');
    
    return dest;
}

/* Concatenate strings */
char* strcat(char* dest, const char* src) {
    char* d = dest;
    
    /* Find end of dest */
    while (*d != '\0') {
        d++;
    }
    
    /* Copy src to end of dest */
    while ((*d++ = *src++) != '\0');
    
    return dest;
}

/* Get string length */
size_t strlen(const char* s) {
    size_t len = 0;
    
    while (*s++ != '\0') {
        len++;
    }
    
    return len;
}

/* Compare strings */
int strcmp(const char* s1, const char* s2) {
    while (*s1 && (*s1 == *s2)) {
        s1++;
        s2++;
    }
    
    return *(unsigned char*)s1 - *(unsigned char*)s2;
}

/* Find character in string */
char* strchr(const char* s, int c) {
    while (*s != (char)c) {
        if (*s == '\0') {
            return NULL;
        }
        s++;
    }
    
    return (char*)s;
}
