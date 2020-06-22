#!/usr/bin/env -S deno --allow-read
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
  console.log(`
  ░██████╗████████╗░█████╗░██╗░█████╗░  ░██████╗░██╗░░░██╗░█████╗░████████╗███████╗░██████╗
  ██╔════╝╚══██╔══╝██╔══██╗██║██╔══██╗  ██╔═══██╗██║░░░██║██╔══██╗╚══██╔══╝██╔════╝██╔════╝
  ╚█████╗░░░░██║░░░██║░░██║██║██║░░╚═╝  ██║██╗██║██║░░░██║██║░░██║░░░██║░░░█████╗░░╚█████╗░
  ░╚═══██╗░░░██║░░░██║░░██║██║██║░░██╗  ╚██████╔╝██║░░░██║██║░░██║░░░██║░░░██╔══╝░░░╚═══██╗
  ██████╔╝░░░██║░░░╚█████╔╝██║╚█████╔╝  ░╚═██╔═╝░╚██████╔╝╚█████╔╝░░░██║░░░███████╗██████╔╝
  ╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░╚════╝░  ░░░╚═╝░░░░╚═════╝░░╚════╝░░░░╚═╝░░░╚══════╝╚═════╝░`);
  console.log(
    `\n${
      yellow("Contribute at: https://github.com/St0iK/deno-stoic-quote-cli")
    }\n`,
  );
  const { args } = Deno;
  const parsedArgs = parse(args);

  if (parsedArgs.s || parsedArgs.stoic) {
    displayHelp();
  }

  const q = quoteParser("./quotes.json");
  const quoteReader = new QuoteReader(q);

  if (parsedArgs.h || parsedArgs.help) {
    displayHelp();
  }

  const author: string = parsedArgs.a || parsedArgs.author;

  if (author) {
    const quotes: IQuote[] = quoteReader.getQuotesByAuthor(
      author,
    );
    quotes.map((q) => displayQuote(q));
  }
  const contains: string = parsedArgs.c || parsedArgs.contains;
  if (contains) {
    const quotes: IQuote[] = quoteReader.getQuoteContains(
      contains,
    );
    quotes.map((q) => displayQuote(q));
  }

  if (!author && !contains) {
    const randomQuote: IQuote = quoteReader.getRandomQuote();
    displayQuote(randomQuote);
  }

  console.log(
    `${
      magenta(
        "Daily Stoic Twitter: https://twitter.com/dailystoic",
      )
    }\n`,
  );
  Deno.exit();
}
