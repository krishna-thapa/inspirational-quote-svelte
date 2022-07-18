<script lang="ts">
	import Navbar from "$lib/navbar.svelte";
	import Footer from "$lib/page/footer.svelte";
	import QuoteCarousel from "$lib/quote-carousel.svelte";
	import RandomQuote from "$lib/quote/random-quote.svelte";
</script>

<div>
	<Navbar />
	<QuoteCarousel />
	<div class="quote-heading random-quote">Random qoute</div>
	<RandomQuote />
	<Footer />
</div>

<style>
	.random-quote {
		margin-top: -50px;
	}
</style>
