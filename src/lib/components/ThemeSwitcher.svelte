<script>
  import { Moon, Sun } from "lucide-svelte";

  let isDefault = true;

  const changeTheme = () => {
    isDefault = !isDefault;
  };
</script>

<div>
  {#if isDefault}
    <div on:click={changeTheme}>
      <Sun class="w-5 h-5" />
    </div>
  {:else}
    <div on:click={changeTheme}>
      <Moon class="w-5 h-5" />
    </div>
  {/if}
</div>
