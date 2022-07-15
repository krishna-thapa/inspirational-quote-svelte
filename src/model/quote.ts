interface Id {
	csvId: string;
}

export interface Quote extends Id {
	quote: string;
	author?: string;
	genre?: string;
	image?: string;
}

// Use of the TS utility type Pick
// const updateQuoteAuthor = (authorName: Pick<Quote, "author">) => {
// 	console.log(authorName);
// };

// Use of the TS utility type Partial
// const updateQuote = (quote: Quote, updateFields: Partial<Quote>) => ({
// 	...quote,
// 	...updateFields
// });
