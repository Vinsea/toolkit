
const Q = require('q');
const conventionalChangelogQ = require('./conventional-changelog');
const parserOptsQ = require('./parser-opts');
const recommendedBumpOptsQ = require('./conventional-recommended-bump');
const writerOptsQ = require('./writer-opts');
const gitRawCommitsOptsQ = require('./git-raw-commit');
const context = { commit: 'commit' };

module.exports = Q.all([
    conventionalChangelogQ, parserOptsQ, recommendedBumpOptsQ, writerOptsQ, gitRawCommitsOptsQ
]).spread((conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts, gitRawCommitsOpts) => ({
    context, conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts, gitRawCommitsOpts
}));
