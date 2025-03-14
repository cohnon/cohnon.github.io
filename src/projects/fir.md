---
name: FIR
desc: The compiler backend.
tools: [c, optimising compiler, IR, library, toolchain, risc-v]
source: https://github.com/cohnon/fir
thumb: fir.webp
draft: true

order: 100
---

The [blog post](/blog/making-a-compiler-backend).

## The Why

Simply put, when developing a programming language, there are two general parts you must consider: the front end and back end. The front end covers all the fun language *design* aspects that generally get people into langdev in the first place. It's where you get to make your own syntax, type systems, control flow, etc. And it's a fairly straight forward process with plenty of resources on the subject.

It's only when you actually want to turn your quirky little language into something runnable on your computer that you realise you have to dip your toes in the messy reality that are modern CPUs.

The goal of the back end is to turn your abstract software representation of your language into a properly formed, highly optimised machine code for every type of machine (+operating system) you want to target, with each one having differing designs and conventions. This is a hard problem to get right, which is why it is common to use a library for this part of the design.

The problem is that there just aren't that many choices to choose from.

### LLVM

The main (and arguably only) choice for a back end. It is the most mature and performant, powering languages such as Rust, C/C++, and Zig (for now). And the same issues are echoed in all of these communities. LLVM is **large**. This size drastically increases the compile time of any language using it. Its size also makes it rather difficult to integrate into a language. The lack of proper documentation and rapidly changing APIs don't help.

It's also antithetical to why a lot of people get into langdev. It's to truly understand what happens when you hit compile. To unveil the decades of fascinating academia that most take for granted. With LLVM, you're learning LLVM, not compilers.

> Of course that's just a provocative exaggeration, but for hobbyists I think we can do better.

### QBE (Quick Back End)

QBE is really the only other popular backend I could find. Popular being a stretch of a word. It's goal is to reach 70% of LLVM's performance with 30% of the code. A noble goal, and honestly it was so close to being a perfect choice for my goals. The fact that it has quite a bit of traction behind it as well shows that there is demand for something like it. But there are also quite a few complaints that make me weary of using it.

#### The codebase

It's an absolute tangled mess of some really bizarre looking C. To me, the main reason for maintaining a small codebase is to make it easy for any one person to understand the entire thing. This alone mostly put me off of QBE.

#### Text based input

There is no API to generate the QBE intermediate representation (IR). Instead, front ends have to generate a textual representation of it which QBE parses. This seems like a strange choice as the main use case for a back end library is to be used by another program.

### Goals

There are a few more, but they did not really align with what I'd like to see in a library, which is where FIR comes in.

The goals of FIR in this order, are:

1. Maintaining an easy to understand codebase with proper documentation that anyone interested can learn from. This means keeping the concepts minimal and API surface small. Do one thing and do it right.

2. Making it easy to extend with optimisation passes and targets. Reducing the need to recompile would be a plus.

3. Performance **:D**

You can find the actual details of this project starting [here](/blog/making-a-compiler-backend).
