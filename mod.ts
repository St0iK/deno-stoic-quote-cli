import { IQuote } from "./types.d.ts";
import { quoteParser } from "./quote-parser.ts";
import { displayHelp, displayQuote } from "./display.ts";
import {
  parse,
  Args,
  green,
  bold,
  cyan,
  yellow,
  magenta,
} from "./deps.ts";
import { QuoteReader } from "./quote-reader.ts";

if (import.meta.main) {
  console.log(`${green("Stoic Quotes")}`);

  const { args } = Deno;
  const parsedArgs = parse(args);

  // displayHelp();

  const q = quoteParser("./quotes.json");
  const quoteReader = new QuoteReader(q);
  const randomQuote: IQuote = quoteReader.getRandomQuote();
  const getQuotesByAuthor: IQuote[] = quoteReader.getQuotesByAuthor(
    "Seneca",
  );

  const getQuoteContains: IQuote[] = quoteReader.getQuoteContains(
    "courage",
  );
  console.log(getQuotesByAuthor);
  console.log(getQuoteContains);
  // displayQuote(randomQuote);
}
