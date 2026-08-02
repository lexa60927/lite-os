/* =============================================================================
 * MyOS - Text Editor Header
 * editor.h - Notepad application interface
 * =============================================================================
 */

#ifndef EDITOR_H
#define EDITOR_H

/* Open Notepad */
void editor_open(void);

/* Close Notepad */
void editor_close(void);

/* Handle keyboard input */
void editor_handle_key(char key);

/* Update display */
void editor_update(void);

#endif /* EDITOR_H */
