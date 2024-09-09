<script>
  import { Moon, Sun } from "lucide-svelte";
  import { browser } from "$app/environment";

  let darkMode = false;

  const handleDarkMode = () => {
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  if (browser) {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      darkMode = true;
    } else {
      document.documentElement.classList.remove("dark");
      darkMode = false;
    }
  }
</script>

<div>
  {#if darkMode}
    <div on:click={handleDarkMode}>
      <Moon class="w-5 h-5" />
    </div>
  {:else}
    <div on:click={handleDarkMode}>
      <Sun class="w-5 h-5" />
    </div>
  {/if}
</div>
