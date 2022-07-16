<script lang="ts">
	import type { Quote } from "src/model/quote";
	export let quoteValue: Quote;

	let authorInitials: string | undefined = quoteValue.author
		?.match(/\b(\w)/g)
		?.join("/")
		?.toUpperCase();

	if (!quoteValue.image) {
		if (authorInitials) {
			quoteValue.image = `https://avatars.dicebear.com/api/initials/${authorInitials}/seed.svg`;
		} else {
			quoteValue.image = "https://avatars.dicebear.com/api/bottts/seed.svg";
		}
	}
</script>

<div class="flex items-center justify-center px-5 pt-20 pb-5 mt-10">
	<div
		class="w-full mx-auto rounded-lg shadow-current shadow-2xl px-5 pt-5 pb-10"
		style="max-width: 500px">
		<div class="w-full pt-1 pb-5">
			<div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
				<img src={quoteValue.image} alt="" />
			</div>
		</div>
		<div class="w-full mb-10">
			<div class="text-4xl text-primary-focus text-left leading-tight h-3">“</div>
			<p class="quote-text text-base text-center px-5">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium
				recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.
			</p>
			<div class="text-4xl text-primary-focus text-right leading-tight h-3 -mt-3">”</div>
		</div>
		<div class="w-full">
			<p class="text-md text-accent-focus font-bold text-center">Scott Windon</p>
			<div class="text-center pt-2 text-xs text-center">
				<div class="badge badge-outline">#{quoteValue.genre}</div>
				<div class="badge badge-outline">#Products</div>
			</div>
		</div>
	</div>
</div>

<style>
	.quote-text {
		font-family: "Libre Baskerville", serif;
		line-height: 35px;
	}
</style>
