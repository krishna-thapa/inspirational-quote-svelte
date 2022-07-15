import { derived, writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Quote } from "src/model/quote";

class QuoteStore {
	constructor(
		/** Store for your data. 
      This assumes the data you're pulling back will be an array.
      If it's going to be an object, default this to an empty object.
    **/
		public quoteApiData: Writable<Quote[]> = writable([])
	) {}

	get csvids() {
		/** Data transformation.
      For our use case, we only care about the quote, not the other information.
      Here, we'll create a derived store to hold the needed fields.
      Use derived to access writable values and export as readonly
    **/
		return derived(this.quoteApiData, ($quoteApiData) => {
			if ($quoteApiData.length > 0) {
				return $quoteApiData.map((quote) => quote.csvId);
			}
			return [];
		});
	}
}

// Export a singleton
export const quoteStore = new QuoteStore();

// Allow for multiple stores (good for contexts)
// export const createMyFormStore = () => new QuoteStore();
