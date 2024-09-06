<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<nav class="w-full flex flex-row justify-between items-center text-md mt-5">
  <a href="/" class="hidden md:block">lbel.dev</a>
  <div>
    <a href="/">home</a>
    <a href="/misc">misc</a>
    <a href="/me">me</a>
  </div>
  <ThemeSwitcher />
</nav>
