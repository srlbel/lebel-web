<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { browser } from '$app/environment';

	let darkMode = $state(false);

	const handleToggle = () => {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		const blogContent = document.getElementById('blog-content');
		if (darkMode) {
			blogContent?.classList.add('prose-dark');
			document.documentElement.classList.add('dark');
		} else {
			blogContent?.classList.remove('prose-dark');
			document.documentElement.classList.remove('dark');
		}
	};

	if (browser) {
		const blogContent = document.getElementById('blog-content');
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			blogContent?.classList.add('prose-dark');
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			blogContent?.classList.remove('prose-dark');
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<button onclick={handleToggle} class="px-2" aria-label="Toggle Theme">
	{#if darkMode}
		<div>
			<Moon class="w-4 h-4" />
		</div>
	{:else}
		<div>
			<Sun class="w-4 h-4" />
		</div>
	{/if}
</button>
