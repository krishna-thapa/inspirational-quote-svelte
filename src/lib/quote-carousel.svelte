<script lang="ts">
	import QuoteCard from "$lib/quote-card.svelte";
	// @ts-ignore
	import { quoteStore } from "/src/stores/quoteStore";
	import { onMount } from "svelte";

	const endpoint: string = "http://localhost:3004/quotes";
	const { quoteApiData } = quoteStore;

	const quoteText: string[] = ["Quote of the day", "Yesterdays", "Day before yesterday"];

	onMount(async () => {
		fetch(endpoint)
			.then((response) => response.json())
			.then((data) => {
				quoteApiData.set(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<div class="carousel pb-20">
	{#each $quoteApiData as quote, i}
		<div id="quote{i}" class="carousel-item justify-center relative w-full">
			<div class="quote-heading	absolute">{quoteText[i]}</div>
			<QuoteCard quoteValue={quote} />
			<div class="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
				{#if i == 0}
					<a href="#quote{$quoteApiData.length - 1}" class="btn btn-circle">❮</a>
				{:else}
					<a href="#quote{i - 1}" class="btn btn-circle">❮</a>
				{/if}
				{#if $quoteApiData.length == i + 1}
					<a href="#quote0" class="btn btn-circle">❯</a>
				{:else}
					<a href="#quote{i + 1}" class="btn btn-circle">❯</a>
				{/if}
			</div>
		</div>
	{/each}
</div>