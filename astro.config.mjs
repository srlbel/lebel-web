import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "catppuccin-mocha",
        light: "catppuccin-latte"
      }
    },
  },
  site: "https://srlbel.is-a.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
