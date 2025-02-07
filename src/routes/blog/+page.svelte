<script lang="ts">
	import type { MarkdownPost } from '$lib/types';
	const { data }: { data: { posts: MarkdownPost[] } } = $props();
</script>

<svelte:head>
	<title>srlbel's bloglist</title>
	<meta name="description" content="srlbel's bloglist" />
	<meta property="og:title" content="srlbel's bloglist" />
	<meta property="og:description" content="srlbel's bloglist" />
	<meta property="og:image" content="https://srlbel.is-a.dev/favicon.jpg" />
</svelte:head>

<section>
	<h1 class="text-2xl mb-8 font-semibold tracking-tight">Blog Posts</h1>
	<ul>
		{#each data.posts as post}
			<li class="mb-4">
				<a class="hover:text-blue transition-all space-y-1" href={`/blog/${post.path}`}>
					<div>
						<p>{post.meta.title}</p>
						<p class="text-sm">{post.meta.tags}</p>
					</div>
					<p class="text-sm">{post.meta.date}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
