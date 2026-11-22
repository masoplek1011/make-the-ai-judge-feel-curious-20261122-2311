import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Somewhere in everything you have read, there is a door you never opened. Behind it, a small room. One chair. One window. And on the table, a letter in your own handwriting, addressed to you. You have never read it. You have read it a thousand times.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
