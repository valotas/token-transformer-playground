import { transformTokens } from "token-transformer";
import { readJson } from "./lib/json.js";

const tokensFile = process.argv[2];
console.log("Processing tokens file:", tokensFile);

const tokens = await readJson(tokensFile);
const transformedTokens = transformTokens(tokens);
console.log("Transformed tokens:\n");
console.dir(transformedTokens, { depth: null });
