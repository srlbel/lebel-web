<script>
    export let blogData;
</script>

<div class="flex flex-row items-baseline space-x-2">
    <p class="font-light w-20">{blogData.date}</p>
    <a
        href={blogData.path}
        class="font-semibold flex-1 hover:text-accent-light"
    >
        {blogData.title}
    </a>
</div>
