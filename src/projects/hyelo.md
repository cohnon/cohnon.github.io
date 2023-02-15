---
name: Hyelo
desc: An omegle clone with actual features.
tools: [Javascript, Node]
live: https://hyelo.herokuapp.com/
source: https://github.com/coherentnonsense/hyelo
order: 3
---

**temporary case study**

I had a weird obsession were I wanted to make an anonymous social media site with the likes of Omegle and Facebook (gross I know). I went through a lot of iterations trying to achieve this goal (My Github has so many dead privated repos), but I never really finished any. This was back when I wanted to do web development and so I used these social networks as a vessel to learn new technologies, and I'd honestly say I learned a ton from making them. Trist was my last project were I tried applying everything I knew. It used fancy React, used a NoSQL database, hosted images on a CDN, had a mailserver, and ran cron jobs. This was all tied together with Domain Driven Design (DDD). The most over engineered architecture I could have chosen. This made it a pain to add new features, as every tiny thing required me to add 4 new files, each with it's own boilerplate. It was fun while it lasted, but I killed all joy for web dev with that project.

Hyelo was a turning point in how I approached code. I was inspired after discovering a tiny chatting platform called hack.chat. It was simple and elegant to use. There were no friend requests, email signups, or accounts. It was the complete antithesis to what I had become, but there was something about it that I wanted. So I set out to make something similar. Using pure HTML, CSS, and JavaScript for a client and a simple Websocket server, I made Hyelo in a few days. It was a fun project, but I had to get back to work on the dreaded Trist. It was only after, that I realised I enjoyed using Hyelo more than Trist. Trist felt clunky with all it's SPA bloat, while Hyelo just worked. But more importantly, I love the simplicity of its code.

## Features

- Chat with a random user based on chosen tags.
- Create a room and invite others to join.
- A selection of premade rooms to publicly access.
- A minimal UI with multiple colour palletes.
