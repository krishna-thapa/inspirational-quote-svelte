<script lang="ts">
	import Navbar from "$lib/navbar.svelte";
	import Footer from "$lib/page/footer.svelte";
	import QuoteCarousel from "$lib/quote/quote-carousel.svelte";
	import RandomQuote from "$lib/quote/random-quote.svelte";
</script>

<div>
	<Navbar />
	<QuoteCarousel />
	<RandomQuote />
	<Footer />
</div>

<style>
	:global(.heading) {
		font-family: "Great Vibes", cursive;
		color: hsl(var(--pf));
	}
	:global(.quote-heading) {
		padding-top: 9px;
		font-size: 60px;
		line-height: 30px;
		font-weight: normal;
		margin-bottom: 0px;
		margin-top: 20px;
		text-align: center;
	}
</style>
