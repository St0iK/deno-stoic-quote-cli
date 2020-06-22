import { IQuote } from "./types.d.ts";

class QuoteReader {
  quotes: IQuote[];
  constructor(quotes: IQuote[]) {
    this.quotes = quotes;
  }
  getRandomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}

export { QuoteReader };
