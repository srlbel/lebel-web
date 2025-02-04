<script lang="ts">
	import type { Link } from '$lib/types';
	import { ArrowUpRight } from 'lucide-svelte';

	const props: Link = $props();
</script>

<a
	href={props.href}
	class="flex items-center underline transition-all underline-offset-2 decoration-2
    {props.class} 
    {props.isOutside
		? 'decoration-orange decoration-wavy hover:text-orange'
		: 'decoration-blue decoration-solid hover:text-blue'}"
	target={props.isBlank ? '_blank' : '_self'}
>
	{props.text}
	{#if props.isOutside}
		<ArrowUpRight class="w-5 ml-2" />
	{/if}
</a>
