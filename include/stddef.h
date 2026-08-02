/* =============================================================================
 * MyOS - Minimal C Standard Library Headers
 * stddef.h - Standard definitions
 * =============================================================================
 */

#ifndef _STDDEF_H
#define _STDDEF_H

/* Standard integer types */
typedef __SIZE_TYPE__     size_t;
typedef __PTRDIFF_TYPE__  ptrdiff_t;
typedef __WCHAR_TYPE__    wchar_t;
typedef __UINT32_TYPE__   uint32_t;
typedef __INT32_TYPE__    int32_t;
typedef __UINT16_TYPE__   uint16_t;
typedef __INT16_TYPE__    int16_t;
typedef __UINT8_TYPE__    uint8_t;
typedef __INT8_TYPE__     int8_t;
typedef __UINTPTR_TYPE__  uintptr_t;
typedef __INTPTR_TYPE__   intptr_t;
typedef uint32_t          pid_t;
typedef uint32_t          uid_t;
typedef uint32_t          gid_t;
typedef int32_t           time_t;

/* NULL pointer constant */
#ifndef NULL
#define NULL ((void*)0)
#endif

/* Offset of member in structure */
#define offsetof(type, member) ((size_t)&(((type*)0)->member))

#endif /* _STDDEF_H */
