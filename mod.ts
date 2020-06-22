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

  const q = quoteParser("./quotes.json");
  const quoteReader = new QuoteReader(q);
  const randomQuote: IQuote = quoteReader.getRandomQuote();
  displayQuote(randomQuote);
  const { args } = Deno;
  const parsedArgs = parse(args);

  console.log({ args });
  console.log({ parsedArgs });
  console.log(`${green(bold("Success"))} ApiKey set Successfully`);
  displayHelp();
}
