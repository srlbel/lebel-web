import { json } from '@sveltejs/kit';
import { fetchMarkdownPosts, parseDate } from '$lib/utils';
import type { RequestHandler } from './$types';
import type { MarkdownPost } from '$lib/types';

export const GET: RequestHandler = async () => {
	const allPosts: MarkdownPost[] = await fetchMarkdownPosts();
	const publishedPosts = allPosts.filter((post) => post.meta.published == true);

	const sortedPosts = publishedPosts.sort(
		(a, b) => parseDate(b.meta.date).getTime() - parseDate(a.meta.date).getTime()
	);

	return json(sortedPosts);
};
