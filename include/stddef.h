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

/* NULL pointer constant */
#ifndef NULL
#define NULL ((void*)0)
#endif

/* Offset of member in structure */
#define offsetof(type, member) ((size_t)&(((type*)0)->member))

#endif /* _STDDEF_H */
