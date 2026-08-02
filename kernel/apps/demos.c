/* =============================================================================
 * MyOS - Demos and Games Suite
 * demos.c - Graphics demo (spinning cube), PC Speaker, and Snake game
 * =============================================================================
 */

#include "demos.h"
#include "../../include/stddef.h"
#include "../drivers/vga.h"
#include "../gui/desktop.h"
#include "../memory/heap.h"
#include "../arch/i386/io.h"

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
static float cube_angle_x = 0;
static float cube_angle_y = 0;

/* Initialize Snake game */
static void snake_init(void) {
    snake_len = 3;
    snake_dir = 1;
    snake_score = 0;
    
    for (int i = 0; i < snake_len; i++) {
        snake_x[i] = 5 + i;
        snake_y[i] = 5;
    }
    
    food_x = 10;
    food_y = 10;
}

/* Update Snake game logic */
static void snake_update(void) {
    snake_tick++;
    if (snake_tick < 5) return;  /* Slow down game speed */
    snake_tick = 0;
    
    /* Move snake head */
    int new_x = snake_x[0];
    int new_y = snake_y[0];
    
    switch (snake_dir) {
        case 0: new_y--; break;  /* Up */
        case 1: new_x++; break;  /* Right */
        case 2: new_y++; break;  /* Down */
        case 3: new_x--; break;  /* Left */
    }
    
    /* Check wall collision */
    if (new_x < 0 || new_x >= 20 || new_y < 0 || new_y >= 15) {
        snake_init();  /* Reset on collision */
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
    
    /* Check food collision */
    if (snake_x[0] == food_x && snake_y[0] == food_y) {
        snake_len++;
        snake_score += 10;
        food_x = (snake_x[0] + 3) % 20;
        food_y = (snake_y[0] + 3) % 15;
    }
}

/* Draw Snake game */
static void snake_draw(uint32_t* fb, int width, int height) {
    /* Clear to dark green */
    for (int y = 0; y < height; y++) {
        for (int x = 0; x < width; x++) {
            fb[y * width + x] = 0x003300;
        }
    }
    
    /* Draw grid border */
    int grid_x = 20;
    int grid_y = 60;
    int cell_size = 20;
    gui_draw_rect(fb, width, height, grid_x - 2, grid_y - 2, 
                  20 * cell_size + 4, 15 * cell_size + 4, 0x00FF00);
    
    /* Draw snake */
    for (int i = 0; i < snake_len; i++) {
        int sx = grid_x + snake_x[i] * cell_size;
        int sy = grid_y + snake_y[i] * cell_size;
        uint32_t color = (i == 0) ? 0x00FF00 : 0x00AA00;  /* Head is brighter */
        gui_draw_rect(fb, width, height, sx + 1, sy + 1, cell_size - 2, cell_size - 2, color);
    }
    
    /* Draw food (red) */
    int fx = grid_x + food_x * cell_size;
    int fy = grid_y + food_y * cell_size;
    gui_draw_rect(fb, width, height, fx + 2, fy + 2, cell_size - 4, cell_size - 4, 0xFF0000);
    
    /* Draw score */
    char score_str[32];
    snprintf(score_str, sizeof(score_str), "Score: %d", snake_score);
    gui_draw_string(fb, width, score_str, 20, 25, 0xFFFFFF);
    
    /* Draw controls hint */
    gui_draw_string(fb, width, "Arrow Keys: Move | ESC: Exit", 20, height - 25, 0xFFFF00);
}

/* Draw spinning 3D wireframe cube */
static void cube_draw(uint32_t* fb, int width, int height) {
    /* Clear background */
    for (int y = 0; y < height; y++) {
        for (int x = 0; x < width; x++) {
            fb[y * width + x] = 0x1a1a2e;  /* Dark blue background */
        }
    }
    
    /* Cube vertices (scaled) */
    float size = 80.0f;
    float vertices[8][3] = {
        {-1, -1, -1}, {1, -1, -1}, {1, 1, -1}, {-1, 1, -1},
        {-1, -1, 1}, {1, -1, 1}, {1, 1, 1}, {-1, 1, 1}
    };
    
    /* Rotate and project vertices */
    int proj_x[8], proj_y[8];
    float cx = width / 2, cy = height / 2;
    
    for (int i = 0; i < 8; i++) {
        float x = vertices[i][0] * size;
        float y = vertices[i][1] * size;
        float z = vertices[i][2] * size;
        
        /* Rotate around Y axis */
        float cos_y = 0.995f, sin_y = 0.0998f;  /* ~5.7 degrees */
        float rx = x * cos_y - z * sin_y;
        float rz = x * sin_y + z * cos_y;
        
        /* Rotate around X axis */
        float cos_x = 0.995f, sin_x = 0.0998f;
        float ry = y * cos_x - rz * sin_x;
        rz = y * sin_x + rz * cos_x;
        
        /* Simple perspective projection */
        float fov = 200.0f;
        float scale = fov / (fov + rz + 150);
        
        proj_x[i] = (int)(cx + rx * scale);
        proj_y[i] = (int)(cy + ry * scale);
    }
    
    /* Draw edges (wireframe) */
    int edges[12][2] = {
        {0,1}, {1,2}, {2,3}, {3,0},  /* Back face */
        {4,5}, {5,6}, {6,7}, {7,4},  /* Front face */
        {0,4}, {1,5}, {2,6}, {3,7}   /* Connecting edges */
    };
    
    for (int i = 0; i < 12; i++) {
        int v1 = edges[i][0];
        int v2 = edges[i][1];
        gui_draw_line(fb, width, proj_x[v1], proj_y[v1], proj_x[v2], proj_y[v2], 0x00FFFF);
    }
    
    /* Update rotation */
    cube_angle_x += 0.05f;
    cube_angle_y += 0.07f;
    
    /* Title */
    gui_draw_string(fb, width, "3D Spinning Cube Demo", 10, 10, 0xFFFFFF);
    gui_draw_string(fb, width, "ESC: Exit", 10, height - 25, 0xFFFF00);
}

/* PC Speaker - play a frequency */
void speaker_play(uint16_t frequency) {
    if (frequency == 0) {
        outb(0x61, inb(0x61) & 0xFC);
        return;
    }
    
    uint32_t divisor = 1193180 / frequency;
    outb(0x43, 0xB6);
    outb(0x42, divisor & 0xFF);
    outb(0x42, (divisor >> 8) & 0xFF);
    outb(0x61, inb(0x61) | 0x03);
}

/* Draw speaker demo */
static void speaker_draw(uint32_t* fb, int width, int height) {
    /* Clear background */
    for (int y = 0; y < height; y++) {
        for (int x = 0; x < width; x++) {
            fb[y * width + x] = 0x2d2d2d;
        }
    }
    
    gui_draw_string(fb, width, "PC Speaker Demo", 10, 10, 0xFFFFFF);
    gui_draw_string(fb, width, "Playing retro chiptune...", 10, 40, 0x00FF00);
    gui_draw_string(fb, width, "ESC: Stop", 10, height - 25, 0xFFFF00);
    
    /* Draw animated waveform */
    static int phase = 0;
    phase += 3;
    
    for (int x = 20; x < width - 20; x += 4) {
        int y = height / 2 + (int)(30.0f * __builtin_sin((x + phase) * 0.1f));
        gui_draw_rect(fb, width, height, x, y - 2, 3, 4, 0xFF00FF);
    }
}

/* Draw demo content based on type */
static void demo_draw_content(gui_window_t* win) {
    if (!win || !win->fb) return;
    
    switch (demo_type) {
        case 0:  /* Cube */
            cube_draw((uint32_t*)win->fb, win->width, win->height);
            break;
        case 1:  /* Snake */
            snake_update();
            snake_draw((uint32_t*)win->fb, win->width, win->height);
            break;
        case 2:  /* Speaker */
            speaker_draw((uint32_t*)win->fb, win->width, win->height);
            break;
    }
}

/* Handle keyboard in demo */
void demo_handle_key(char key) {
    if (!demo_running) return;
    
    if (key == 27) {  /* ESC */
        demo_close();
        return;
    }
    
    if (demo_type == 1) {  /* Snake controls */
        switch (key) {
            case 'w': case 'W':
                if (snake_dir != 2) snake_dir = 0; break;  /* Up */
            case 'd': case 'D':
                if (snake_dir != 3) snake_dir = 1; break;  /* Right */
            case 's': case 'S':
                if (snake_dir != 0) snake_dir = 2; break;  /* Down */
            case 'a': case 'A':
                if (snake_dir != 1) snake_dir = 3; break;  /* Left */
        }
    }
}

/* Open demo window */
void demo_open(int type) {
    if (demo_running) return;
    
    const char* titles[] = {"3D Cube", "Snake Game", "PC Speaker"};
    demo_window = gui_create_window(titles[type], 50, 50, 500, 400);
    if (!demo_window) return;
    
    demo_window->draw_content = demo_draw_content;
    demo_running = 1;
    demo_type = type;
    
    if (type == 1) {
        snake_init();
    }
    
    gui_show_window(demo_window);
}

/* Close demo */
void demo_close(void) {
    speaker_play(0);  /* Stop speaker */
    
    if (demo_window) {
        gui_destroy_window(demo_window);
        demo_window = NULL;
    }
    demo_running = 0;
}

/* Update demo */
void demo_update(void) {
    if (demo_window && demo_running) {
        demo_draw_content(demo_window);
    }
}
