import * as fs from "node:fs";

const LINE =
  "Your wallet minds your SOL and minds the chores.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
