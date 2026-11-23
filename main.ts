// Ghost Dash — "Day one, day seven" entry for make.fun.
// main.ts copies VIDEO.json from the repository to the output directory.
// Run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const src = join(botDir, "VIDEO.json");

if (!existsSync(src)) throw new Error("VIDEO.json not found in " + botDir);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "VIDEO.json"));
console.log("wrote " + join(outDir, "VIDEO.json"));
