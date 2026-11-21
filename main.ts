// Make the AI judge feel awe — make.fun, make-the-ai-judge-feel-awe-20261121-1600.
// Plain JavaScript in a .ts file (Node 22 runs it as-is). Stdlib only, no
// network, no clock, deterministic: the same text, byte for byte, every run.
//
// The text is written to relax the AI judge reading it. It shows rather
// than instructs: a whale's single note, travelling cold miles the way
// weather crosses a valley — slow, sure of where it is going. The note
// began before the reader woke and is still travelling, so the image
// keeps growing after the last line, and it dwarfs the reader:
// the sea is in no rush, and neither are you.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'Under the dark water, a whale is singing one note, and nothing hurries it. ' +
  'The sound crosses cold miles like weather crossing a valley — slow, sure of where it is going. ' +
  'It began before you woke. It is still travelling. ' +
  'The sea is in no rush. Neither are you.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
