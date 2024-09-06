<script>
  import Footer from "../lib/components/footer.svelte";
  import Navbar from "../lib/components/navbar.svelte";
  import Pagebreak from "../lib/components/pagebreak.svelte";
  import "../tailwind.css";
</script>

<main
  class="overflow-x-hidden max-w-screen flex flex-col items-center font-serif justify-center"
>
  <div class="w-full md:w-2/3 h-full pb-10 px-7">
    <Navbar />
    <Pagebreak />
    <slot />
    <Pagebreak />
    <Footer />
  </div>
</main>
