<script>
  export const prerender = true;
  import Footer from "../lib/components/footer.svelte";
  import Navbar from "../lib/components/navbar.svelte";
  import Pagebreak from "../lib/components/pagebreak.svelte";
  import "../tailwind.css";
</script>

<svelte:head>
  <title>lbel's cave</title>
</svelte:head>

<main
  class="overflow-x-hidden text-lg max-w-screen flex flex-col items-center min-h-screen text-text-light bg-base-light dark:bg-base-dark dark:text-text-dark font-satoshi"
>
  <div class="w-full md:w-2/3 h-full pb-10 px-7">
    <Navbar />
    <Pagebreak />
    <slot />
    <Pagebreak />
    <Footer />
  </div>
</main>
