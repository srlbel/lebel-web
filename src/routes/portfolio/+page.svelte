<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';

	const BASE_ICON_URL = 'https://skillicons.dev/icons?i=';

	const projects = [
		{
			name: 'lbel website',
			description: 'My simple personal website to host my personal blog and my information.',
			tech: ['svelte', 'tailwindcss', 'nodejs', 'markdown'],
			repo: 'https://github.com/srlbel/lebel-web'
		}
	];

	const skills = [
		{
			name: 'Frontend',
			techs: [
				{ name: 'Svelte', urlRef: 'svelte' },
				{ name: 'NextJs', urlRef: 'nextjs' },
				{ name: 'Bootstrap', urlRef: 'bootstrap' },
				{ name: 'TailwindCSS', urlRef: 'tailwindcss' },
				{ name: 'CSS', urlRef: 'css' },
				{ name: 'HTML', urlRef: 'html' }
			]
		},
		{
			name: 'Backend',
			techs: [
				{ name: 'MongoDB', urlRef: 'mongodb' },
				{ name: 'MySQL', urlRef: 'mysql' },
				{ name: 'PostgreSQL', urlRef: 'postgresql' },
				{ name: 'ExpressJs', urlRef: 'expressjs' },
				{ name: 'ElysiaJs', urlRef: 'elysia' },
				{ name: 'Bun', urlRef: 'bun' },
				{ name: 'NodeJs', urlRef: 'nodejs' },
				{ name: 'Laravel', urlRef: 'laravel' }
			]
		},
		{
			name: 'Languages',
			techs: [
				{ name: 'TypeScript', urlRef: 'typescript' },
				{ name: 'JavaScript', urlRef: 'javascript' },
				{ name: 'Go', urlRef: 'go' },
				{ name: 'Rust', urlRef: 'rust' },
				{ name: 'Python', urlRef: 'python' },
				{ name: 'PHP', urlRef: 'php' },
				{ name: 'MarkDown', urlRef: 'markdown' }
			]
		},
		{
			name: 'Tools',
			techs: [
				{ name: 'Linux', urlRef: 'linux' },
				{ name: 'Bash', urlRef: 'bash' },
				{ name: 'Git', urlRef: 'git' },
				{ name: 'GitHub', urlRef: 'github' },
				{ name: 'NPM', urlRef: 'npm' },
				{ name: 'Vim', urlRef: 'vim' }
			]
		}
	];
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
			<img alt="tech list" src={`${BASE_ICON_URL}${project.tech.join(',')}&perline=2`} />
			<div class="flex flex-col justify-between text-right w-2/3 space-y-2">
				<div>
					<h2 class="text-xl font-semibold tracking-tighter">{project.name}</h2>
					<p class="italic text-sm">{project.description}</p>
				</div>
				<a
					rel="noopener noreferrer"
					href={project.repo}
					target="_blank"
					class="flex items-center justify-end hover:text-blue underline transition-all decoration-blue underline-offset-2 decoration-[0.1em]"
				>
					<p class="mr-2 h-7">repository</p>
					<ArrowUpRight class="w-5" />
				</a>
			</div>
		</div>
	{/each}
</section>

<section class="mb-4">
	<h2 class="mb-4 text-xl font-semibold tracking-tighter">Skills</h2>
	{#each skills as skill}
		<h3 class="mb-2 text-xl italic tracking-tighter">{skill.name}</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 place-content-center">
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
