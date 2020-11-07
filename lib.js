const axios = require("axios");
const semver = require("semver");
const sortJson = require("sort-json");

module.exports = {
  getBitriseStacks,
};

async function getBitriseStacks(includeDeprecated = false) {
  const PREFIX = "osx-xcode-";
  const res = await axios.get("https://app.bitrise.io/app/6c06d3a40422d10f/all_stack_info");
  const stacks = Object.entries(res.data.available_stacks)
    .map(([_key, value]) => {
      if (!_key.startsWith(PREFIX)) {
        return;
      }
      const _deprecated = value.title.includes("Deprecated:");
      if (!includeDeprecated && _deprecated) {
        return;
      }
      const _version = _key.replace(PREFIX, "");
      const meta = {
        _deprecated,
        _key,
        _semver: _version.replace(/\.x$/, ".0"),
        _version,
      };
      return Object.assign(value, meta);
    })
    // Remove empty elements...
    .filter((stack) => stack)
    .sort((stackA, stackB) => {
      const semverA = stackA._semver;
      const semverB = stackB._semver;
      if (!semver.valid(semverA) || !semver.valid(semverB)) return -1;
      return semver.rcompare(semverA, semverB);
    });

  return sortJson(stacks);
}
