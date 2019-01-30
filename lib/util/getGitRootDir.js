const {execSync} = require('child_process');

const getGitRootDir = () => {
  const dir = execSync('git rev-parse --show-toplevel 2>nul')
    .toString()
    .trim();

  return dir;
};

module.exports = getGitRootDir;
