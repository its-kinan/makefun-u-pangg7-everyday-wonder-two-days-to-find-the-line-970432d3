// One sentence of everyday wonder (114 chars), written to /output/entry.txt.
// Deterministic: a fixed string, no network, no randomness, no clock,
// no input of any kind. Node 22 runs this TypeScript as-is.
//
// The moment: an escalator's handrail really does creep ahead of its
// steps by a fraction — a small, true, overlooked mismatch — so the
// sentence ends with your hand arriving somewhere before the rest of you.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The escalator handrail creeps ahead of the steps, so by the top your hand has arrived somewhere your feet haven't.";

// The grader runs this in a sandbox with /output ready. Outside the
// grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
