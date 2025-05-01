import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "gruvbox-dark-hard",
    },
  },
  site: "https://srlbel.is-a.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
