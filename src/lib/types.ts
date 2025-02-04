export type Categories = string;

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Link = {
	text: string;
	href: string;
	isBlank?: boolean;
	isOutside?: boolean;
} & { class?: string };
