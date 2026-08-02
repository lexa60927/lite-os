/* =============================================================================
 * MyOS - Demos and Games Suite
 * demos.c - Graphics demo (spinning cube), PC Speaker, and Snake game
 * =============================================================================
 */

#include "demos.h"
#include "../../include/stddef.h"
#include "../../include/stdint.h"
#include "../drivers/vga.h"
#include "../gui/desktop.h"
#include "../memory/heap.h"
#include "../io.h"
#include "../drivers/vbe.h"

/* Demo window states */
static gui_window_t* demo_window = NULL;
static int demo_running = 0;
static int demo_type = 0;  /* 0=Cube, 1=Snake, 2=Speaker */

/* Snake game state */
#define SNAKE_SIZE 16
#define SNAKE_MAX_LEN 100
static int snake_x[SNAKE_MAX_LEN];
static int snake_y[SNAKE_MAX_LEN];
static int snake_len = 3;
static int snake_dir = 1;  /* 0=up, 1=right, 2=down, 3=left */
static int food_x, food_y;
static int snake_score = 0;
static int snake_tick = 0;

/* Cube rotation angles */
static float cube_angle_x = 0.0f;
static float cube_angle_y = 0.0f;

/* Initialize Snake game */
static void snake_init(void) {
    snake_len = 3;
    snake_dir = 1;
    snake_score = 0;
    for (int i = 0; i < snake_len; i++) {
        snake_x[i] = 10 - i;
        snake_y[i] = 10;
    }
    food_x = 15;
    food_y = 10;
}

/* Draw Snake game */
static void snake_draw(gui_window_t* win) {
    if (!win) return;
    
    /* Clear to dark green */
    vbe_fill_rect(win->x, win->y + 20, win->width, win->height - 20, 0x00, 0x40, 0x00);
    
    /* Draw snake */
    for (int i = 0; i < snake_len; i++) {
        int sx = win->x + 5 + snake_x[i] * SNAKE_SIZE;
        int sy = win->y + 25 + snake_y[i] * SNAKE_SIZE;
        vbe_fill_rect(sx, sy, SNAKE_SIZE - 1, SNAKE_SIZE - 1, 0x00, 0xFF, 0x00);
    }
    
    /* Draw food */
    int fx = win->x + 5 + food_x * SNAKE_SIZE;
    int fy = win->y + 25 + food_y * SNAKE_SIZE;
    vbe_fill_rect(fx, fy, SNAKE_SIZE - 1, SNAKE_SIZE - 1, 0xFF, 0x00, 0x00);
    
    /* Draw score */
    char score_str[32];
    snprintf(score_str, sizeof(score_str), "Score: %d", snake_score);
    vbe_draw_string(score_str, win->x + 5, win->y + win->height - 20, 255, 255, 255);
}

/* Update Snake game logic */
static void snake_update(void) {
    snake_tick++;
    if (snake_tick < 5) return;
    snake_tick = 0;
    
    /* Move snake head */
    int new_x = snake_x[0];
    int new_y = snake_y[0];
    
    switch (snake_dir) {
        case 0: new_y--; break;
        case 1: new_x++; break;
        case 2: new_y++; break;
        case 3: new_x--; break;
    }
    
    /* Check wall collision */
    if (new_x < 0 || new_x >= 20 || new_y < 0 || new_y >= 15) {
        snake_init();
        return;
    }
    
    /* Check self collision */
    for (int i = 0; i < snake_len; i++) {
        if (snake_x[i] == new_x && snake_y[i] == new_y) {
            snake_init();
            return;
        }
    }
    
    /* Move body */
    for (int i = snake_len - 1; i > 0; i--) {
        snake_x[i] = snake_x[i - 1];
        snake_y[i] = snake_y[i - 1];
    }
    snake_x[0] = new_x;
    snake_y[0] = new_y;
    
    /* Check food */
    if (new_x == food_x && new_y == food_y) {
        snake_score++;
        if (snake_len < SNAKE_MAX_LEN) {
            snake_x[snake_len] = snake_x[snake_len - 1];
            snake_y[snake_len] = snake_y[snake_len - 1];
            snake_len++;
        }
        food_x = (food_x + 7) % 20;
        food_y = (food_y + 5) % 15;
    }
}

/* Handle Snake input */
static void snake_handle_key(char key) {
    switch (key) {
        case 72: /* Up */ if (snake_dir != 2) snake_dir = 0; break;
        case 77: /* Right */ if (snake_dir != 3) snake_dir = 1; break;
        case 80: /* Down */ if (snake_dir != 0) snake_dir = 2; break;
        case 75: /* Left */ if (snake_dir != 1) snake_dir = 3; break;
    }
}

/* Draw spinning cube */
static void cube_draw(gui_window_t* win) {
    if (!win) return;
    
    /* Clear background */
    vbe_fill_rect(win->x, win->y + 20, win->width, win->height - 20, 0x20, 0x20, 0x40);
    
    /* Simple rotating wireframe effect */
    int cx = win->x + win->width / 2;
    int cy = win->y + win->y + win->height / 2;
    int size = 50;
    
    /* Draw rotating square (simplified cube projection) */
    float cos_a = 1.0f, sin_a = 0.0f;  /* Simplified */
    
    for (int i = 0; i < 4; i++) {
        float angle = (i * 90.0f) * 0.017453f;
        int x1 = cx + (int)(size * cos_a * (angle));
        int y1 = cy + (int)(size * sin_a * (angle));
        int x2 = cx + (int)(size * cos_a * (angle + 0.017453f));
        int y2 = cy + (int)(size * sin_a * (angle + 0.017453f));
        vbe_draw_line(x1, y1, x2, y2, 0x00, 0xFF, 0xFF);
    }
    
    cube_angle_x += 0.05f;
    cube_angle_y += 0.03f;
}

/* Draw demo content dispatcher */
static void demo_draw_content(gui_window_t* win) {
    if (!win) return;
    
    switch (demo_type) {
        case 0: cube_draw(win); break;
        case 1: snake_draw(win); break;
        default: cube_draw(win); break;
    }
}

/* Handle demo keyboard input */
static void demo_handle_key(gui_window_t* win, char key) {
    (void)win;
    if (demo_type == 1) {
        snake_handle_key(key);
    }
}

/* Handle demo click */
static void demo_handle_click(gui_window_t* win, int mx, int my, int button) {
    (void)mx;
    (void)my;
    (void)button;
    if (!win) return;
}

/* Open Demos window */
void demos_open(int type) {
    if (demo_running) return;
    
    demo_type = type;
    const char* title = (type == 1) ? "Snake Game" : "Graphics Demo";
    
    demo_window = gui_create_window(title, 200, 150, 350, 300);
    if (!demo_window) return;
    
    demo_window->draw_content = demo_draw_content;
    demo_window->handle_click = demo_handle_click;
    demo_window->handle_key = demo_handle_key;
    demo_running = 1;
    
    if (type == 1) {
        snake_init();
    }
    
    gui_show_window(demo_window);
}

/* Close Demos */
void demos_close(void) {
    if (demo_window) {
        gui_destroy_window(demo_window);
        demo_window = NULL;
    }
    demo_running = 0;
}

/* Update demos */
void demos_update(void) {
    if (!demo_window || !demo_running) return;
    
    if (demo_type == 1) {
        snake_update();
        demo_draw_content(demo_window);
    } else {
        demo_draw_content(demo_window);
    }
}
