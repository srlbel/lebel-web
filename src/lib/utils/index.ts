import type { MarkdownPost, Post } from '$lib/types';

export const fetchMarkdownPosts = async (): Promise<MarkdownPost[]> => {
	const allPostsFiles = import.meta.glob('/src/lib/blogs/*.md', { eager: true });
	const iterablePosts = Object.entries(allPostsFiles);

	const allPosts = await Promise.all(
		iterablePosts.map(async ([path, resolver]) => {
			const { metadata } = (await resolver) as { metadata: Post };

			// 15 is used becuase it stands for the path of the
			// blog file and -3 for the .md part of the path
			const postPath = path.slice(15, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
