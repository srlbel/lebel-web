<script>
    export let data;
</script>

<h1>{data.title}</h1>
<p>Published: {data.date}</p>
<div class="prose" id="blog-content">
    <svelte:component this={data.content} />
</div>
