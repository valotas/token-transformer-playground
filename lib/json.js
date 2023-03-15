import { readFile } from "fs/promises";

export async function readJson(path) {
  const content = await readFile(path, "utf-8");
  return JSON.parse(content);
}
