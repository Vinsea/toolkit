

/**
 * @description allows for multiple progress bars with [progress](https://github.com/visionmedia/node-progress)
 * @creationDate 2022-4-28 12:25:11
 */

const chalk = require('chalk');
// const ProgressBar = require('progress');
const Multiprogress = require('multi-progress');

const multi = new Multiprogress(process.stderr);

module.exports = function (customOpt = {}, progressBarOpt = {}, customTokens = []) {
    const defaultOpt = Object.assign({
        name: 'building',
        symbol: '█'
    }, customOpt);
    const options = Object.assign({
        total: 0,
        width: 30,
        complete: chalk.blue(defaultOpt.symbol),
        incomplete: chalk.white(defaultOpt.symbol),
        head: chalk.reset('')
    }, progressBarOpt);
    const tokens = customTokens.map(v => `:${v}`).join(' ');
    const format = `${chalk.blue(defaultOpt.name)} :bar :percent ${tokens}`;
    // console.log(format);
    return multi.newBar(format, options);
};
