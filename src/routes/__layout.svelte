<script>
	import { onMount } from "svelte";
	// @ts-ignore
	import { themeChange } from "theme-change";
	import "../app.css";

	onMount(() => {
		themeChange(false);
	});
</script>

<slot />
