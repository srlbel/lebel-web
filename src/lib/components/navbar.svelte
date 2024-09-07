<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<nav class="w-full flex flex-row justify-between items-center text-lg mt-5">
  <a href="/" class="hidden md:block">lbel.dev</a>
  <div class="flex flex-row items-center space-x-2">
    <a href="/" class="hover:text-accent-light dark:hover:text-accent-dark"
      >home</a
    >
    <p>•</p>
    <a href="/misc" class="hover:text-accent-light dark:hover:text-accent-dark"
      >misc</a
    >
    <p>•</p>
    <a href="/me" class="hover:text-accent-light dark:hover:text-accent-dark"
      >me</a
    >
  </div>
  <ThemeSwitcher />
</nav>
