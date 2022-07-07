<script lang="ts">
	import QuoteCard from "$lib/quote-card.svelte";
</script>

<div class="carousel rounded-box">
	<div id="quote1" class="carousel-item justify-center relative w-full">
		<QuoteCard />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#quote3" class="btn btn-circle">❮</a>
			<a href="#quote2" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="quote2" class="carousel-item justify-center relative w-full">
		<QuoteCard />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#quote1" class="btn btn-circle">❮</a>
			<a href="#quote3" class="btn btn-circle">❯</a>
		</div>
	</div>
	<div id="quote3" class="carousel-item justify-center relative w-full">
		<QuoteCard />
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#quote2" class="btn btn-circle">❮</a>
			<a href="#quote1" class="btn btn-circle">❯</a>
		</div>
	</div>
</div>
