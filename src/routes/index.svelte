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
