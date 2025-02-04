<script lang="ts">
	export let data;
	const { posts } = data;
</script>

<section>
	<h1 class="text-2xl mb-8 font-semibold tracking-tight">Blog Posts</h1>
	<ul>
		{#each posts as post}
			<li class="mb-4">
				<a class="hover:text-blue transition-all space-y-1" href={`/blog/${post.slug}`}>
					<div>
						<p>{post.title}</p>
						<p class="text-sm">{post.tags}</p>
					</div>
					<p class="text-sm">{post.date}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
