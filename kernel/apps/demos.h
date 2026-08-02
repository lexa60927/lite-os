/* =============================================================================
 * MyOS - Demos and Games Header
 * demos.h - Demo applications interface
 * =============================================================================
 */

#ifndef DEMOS_H
#define DEMOS_H

#include <stdint.h>

/* Open demo (0=Cube, 1=Snake, 2=Speaker) */
void demos_open(int type);

/* Close demo */
void demos_close(void);

/* Handle keyboard input */
void demos_handle_key(char key);

/* Update display */
void demos_update(void);

#endif /* DEMOS_H */
