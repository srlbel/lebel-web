<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="description" content={data.meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://srlbel.is-a.dev/" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content="https://srlbel.is-a.dev/favicon.png" />
	<meta property="og:image:alt" content="Website logo" />
	<meta property="twitter:url" content="https://srlbel.is-a.dev/" />
	<meta property="twitter:title" content={data.meta.description} />
	<meta property="twitter:description" content={data.meta.description} />
	<meta property="twitter:image" content="https://srlbel.is-a.dev/favicon.png" />
	<meta property="twitter:image:alt" content="Website logo" />
</svelte:head>

<article>
	<hgroup class="mb-4">
		<h1 class="mb-2 text-2xl font-semibold tracking-tight">{data.meta.title}</h1>
		<p class="mb-4 text-sm italic">{data.meta.description}</p>
		<p class="mb-4 text-sm">Published at {data.meta.date}</p>
	</hgroup>

	<div class="mb-4">
		{#each data.meta.tags as tag}
			<span class="mr-2">&num;{tag}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>
