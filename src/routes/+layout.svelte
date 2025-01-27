<script lang="ts">
	import '../index.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<title>srlbel's shrine</title>
</svelte:head>

<main class="font-mono text-text bg-base min-h-screen dark:text-base dark:bg-text">
	<div class="antialised max-w-xl mx-4 pt-8 lg:mx-auto">
		<div class="flex-auto min-w-0 pt-6 flex flex-col px-2 md:px-0">
			<Navbar />
			{@render children()}
			<Footer />
		</div>
	</div>
</main>
