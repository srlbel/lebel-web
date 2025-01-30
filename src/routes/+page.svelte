<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Personal Website of Juan Simancas</title>
	<meta
		name="description"
		content="The personal website and blog of SrLbel. Posts about engineering and software."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://srlbel.is-a.dev/" />
	<meta property="og:title" content="Personal Website of SrLbel" />
	<meta
		property="og:description"
		content="The personal website and blog of Srlbel. Post about engineering and software"
	/>
	<meta property="og:image" content="https://srlbel.is-a.dev/favicon.jpg" />
	<meta property="og:image:alt" content="Website logo" />
	<meta property="twitter:url" content="https://srlbel.is-a.dev/" />
	<meta property="twitter:title" content="Personal Website of SrLbel" />
	<meta
		property="twitter:description"
		content="The personal website and blog of Srlbel. Post about engineering and software"
	/>
	<meta property="twitter:image" content="https://srlbel.is-a.dev/favicon.jpg" />
	<meta property="twitter:image:alt" content="Website logo" />
</svelte:head>

<section class="mb-8">
	<h1 class="mb-8 text-2xl font-semibold tracking-tighter">Lbel's Shrine</h1>
	<p class="mb-4">
		Student of Systems Engineering. Currently I'm looking to properly learn systems management, web
		development and game development. I want to focus in maths and overall linux knownlegde.
	</p>

	<p>I will use this website to share insights, opinions and also use it as my portfolio.</p>
</section>

<section>
	<h1 class="mb-2 text-xl font-semibold tracking-tight">Recent Posts</h1>
	<ul>
		{#each data.posts as post}
			<li class="mb-4">
				<a
					class="underline transition-all decoration-orange underline-offset-2 decoration-[0.1em] hover:text-orange"
					href={`/blog/${post.slug}`}
				>
					{post.title}
					<p class="text-sm">{post.date}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
