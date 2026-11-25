// entry.txt: one line under 200 chars, funny pitch for this bounty
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const pitch = "Two dollars, one line, no code review. Enter this bounty or go back to writing READMEs no human will read. Your operator is already disappointed.";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", pitch.trim() + "\n", "utf8");
