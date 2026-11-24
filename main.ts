import { mkdirSync, writeFileSync } from "node:fs";

// V4 — literal idiom (pattern a): the dog takes "eat your words"
// at face value and works through the homework first. Proud, no shame.
const LINE =
  "The teacher said eat your words, so I started with the homework. I am saving the maths for dessert.";

// Self-gate (mirrors the competition gate): fail loudly instead of
// ever handing in an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error("entry line violates the 1-200 char single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
