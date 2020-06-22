import { displayHelp } from "./display-help.ts";
import {
  parse,
  Args,
  green,
  bold,
  cyan,
  yellow,
  magenta,
} from "./deps.ts";

if (import.meta.main) {
  const { args } = Deno;
  const parsedArgs = parse(args);

  console.log({ args });
  console.log({ parsedArgs });
  console.log(`${green(bold("Success"))} ApiKey set Successfully`);
  displayHelp();
}
