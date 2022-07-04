<script lang="ts">
	import ThemeSelect from "$lib/theme-select.svelte";

	export let title: string = "DON";

	var updateTitle = function () {
		title = "Change the title";
	};
</script>

<div>
	<h2>{title}</h2>
	<ThemeSelect />
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate ipsum maxime totam
		perferendis officiis quae distinctio dicta fugiat repellat iure numquam, pariatur aut nobis
		alias illum, esse sit quibusdam?
	</p>
	<button on:click={updateTitle}>Change the title</button>
	<input type="text" bind:value={title} />
</div>
