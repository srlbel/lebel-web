---
title: Switching from Svelte to Astro
publicationDate: 2025-05-02
description: My experience switching from svelte to astro for this website
tags:
  - web
  - astro
published: true
---
# Why?

Lately I've been working on stuff related to systems administration and DevOps. Hence I'm getting used to Github Actions and the process of getting things done and send to a server ASAP.

Therefore, I need to accelerate the process to the point I no longer need to reinvent the wheel to add a new feature, or even a new blog to this website. lol

The problem I was facing with Svelte was the fact I was trying to get something really simple with a tool that is _bloated_ for this use case, and since this website is simple HTML being rendered and no other stuff is happening that needs reactivity or something like that, I needed to change that.
 
Then I came across with `Astro`, which allows me to get stuff done simply using markdown and the frontmatter. Thing is, rewriting the whole thing from Svelte to Astro would take me a while, so I use one of the themes in their website. They are a great entry point to not get overwhelmed on what to do or how to integrate things like the specific things that Astro have that other frameworks don't (like islands or Astro's ecosystem).

So, I grabbed the theme from [superweb themes](https://astro.build/themes/details/superweb-barebones/) and start adapting the whole thing into my taste. (shutout to Trevor Lee for his work)

The process of making a CI/CD was simpler. In fact, the only thing that I needed to change was the fact that Astro builds into the `dist` folder instead of the `build` folder like Svelte does. 

Finally, the whole process took me 40 minutes from cloning the repo, making my adaptations, adding a couple of features to the source code and publishing it.

# The path to come

Now that I feel satisfied with a platform that will likely scale, the roadmap for the rest of the year would be:
- Start working on my game systems.
- Making my own server to host a NAS.
- Host a Gitea server and mirror it to github.

Updates anytime soon! u.u
