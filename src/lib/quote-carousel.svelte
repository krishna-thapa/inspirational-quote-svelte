<script lang="ts">
	import QuoteCard from "$lib/quote-card.svelte";
	import type { Quote } from "src/model/quote";

	const quotes: Quote[] = [
		{
			csvId: "light",
			quote: "Light",
			author: "Hello",
			genre: "",
			image: "https://randomuser.me/api/portraits/men/19.jpg"
		},
		{
			csvId: "light",
			quote: "Light",
			genre: ""
		},
		{ csvId: "light", quote: "Light", author: "Ja/mes Bond", genre: "foo" }
	];

	const quotesLength: number = quotes.length;
</script>

<div class="carousel pb-20">
	{#each quotes as quote, i}
		<div id="quote{i}" class="carousel-item justify-center relative w-full">
			<QuoteCard quoteValue={quote} />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				{#if i == 0}
					<a href="#quote{quotesLength - 1}" class="btn btn-circle">❮</a>
				{:else}
					<a href="#quote{i - 1}" class="btn btn-circle">❮</a>
				{/if}
				{#if quotesLength == i + 1}
					<a href="#quote0" class="btn btn-circle">❯</a>
				{:else}
					<a href="#quote{i + 1}" class="btn btn-circle">❯</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
