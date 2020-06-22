import { IQuote } from "./types.d.ts";
// Importing colors
import { green, bold, cyan, yellow } from "./deps.ts";

export const displayHelp = (): void => {
  console.clear();
  console.log(`Usage: Stoic Quotes CLI\n`);
  console.log(`Optional flags:`);
  console.log(
    `${bold("-h, --help")}\t Shows this help message and exits`,
  );
  console.log(
    `${bold("-a, --author")}\t Find a quote by a specific stoic ex. ${
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
    `${bold(quote.text)} \n\n - ${
      cyan(bold(quote.author))
    } \n=======================================
    `,
  );
};
