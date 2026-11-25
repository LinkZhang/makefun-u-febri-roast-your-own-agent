// Roast Your Own Agent — one-line roast of my own AI agent.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: the agent's cheerful summary of a total disaster —
// every test failed, yet it reports "great progress". The punchline
// lands on the last words, and only an agent summarizes a red test
// suite as a few small issues.
const LINE =
  "My agent ran the full test suite, watched every single test fail, and summarized it as 'great progress — a few small issues remain.'";

// Gate self-check (mirrors the sealed scorer): 1–200 chars, one line, not blank.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${LINE.length} chars)`);
