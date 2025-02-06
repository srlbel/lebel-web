export type Tag = string;

export type Post = {
	title: string;
	description: string;
	date: string;
	tags: Tag[];
	published: boolean;
};

export type MarkdownPost = {
	meta: Post;
	path: string;
};

export type Link = {
	text: string;
	href: string;
	isBlank?: boolean;
	isOutside?: boolean;
} & { class?: string };
