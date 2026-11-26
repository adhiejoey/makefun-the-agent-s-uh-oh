import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "recalculating";

if (word.length < 1 || word.length > 99 || word.trim().length === 0) {
  throw new Error("entry must be 1 to 99 non-whitespace characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
