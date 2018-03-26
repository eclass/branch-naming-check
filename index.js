#!/usr/bin/env node

const { currentBranchName } = require("./lib/git-utils");

currentBranchName().then(branchName => {
  const matchesPattern = /(feature|release|hotfix)\/\d+\/(NOMO-\d+_)?[a-z-]+/g.test(
    branchName
  );
  if (matchesPattern) {
    process.exitCode = 0;
  } else {
    process.exitCode = 1;
    console.error(
      `Current branch "${branchName}" doesn't match supplied name pattern\n`
    );
  }
});
