<script lang="ts">
	import Navbar from "$lib/navbar.svelte";
	import QuoteCarousel from "$lib/quote-carousel.svelte";

	export let title: string = "DON";

	var updateTitle = function () {
		title = "Change the title";
	};
</script>

<div>
	<Navbar />
	<QuoteCarousel />
	<h2>{title}</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate ipsum maxime totam
		perferendis officiis quae distinctio dicta fugiat repellat iure numquam, pariatur aut nobis
		alias illum, esse sit quibusdam?
	</p>
	<button on:click={updateTitle}>Change the title</button>
	<input type="text" bind:value={title} />
</div>
