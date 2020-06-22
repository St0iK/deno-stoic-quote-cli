import { IQuote } from "./types.d.ts";

class QuoteReader {
  quotes: IQuote[];
  constructor(quotes: IQuote[]) {
    this.quotes = quotes;
  }

  getRandomQuote(): IQuote {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  getQuotesByAuthor(author: string, limit: number = 5): IQuote[] {
    return this.quotes.filter(function (quote) {
      return quote.author === author;
    }).slice(0, limit);
  }

  getQuoteContains(contains: string, limit: number = 5): IQuote[] {
    return this.quotes.filter(function (quote) {
      return quote.text.includes(contains);
    }).slice(0, limit);
  }
}

export { QuoteReader };
