import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            themes: {
                dark: 'rose-pine',
                light: 'rose-pine-dawn',
            },
        },
    },
    site: 'https://lebelito.cc',
    vite: {
        plugins: [tailwindcss()],
    },
});
