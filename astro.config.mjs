import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            themes: {
                dark: 'catppuccin-mocha',
                light: 'catppuccin-latte',
            },
        },
    },
    site: 'https://lebelito.cc',
    vite: {
        plugins: [tailwindcss()],
    },
});
