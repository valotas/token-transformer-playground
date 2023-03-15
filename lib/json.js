import { readFile, writeFile } from "fs/promises";
import os from "os";
import * as path from "path";

export async function readJson(path) {
  const content = await readFile(path, "utf-8");
  return JSON.parse(content);
}

export async function writeJsonToTemp(json) {
  const tempPath = path.join(os.tmpdir(), Date.now() + ".json");
  await writeFile(tempPath, JSON.stringify(json, null, 2), "utf-8");
  return tempPath;
}
