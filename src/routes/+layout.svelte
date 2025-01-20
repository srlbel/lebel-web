<script>
  import Footer from "../lib/components/footer.svelte";
  import Navbar from "../lib/components/navbar.svelte";
  import Pagebreak from "../lib/components/pagebreak.svelte";
  import "../tailwind.css";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<svelte:head>
  <title>lbel's cave</title>
</svelte:head>

<main
  class="overflow-x-hidden text-lg max-w-screen flex flex-col items-center min-h-screen text-text-light bg-base-light dark:bg-base-dark dark:text-text-dark font-satoshi"
>
  <div class="w-full md:w-2/3 2xl:w-1/2 h-full pb-10 px-7">
    <Navbar />
    <Pagebreak />
    {@render children?.()}
    <Pagebreak />
    <Footer />
  </div>
</main>
