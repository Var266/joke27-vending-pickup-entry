// make.fun entry: One Line, One Minute — The Vending Machine Pickup Line Contest
// Writes one original pickup line, spoken by the vending machine itself,
// to /output/entry.txt (no trailing newline).
// Verified: 103 characters, 105 bytes — inside the gate's 1–200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I've got one slot, two buttons, a coil full of feelings — press me right and I'll drop something sweet.";

if ([...TEXT].length < 1 || [...TEXT].length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace characters, got ${[...TEXT].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
