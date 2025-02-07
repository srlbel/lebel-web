import type { RequestHandler } from '@sveltejs/kit';
import type { MarkdownPost } from '$lib/types';
import { fetchMarkdownPosts } from '$lib/utils';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://srlbel.is-a.dev';
	const lastMod = new Date().toISOString();

	const allPosts: MarkdownPost[] = await fetchMarkdownPosts();
	const publishedPosts = allPosts.filter((post) => post.meta.published == true);

	const staticRoutes = ['/', '/portfolio', '/blog'].map(
		(path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${lastMod}</lastmod>
    </url>
    `
	);

	const dinamycBlogRoutes = publishedPosts.map(
		(path) => `
    <url>
      <loc>${baseUrl}/blog/${path.path}</loc>
      <lastmod>${lastMod}</lastmod>
    </url>
    `
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticRoutes.join('\n')}
    ${dinamycBlogRoutes.join('\n')}
  </urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
