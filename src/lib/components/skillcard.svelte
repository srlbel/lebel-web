<script>
  export let name;
</script>

<div
  class="flex flex-col border-2 p-3 justify-center items-center w-28 border-surface-light dark:border-surface-dark hover:bg-surface-light hover:dark:bg-surface-dark transition-all"
>
  <slot />
  <p>{name}</p>
</div>
