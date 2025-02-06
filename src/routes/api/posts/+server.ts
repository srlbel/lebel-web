import { json } from '@sveltejs/kit';
import { fetchMarkdownPosts } from '$lib/utils';
import type { RequestHandler } from './$types';
import type { MarkdownPost } from '$lib/types';

export const GET: RequestHandler = async () => {
	const allPosts: MarkdownPost[] = await fetchMarkdownPosts();
	const publishedPosts = allPosts.filter((post) => post.meta.published == true);

	const sortedPosts = publishedPosts.sort(
		(a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
	);

	return json(sortedPosts);
};
