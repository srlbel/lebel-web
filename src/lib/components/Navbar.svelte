<script lang="ts">
	const items = [
		{
			name: 'home',
			ref: '/'
		},
		{
			name: 'blog',
			ref: '/blog'
		},
		{
			name: 'portfolio',
			ref: '/portfolio'
		}
	];
</script>

<aside class="-ml-2 mb-16 tracking-tight">
	<div class="lg:sticky lg:top-20">
		<nav
			class="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
		>
			<div class="flex flex-row space-x-0 pr-10">
				{#each items as link}
					<a
						class="transition-all hover:text-blue flex align-middle relative py-1 px-2 m-1"
						href={link.ref}>{link.name}</a
					>
				{/each}
			</div>
		</nav>
	</div>
</aside>
