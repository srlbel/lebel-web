<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	let darkMode = $state(false);

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
