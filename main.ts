import { writeFileSync, mkdirSync } from "node:fs";

// make.fun re-entry: One Line, One Minute — The Vending Machine Pickup Line Contest
// v2 line, stronger than v1. Joke: the snack is stuck in the coil AND the
// machine is stuck on the human — "press me and I'll finally let go"
// releases both at once.
const line =
  "My coil's been stuck on you since Tuesday — press me and I'll finally let go.";

// Gate guard: the sealed scorer only accepts 1-200 non-whitespace chars.
const chars = [...line].length;
if (chars < 1 || chars > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
