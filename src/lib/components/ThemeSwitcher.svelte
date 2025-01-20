<script>
  import { Moon, Sun } from "lucide-svelte";
  import { browser } from "$app/environment";

  let darkMode = $state(false);

  const handleDarkMode = () => {
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    const blogContent = document.getElementById("blog-content");

    if (darkMode) {
      blogContent?.classList.add("prose-dark");
      document.documentElement.classList.add("dark");
    } else {
      blogContent?.classList.remove("prose-dark");
      document.documentElement.classList.remove("dark");
    }
  };

  if (browser) {
    const blogContent = document.getElementById("blog-content");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      blogContent?.classList.add("prose-dark");
      document.documentElement.classList.add("dark");
      darkMode = true;
    } else {
      blogContent?.classList.remove("prose-dark");
      document.documentElement.classList.remove("dark");
      darkMode = false;
    }
  }
</script>

<div>
  {#if darkMode}
    <button onclick={handleDarkMode}>
      <Moon class="w-5 h-5" />
    </button>
  {:else}
    <button onclick={handleDarkMode}>
      <Sun class="w-5 h-5" />
    </button>
  {/if}
</div>
