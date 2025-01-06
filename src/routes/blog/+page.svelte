<script>
  export let data;
  import Bloglist from "../../lib/components/Bloglist.svelte";
</script>

<main class="flex flex-col space-y-3 p-10">
  <h1 class="text-2xl font-semibold">My Blog List</h1>

  <div class="flex flex-col space-y-3">
    {#each data.posts as post}
      <Bloglist
        blogData={{
          title: post.meta.title,
          description: post.meta.description,
          date: post.meta.date,
          path: post.path,
        }}
      />
    {/each}
  </div>
</main>
