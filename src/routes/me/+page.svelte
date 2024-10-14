<script>
  import {
    Code,
    Database,
    SquareTerminal,
    Github,
    GitCommitHorizontal,
    Braces,
    PanelTop,
  } from "lucide-svelte";
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
      <Skillcard name="Svelte"><PanelTop /></Skillcard>
      <Skillcard name="React"><PanelTop /></Skillcard>
      <Skillcard name="NextJs"><PanelTop /></Skillcard>
      <Skillcard name="TailwindCSS"><Code /></Skillcard>
      <Skillcard name="CSS"><Code /></Skillcard>
      <Skillcard name="HTML"><Code /></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Backend</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="MongoDB"><Database /></Skillcard>
      <Skillcard name="MySQL"><Database /></Skillcard>
      <Skillcard name="PostgreSQL"><Database /></Skillcard>
      <Skillcard name="ExpressJs"><Braces /></Skillcard>
      <Skillcard name="ElysiaJs"><Braces /></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Languages</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="TypeScript"><Braces /></Skillcard>
      <Skillcard name="JavaScript"><Braces /></Skillcard>
      <Skillcard name="Rust"><Braces /></Skillcard>
      <Skillcard name="Python"><Braces /></Skillcard>
      <Skillcard name="PHP"><Braces /></Skillcard>
    </div>

    <h2 class="text-xl font-semibold pt-2">Tools</h2>
    <div class="flex flex-row flex-wrap my-2 gap-1">
      <Skillcard name="Linux"><SquareTerminal /></Skillcard>
      <Skillcard name="Git"><GitCommitHorizontal /></Skillcard>
      <Skillcard name="GitHub"><Github /></Skillcard>
    </div>
  </div>
</div>
