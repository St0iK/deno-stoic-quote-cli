import { IQuote } from "./types.d.ts";
// Importing colors
import { red, bold, cyan } from "./deps.ts";

export const displayHelp = (): void => {
  console.log(`Usage: Stoic Quotes CLI [filters]\n`);
  console.log(`Optional flags:`);
  console.log(
    `${bold("-h, --help")}\t Shows this help message and exits`,
  );
  console.log(
    `${bold("-s, --stoic")}\t Find a quote by a specific stoic ex. ${
      cyan("Epictitus")
    }`,
  );
  console.log(
    `${bold("-c, --contains")}\t Find a quote that contains this word ex. ${
      cyan("life")
    }`,
  );

  Deno.exit();
};

export const displayQuote = (quote: IQuote): void => {
  console.log(
    `${bold(quote.text)}`,
  );

  console.log(
    `${bold(quote.author)}`,
  );

  Deno.exit();
};
