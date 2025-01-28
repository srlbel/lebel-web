<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
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
				<a
					href={link.ref}
					class="flex items-center transition-all hover:text-blue"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p class="mr-2 h-7">{link.name}</p>
					<ArrowUpRight class="w-5" />
				</a>
			</li>
		{/each}
	</ul>
	<p class="mt-8">
		&copy; {new Date().getFullYear()} MIT Licensed
	</p>
</footer>
