---
title: Creating a blog using Svelte and TailwindCSS.
date: 5-2-2025
description: "A quick guide on how to make a blog using Svelte 5, TailwindCSS and mdsvex :)"
tags: ['web-dev', 'svelte', 'guide']
published: false
---

# Set Up

In this little project we will be using svelte 5 and tailwindcss 4 new feautres with the power of typescript!

First you must init your project using:

```bash
npx sv@latest create my-blog
```

and answer the following questions like this:

```text
┌  Welcome to the Svelte CLI! (v0.6.18)
│
◇  Which template would you like?
│  SvelteKit minimal
│
◇  Add type checking with Typescript?
│  Yes, using Typescript syntax
│
◆  Project created
│
◇  What would you like to add to your project? (use arrow keys / space bar)
│  none
│
◇  Which package manager do you want to install dependencies with?
│  npm
```

> Keep in mind that we shall not add tailwind via the svelte-cli since it will install a previous version of tailwind.

After that, now we need to init tailwind using their CLI
```bash
npm install tailwindcss @tailwindcss/vite
```
and modify the `vite.config.ts` file with the import of `@tailwindcss/vite`

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()]
});
```

Create a `index.css` at `./src/index.css` with the following content:

```css
@import tailwindcss;
```

Create a svelte file called `+layout` at `./src/routes/+layout.svelte` with the following content: