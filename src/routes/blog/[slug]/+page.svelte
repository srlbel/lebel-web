<script>
    export let data;
</script>

<div class="items-center flex flex-col my-10">
    <h1 class="text-3xl font-bold text-center">{data.title}</h1>
    <p class="text-sm text-center">{data.date}</p>
    <p class="p-2 text-center">{data.description}</p>
    <div class="flex flex-row space-x-2">
        {#each data.tags as tag}
            <p class="font-semibold italic">{tag}</p>
        {/each}
    </div>
</div>
<div class="prose prose-slate max-w-none lg:prose-lg" id="blog-content">
    <svelte:component this={data.content} />
</div>
