<script>
  import Skillcard from "../../lib/components/skillcard.svelte";
</script>

<div class="p-10 flex flex-col space-y-2">
  <h1 class="text-2xl font-semibold">Juan Simancas, a dev.</h1>
  <p>Is really hard to introduce myself, so, I'll go to the straight point.</p>
  <p>I'm a Systems Engineer wannabe based in Colombia that is interested in:</p>
  <ul class="list-disc list-inside">
    <li>Game Development</li>
    <li>Systems Administration</li>
    <li>Low Level Programming in general</li>
  </ul>
  <p></p>
  <div>
    <h1 class="text-2xl font-semibold">Skills</h1>
    <p>The pieces of tech that I consider myself proficent are:</p>

    <h2 class="text-xl font-semibold pt-2">Frontend</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="Svelte"><img src="https://skillicons.dev/icons?i=svelte"></Skillcard>
      <Skillcard name="React"><img src="https://skillicons.dev/icons?i=react"></Skillcard>
      <Skillcard name="NextJs"><img src="https://skillicons.dev/icons?i=nextjs"></Skillcard>
      <Skillcard name="TailwindCSS"><img src="https://skillicons.dev/icons?i=tailwind"></Skillcard>
      <Skillcard name="CSS"><img src="https://skillicons.dev/icons?i=css"></Skillcard>
      <Skillcard name="HTML"><img src="https://skillicons.dev/icons?i=html"></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Backend</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="MongoDB"><img src="https://skillicons.dev/icons?i=mongodb"></Skillcard>
      <Skillcard name="MySQL"><img src="https://skillicons.dev/icons?i=mysql"></Skillcard>
      <Skillcard name="PostgreSQL"><img src="https://skillicons.dev/icons?i=postgres"></Skillcard>
      <Skillcard name="ExpressJs"><img src="https://skillicons.dev/icons?i=expressjs"></Skillcard>
      <Skillcard name="ElysiaJs"><img src="https://skillicons.dev/icons?i=elysia"></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Languages</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="TypeScript"><img src="https://skillicons.dev/icons?i=typescript"></Skillcard>
      <Skillcard name="JavaScript"><img src="https://skillicons.dev/icons?i=javascript"></Skillcard>
      <Skillcard name="Rust"><img src="https://skillicons.dev/icons?i=rust"></Skillcard>
      <Skillcard name="Python"><img src="https://skillicons.dev/icons?i=python"></Skillcard>
      <Skillcard name="PHP"><img src="https://skillicons.dev/icons?i=php"></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Tools</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="Linux"><img src="https://skillicons.dev/icons?i=linux"></Skillcard>
      <Skillcard name="Git"><img src="https://skillicons.dev/icons?i=git"></Skillcard>
      <Skillcard name="GitHub"><img src="https://skillicons.dev/icons?i=github"></Skillcard>
    </div>
  </div>
</div>
