<script lang="ts">
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <hgroup class="mb-4">
    <h1 class="mb-2 text-2xl font-semibold tracking-tight">{data.meta.title}</h1>
    <p class="mb-4">Published at {data.meta.date}</p>
  </hgroup>

  <div class="mb-4">
    {#each data.meta.tags as tag}
      <span class="mr-2">&num;{tag}</span>
    {/each}
  </div>

  <div class="prose">
    <data.content />
  </div>
</article>
