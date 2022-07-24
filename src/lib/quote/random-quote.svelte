<script lang="ts">
	import QuoteCard from "$lib/quote/quote-card.svelte";
	import type { Quote } from "src/model/quote";
	import { onMount } from "svelte";

	const randomQuoteUrl = "http://localhost:9000/quote/random";
	let randomQuote: Quote;

	onMount(async () => calRandomQuoteApi());

	async function calRandomQuoteApi() {
		const response = await fetch(randomQuoteUrl, {
			method: "GET",
			headers: {
				accept: "application/json"
			}
		});
		randomQuote = await response.json();
	}
</script>

<div>
	{#if randomQuote}
		<div class="quote-heading random-quote">Random qoute</div>
		<QuoteCard quoteValue={randomQuote}>
			<div class="w-20 h-20 -mt-16 float-right">
				<button class="btn btn-circle" on:click|preventDefault={calRandomQuoteApi}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
							clip-rule="evenodd" />
					</svg>
				</button>
			</div>
		</QuoteCard>
	{:else}
		<div class="flex items-center justify-center ">
			<div class="w-24 h-24 border-l-2 border-green-900 rounded-full animate-spin" />
		</div>
	{/if}
</div>

<style>
	.btn .icon {
		width: 24px;
		height: 24px;
		transition: all 0.4s ease-in-out;
	}
	.btn:hover .icon {
		transform: rotate(360deg) scale(1.2);
	}
	.random-quote {
		margin-top: -50px;
	}
</style>
