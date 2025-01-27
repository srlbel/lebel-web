<script lang="ts">
	import { page } from '$app/state';
</script>

<h1 class="text-3xl my-10">{page.status}: {page.error?.message}</h1>
