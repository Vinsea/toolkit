

const Q = require('q');
const parserOptsQ = require('./parser-opts');
const writerOptsQ = require('./writer-opts');
// fix: https://github.com/lerna/lerna/blob/81a591ccf1b0ca32f7f4638bab4f84b5743a3ca6/core/conventional-commits/lib/update-changelog.js#L36
const gitRawCommitsOptsQ = require('./git-raw-commit');

module.exports = Q.all([
    parserOptsQ, writerOptsQ, gitRawCommitsOptsQ
]).spread((parserOpts, writerOpts, gitRawCommitsOpts) => ({
    parserOpts, writerOpts, gitRawCommitsOpts
}));
