---
title: My First API
date: 2023-02-15
tags:
  - Jot
  - C
---

## I'm Making a Thing

I'm creating a graphics library which I want to use to teach people who are completely new to programming. It should feel like a natural next step after getting used to (and then quickly bored of) `printf(...)`. All the functionality is essentially done, but there is one big major thing that I have been having some conflict with. The API.

## APIs

Initially, this library had an API similar to a lot of my other "general purpose graphics" modules.

#### api1.c
```clike
#define WIDTH 800
#define HEIGHT 600

int main() {
  jot_init("Window Name", WIDTH, HEIGHT);
  
  const unsigned int texture = jot_load_texture(...);
  jot_use_texture(texture);

  while (jot_is_running()) {
    jot_poll();

    jot_start_draw();

    // all the developer cares about
    jot_clear(...);
    jot_draw_sprite(...);
    // ----

    jot_end_draw();
  }

  jot_terminate();
  return 0;
}
```

I feel like this is similar to how a lot of other libraries would expose their API. It's very verbose and gives the developer more control over how they use it. The thing is, it sucks coming from `printf()` when you have to deal with all this extra stuff. The thing is, the developer only really cares about two functions here. `jot_clear(...)` and `jot_draw_sprite(...)`. Any other function that I expose is useless trivia for them (except maybe init and terminate).

That's why I basically stripped everything in my next iteration.

#### api2.c
```clike
#define WIDTH 800
#define HEIGHT 600

int main() {
  jot_init("Window Name", WIDTH, HEIGHT);

  jot_texture(...);

  while (jot_update()) {
    jot_clear(...);
    jot_draw_sprite(...);
  }

  jot_terminate();
  return 0;
}
```

It looks so much better now. I was able to squish all the update loop logic into a single function call that could be thrown in a while loop. This does restrict your control over rendering, but you can learn bare OpenGL if you want that kind of control. You may also notice that I basically removed the ability to load multiple textures and now I just use the last loaded texture.

We're down to 4 required functions which is pretty good. For fun, I tried moving that number all the way down to 1.

#### api3.c
```clike
#define WIDTH 800
#define HEIGHT 600

int main() {
  while (jot_update("Window Name", WIDTH, HEIGHT, ...)) {
    jot_clear(...);
    jot_draw_sprite(...);
  }

  return 0;
}
```

I moved all the initialisation in `jot_update(...)` which would only be checked on the first update. I moved the termination into `jot_update(...)` as well which is called once it returns 0. At this point, there are definitely some diminishing returns on aethstetic and readability. It would be confusing to have the initial values inside of the while loop. I did like the idea of combining the texture loading with the window creation, but I wanted applications to work without textures, and having to pass in NULL values feel wrong to me. `jot_terminate()` is a weird thing to keep, but I'm keeping it mainly because you don't really have to use it if you don't want to, and if you do, it's just good practice for when you have systems that need termination later on.

## Namespace

So far, every function name has had the prefix `jot_`. This is just something I do with all my C projects and is pretty common practice, but I don't think it is right for this project. Firstly, it makes the function names longer (`jot_draw_sprite(...)`). I think extra typing is a great thing in C, but when learning, it's nice to have short and sweet names you can call (`printf(...)`, `draw_sprite(...)`).

#### api2b.c
```clike
#define WIDTH 800
#define HEIGHT 600

int main() {
  open_window("Window Name", WIDTH, HEIGHT);
  load_texture(...);

  while (update_window()) {
    clear_screen(...);
    draw_sprite(...);
  }

  close_window();
  return 0;
}
```

I think I like that, and they shouldn't conflict with any new features, so this will likely be the API for the first version of Jot (after I clean up the code a bit)