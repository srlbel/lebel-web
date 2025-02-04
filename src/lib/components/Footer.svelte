<script lang="ts">
	import Link from './Link.svelte';
	const items = [
		{
			name: 'rss',
			ref: '/rss'
		},
		{
			name: 'github',
			ref: 'https://github.com/srlbel'
		},
		{
			name: 'source code',
			ref: 'https://github.com/srlbel/lebel-web'
		}
	];
</script>

<footer class="mb-16">
	<ul class="font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
		{#each items as link}
			<li>
				<Link href={link.ref} text={link.name} isBlank isOutside />
			</li>
		{/each}
	</ul>
	<p class="mt-8">
		This is website under the UNLICENSE <span class="italic"> license </span>. for more information
		see:
		<Link href="https://unlicense.org/" text="https://unlicense.org" isOutside isBlank />
	</p>
</footer>
