<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let darkMode = $state(false);

	onMount(() => {
		if (!browser) return;

		const storedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		darkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);

		document.documentElement.classList.toggle('dark', darkMode);
	});

	const handleToggle = () => {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};
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
