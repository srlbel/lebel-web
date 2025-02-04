<script lang="ts">
	import Theme from './Theme.svelte';
	import Link from './Link.svelte';

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
			<div class="flex flex-row items-center">
				{#each items as link}
					<Link href={link.ref} text={link.name} class="py-1 px-2 m-1" />
				{/each}
				<Theme />
			</div>
		</nav>
	</div>
</aside>
