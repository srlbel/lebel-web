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
      <Skillcard name="Svelte"><img src="https://skillicons.dev/icons?i=svelte" alt="Svelte Logo"></Skillcard>
      <Skillcard name="React"><img src="https://skillicons.dev/icons?i=react" alt="React Logo"></Skillcard>
      <Skillcard name="NextJs"><img src="https://skillicons.dev/icons?i=nextjs" alt="NextJs Logo" ></Skillcard>
      <Skillcard name="Bootstrap"><img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap Logo"></Skillcard>
      <Skillcard name="TailwindCSS"><img src="https://skillicons.dev/icons?i=tailwind" alt="TailwindCSS Logo"></Skillcard>
      <Skillcard name="CSS"><img src="https://skillicons.dev/icons?i=css" alt=" CSS Logo"></Skillcard>
      <Skillcard name="HTML"><img src="https://skillicons.dev/icons?i=html" alt="HTML Logo"></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Backend</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="MongoDB"><img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB Logo"></Skillcard>
      <Skillcard name="MySQL"><img src="https://skillicons.dev/icons?i=mysql" alt="MySQL Logo"></Skillcard>
      <Skillcard name="PostgreSQL"><img src="https://skillicons.dev/icons?i=postgres" alt="Postgres Logo"></Skillcard>
      <Skillcard name="ExpressJs"><img src="https://skillicons.dev/icons?i=expressjs" alt="ExpressJs Logo"></Skillcard>
      <Skillcard name="ElysiaJs"><img src="https://skillicons.dev/icons?i=elysia" alt="ElysiaJs Logo"></Skillcard>
      <Skillcard name="Bun"><img src="https://skillicons.dev/icons?i=bun" alt="Bun Logo"></Skillcard>
      <Skillcard name="NodeJs"><img src="https://skillicons.dev/icons?i=nodejs" alt="NodeJs Logo"></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Languages</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="TypeScript"><img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript Logo"></Skillcard>
      <Skillcard name="JavaScript"><img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript Logo"></Skillcard>
      <Skillcard name="Go"><img src="https://skillicons.dev/icons?i=go" alt="Go Logo"></Skillcard>
      <Skillcard name="Rust"><img src="https://skillicons.dev/icons?i=rust" alt="Rust Logo"></Skillcard>
      <Skillcard name="Python"><img src="https://skillicons.dev/icons?i=python" alt="Python Logo"></Skillcard>
      <Skillcard name="PHP"><img src="https://skillicons.dev/icons?i=php" alt="php Logo"></Skillcard>
      <Skillcard name="MarkDown"><img src="https://skillicons.dev/icons?i=md" alt="markdown Logo"></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Tools</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="Linux"><img src="https://skillicons.dev/icons?i=linux" alt="Linux Logo"></Skillcard>
      <Skillcard name="Bash"><img src="https://skillicons.dev/icons?i=bash" alt="Bash Logo"></Skillcard>
      <Skillcard name="Git"><img src="https://skillicons.dev/icons?i=git" alt="Git Logo"></Skillcard>
      <Skillcard name="GitHub"><img src="https://skillicons.dev/icons?i=github" alt="GitHub Logo"></Skillcard>
      <Skillcard name="NPM"><img src="https://skillicons.dev/icons?i=npm" alt="npm Logo"></Skillcard>
    </div>
  </div>
</div>
