import { transformTokens } from "token-transformer";
import { readJson, writeJsonToTemp } from "./lib/json.js";

const tokensFile = process.argv[2];
console.log("Processing tokens file:", tokensFile);

const tokens = await readJson(tokensFile);
const setsToUse = [];
const excludes = [];
const transformedTokens = transformTokens(tokens, setsToUse, excludes, {
  expandTypography: true,
  expandShadow: true,
  expandComposition: true,
  preserveRawValue: false,
  throwErrorWhenNotResolved: true,
  resolveReferences: true,
});
console.log("Transformed tokens:\n");
console.dir(transformedTokens, { depth: null });

const tmpJsonFile = await writeJsonToTemp(transformedTokens);
console.log("Transformed tokens written to:", tmpJsonFile);
