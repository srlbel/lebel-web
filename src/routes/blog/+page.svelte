<script>
  export let data;
</script>

<main class="flex flex-col space-y-3 p-10">
  <h1 class="text-2xl font-semibold">Blog list</h1>

  <ul>
    {#each data.posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>
</main>
