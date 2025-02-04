<script lang="ts">
	export let data;
	const { posts } = data;
</script>

<section>
	<h1 class="text-2xl mb-8 font-semibold tracking-tight">Blog Posts</h1>
	<ul>
		{#each posts as post}
			<li class="mb-4">
				<a class="hover:text-blue transition-all" href={`/blog/${post.slug}`}>
					{post.title}
					<p class="text-sm">{post.date}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
