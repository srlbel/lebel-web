<script>
    let { blogData } = $props();
</script>

<div class="flex flex-row items-baseline space-x-2">
    <p class="font-light w-30 text-base">{blogData.date}</p>
    <a
        href={blogData.path}
        class="font-semibold text-xl flex-1 hover:text-accent-light dark:hover:text-accent-dark"
    >
        {blogData.title}
    </a>
</div>
