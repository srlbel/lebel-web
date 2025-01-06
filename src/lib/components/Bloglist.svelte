<script>
    export let blogData;
</script>

<div class="border-2 p-5 rounded-none">
    <div class="flex flex-row space-x-2 items-baseline">
        <a href={blogData.path}>
            <h2 class="font-semibold text-2xl hover:text-accent-light">
                {blogData.title}
            </h2>
        </a>
        <span>⦁</span>
        <p class="text-base font-light italic">{blogData.date}</p>
    </div>
    <p>{blogData.description}</p>
</div>
