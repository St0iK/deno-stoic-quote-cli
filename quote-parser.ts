import { IQuote } from "./types.d.ts";
import { readJsonSync } from "./deps.ts";

export const quoteParser = (file: string): IQuote[] => {
  const quoteList: any = readJsonSync(file);
  return quoteList.quotes;
};
