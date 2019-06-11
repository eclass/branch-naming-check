const fs = require("fs");
const util = require("util");
const envCi = require("env-ci");

const readFile = util.promisify(fs.readFile);

function parseBranchName(data) {
  const match = /ref: refs\/heads\/([^\n]+)/.exec(data.toString());
  return match ? match[1] : null;
}

function gitHeadPath() {
  const headPath = ".git/HEAD";
  if (!fs.existsSync(headPath)) {
    throw new Error(".git/HEAD does not exist");
  }
  return headPath;
}

function currentBranchName() {
  const { isCi, branch } = envCi()
  if (isCi) {
    return Promise.resolve(branch)
  } else {
    return readFile(gitHeadPath()).then(data => parseBranchName(data));
  }
}

module.exports = { currentBranchName };
