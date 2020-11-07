const lib = require("./lib");

main(true);

async function main(includeDeprecated = false) {
  let stacks = await lib.getBitriseStacks(includeDeprecated);
  stacks = stacks.map(stack => {
    delete stack.description;
    delete stack["project-types"];
    return stack;
  });
  console.log(stacks);
}
