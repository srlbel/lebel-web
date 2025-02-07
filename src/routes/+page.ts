import type { MarkdownPost } from '$lib/types';
import type { PageLoad } from './$types';

const MAX_POSTS = 3;

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts: MarkdownPost[] = await response.json();
	const filteredPosts = posts.slice(0, MAX_POSTS);

	return { posts: filteredPosts };
};
