import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import { createHighlighter } from 'shiki';

let highlighter;

async function getHighlighter() {
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: ['ayu-dark'],
			langs: ['javascript', 'typescript', 'bash', 'shell', 'css']
		});
		await highlighter.loadLanguage('javascript', 'typescript');
	}
	return highlighter;
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: ['.md'],
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter();

			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					theme: 'ayu-dark'
				})
			);

			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter()
	}
};

export default config;
