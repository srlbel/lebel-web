<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import projects from '$lib/data/projects.json';
	import skills from '$lib/data/skills.json';
	import Link from '$lib/components/Link.svelte';

	const BASE_ICON_URL = 'https://skillicons.dev/icons?i=';
	const ICONS_PERLINE = 2;
</script>

<svelte:head>
	<title>lbel's portfolio</title>
</svelte:head>

<h1 class="mb-8 text-2xl font-semibold tracking-tighter">Portfolio</h1>
<section class="mb-4">
	<p class="mb-4">
		It's really hard to introduce me, so I'll go straight to the point. I'm a student of Systems
		Engineering and a Full Stack web developer based in Colombia that is interested in:
	</p>
	<ul class="list-disc list-inside">
		<li>Games Development</li>
		<li>Systems Administration</li>
		<li>Low Level Programming for Embedded Devices</li>
		<li>Web Development</li>
	</ul>
</section>

<section class="mb-4">
	<h2 class="mb-4 text-xl font-semibold tracking-tighter">Projects</h2>
	{#each projects as project}
		<div class="mb-2 flex flex-row justify-between border-1 p-4">
			<img
				alt="tech list"
				src={`${BASE_ICON_URL}${project.tech.join(',')}&perline=${ICONS_PERLINE}`}
			/>
			<div class="flex flex-col justify-between text-right w-2/3 space-y-2">
				<div>
					<h2 class="text-xl font-semibold tracking-tighter">{project.name}</h2>
					<p class="italic text-sm">{project.description}</p>
				</div>
				<Link href={project.repo} text="repository" isOutside isBlank class="justify-end" />
			</div>
		</div>
	{/each}
</section>

<section class="mb-4">
	<h2 class="mb-4 text-xl font-semibold tracking-tighter">Skills</h2>
	{#each skills as skill}
		<h3 class="mb-2 text-xl italic tracking-tighter">{skill.name}</h3>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 place-content-center">
			{#each skill.techs as tech}
				<div class="flex text-center border-1 p-4 justify-between items-center w-full">
					<img
						class="aspect-square w-10 h-10"
						src={`${BASE_ICON_URL}${tech.urlRef}`}
						alt={tech.name}
					/>
					<p>{tech.name}</p>
				</div>
			{/each}
		</div>
	{/each}
</section>
