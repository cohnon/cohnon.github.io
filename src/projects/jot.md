---
name: Jot
desc: A dead simple 2D renderer
tools: [C, OpenGL]
live: null
source: https://github.com/coherentnonsense/jot
order: 4
---

**temporary case study**

When learning a language, we need some form of visual feedback to know that we're actually accomplishing something. Usually, that feedback is in the form of a print statement. This can get us pretty far into learning the concepts of a language. With a simple print statement, you can make a number guesser, hangman, or a multitude of other text-based games. These are fun to make, but there are limitations. What if you want to create a physics system? or a graphical game? Sooner or later, you will want to "upgrade" your basic text output with something more powerful. There are a lot of great options out there, but any library will have some documentation you will have to learn.

I want Jot to be an upgrade that has as few required function calls possible. It keeps the simplicity of a basic "printf" but gives developers the tools to create much more visual program.

#### example.c

```clike
#include <jot/jot.h>

int main() {

  // required (1)
  open_window("Demo", 600, 300);

  // required (2)
  while (update_window()) {
    
    // printf like functions
    clear_screen(0.0f, 0.0f, 0.0f);
    fill_circle(300, 150, 100, 0.0f, 0.5f, 1.0f);
  }

  // technically not required but good practice (3)
  close_window();

  return 0;
}
```