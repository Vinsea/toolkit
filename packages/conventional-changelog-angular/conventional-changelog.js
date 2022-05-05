

const Q = require('q');
const parserOptsQ = require('./parser-opts');
const writerOptsQ = require('./writer-opts');

module.exports = Q.all([
    parserOptsQ, writerOptsQ
]).spread((parserOpts, writerOpts) => ({
    parserOpts, writerOpts
}));
