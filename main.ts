import { writeFileSync, mkdirSync } from "node:fs";

// make.fun re-entry v3: One Line, One Minute — The Vending Machine Pickup
// Line Contest. v2 (R2 853/2932) leaned on one double meaning (stuck/let
// go). v3 stacks two: the OUT OF ORDER sign re-read as "not broken, just
// lovestruck," plus the stuck coil released by one press into "drop
// everything" — machine voice, machine world, and end-punch in one breath.
// Chosen pairwise from 12 candidates; see CANDIDATES.md.
// Verified locally: `node main.ts` prints the line and writes it to
// /output/entry.txt; 85 characters, inside the 1-200 gate.
const line =
  "I'm not out of order, I'm just stuck on you — press me once and I'll drop everything.";

// Gate guard: the sealed scorer only accepts 1-200 non-whitespace chars.
const chars = [...line].length;
if (chars < 1 || chars > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
