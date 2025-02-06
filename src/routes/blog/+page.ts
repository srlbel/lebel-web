import type { MarkdownPost } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts: MarkdownPost[] = await response.json();
	return { posts };
};
