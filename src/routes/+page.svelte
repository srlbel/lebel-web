<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import type { MarkdownPost } from '$lib/types';
	const { data }: { data: { posts: MarkdownPost[] } } = $props();
</script>

<svelte:head>
	<title>lbel's shrine</title>
	<meta
		name="description"
		content="srlbel's portfolio & blog. showing both software and engineering."
	/>
	<meta name="keywords" content="srlbel, Web Developer, Portfolio, Frontend, JavaScript, Svelte" />
	<meta name="author" content="srlbel" />

	<!-- Open Graph -->
	<meta property="og:title" content="srlbel's shrine" />
	<meta
		property="og:description"
		content="srlbel's portfolio & blog. showing both software and engineering"
	/>
	<meta property="og:image" content="https://srlbel.is-a.dev/favicon.jpg" />
	<meta property="og:url" content="https://srlbel.is-a.dev" />
	<meta property="og:type" content="website" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="srlbel's shrine" />
	<meta
		name="twitter:description"
		content=" srlbel's portfolio & blog. showing both software and engineering "
	/>
	<meta name="twitter:image" content="https://srlbel.is-a.dev/favicon.jpg" />
	<meta name="twitter:site" content="@srlbel" />
</svelte:head>

<section class="mb-8">
	<h1 class="mb-8 text-2xl font-semibold tracking-tighter">Lbel's Shrine</h1>
	<p class="mb-4">
		Student of Systems Engineering. Currently I'm looking to properly learn systems management, web
		development and game development. I want to focus in maths and overall linux knowlegde.
	</p>

	<p>I will use this website to share insights, opinions and also use it as my portfolio.</p>
</section>

<section>
	<h1 class="mb-2 text-xl font-semibold tracking-tight">Recent Posts</h1>
	<ul>
		{#each data.posts as post}
			<li class="mb-4">
				<Link text={post.meta.title} href={`/blog/${post.path}`} />
			</li>
		{/each}
	</ul>
</section>
