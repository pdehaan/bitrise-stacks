#!/usr/bin/env node

const arg = require("arg");
const lib = require("./lib");

// CLI args
const INCLUDE_DEPRECATED = "--include-deprecated";

const args = arg({
  [INCLUDE_DEPRECATED]: Boolean,
});

main();

async function main() {
  const stacks = await lib.getBitriseStacks(args[INCLUDE_DEPRECATED]);
  console.log(JSON.stringify(stacks, null, 2));
}
