<script>
  let { name, children } = $props();
</script>

<div
  class="flex flex-col border-2 rounded-md p-3 justify-center items-center min-w-28 border-surface-light dark:border-surface-dark hover:bg-surface-light hover:dark:bg-surface-dark transition-all"
>
  {@render children?.()}
  <p>{name}</p>
</div>
