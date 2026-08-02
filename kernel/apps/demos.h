/* =============================================================================
 * MyOS - Demos and Games Header
 * demos.h - Demo applications interface
 * =============================================================================
 */

#ifndef DEMOS_H
#define DEMOS_H

/* Open demo (0=Cube, 1=Snake, 2=Speaker) */
void demo_open(int type);

/* Close demo */
void demo_close(void);

/* Handle keyboard input */
void demo_handle_key(char key);

/* Update display */
void demo_update(void);

/* PC Speaker control */
void speaker_play(uint16_t frequency);

#endif /* DEMOS_H */
