
/**
 * @description colorful console
 *              from https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/logger.ts
 *              and https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-shared-utils/lib/logger.js
 *              with some modifications & additions
 * @creationDate 2022-4-28 16:49:44
 */

const chalk = require('chalk');
const readline = require('readline');

class Logger {
    constructor(options) {
        this.options = Object.assign(
            {
                logLevel: process.argv.includes('--debug') ? 4 : 3,
                bg: true,
                newLine: false
            },
            options
        );
    }

    get head() {
        return this.options.newLine ? '\n' : '';
    }

    setOptions(options) {
        Object.assign(this.options, options);
    }

    // level: 4
    debug(...args) {
        if (this.options.logLevel < 4) {
            return;
        }
        this.status('magenta', '  debug', ...args);
    }

    // level: 2
    warn(...args) {
        if (this.options.logLevel < 2) {
            return;
        }
        console.warn(`${this.head}${this.getPrefix('yellow', ' warning')}`, ...args);
    }

    // level: 1
    error(...args) {
        if (this.options.logLevel < 1) {
            return;
        }
        process.exitCode = process.exitCode || 1;
        console.error(`${this.head}${this.getPrefix('red', '  error')}`, ...args);
    }

    // level: 3
    success(...args) {
        this.status('green', ' success', ...args);
    }

    // level: 3
    tip(...args) {
        this.status('blue', '   tip', ...args);
    }

    // level: 3
    info(...args) {
        this.status('cyan', '  info', ...args);
    }

    // level: 3
    status(color, label, ...args) {
        if (this.options.logLevel < 3) {
            return;
        }
        console.log(`${this.head}${this.getPrefix(color, label)}`, ...args);
    }

    getPrefix(color, label) {
        const chalkColor = this.options.bg
            ? chalk[`bg${color[0].toUpperCase()}${color.slice(1)}`].white
            : chalk[color];
        return chalkColor(label.padEnd(9));
    }

    clearConsole(title) {
        if (process.stdout.isTTY) {
            const blank = '\n'.repeat(process.stdout.rows);
            console.log(blank);
            readline.cursorTo(process.stdout, 0, 0);
            readline.clearScreenDown(process.stdout);
            if (title) {
                console.log(title);
            }
        }
    }
}

module.exports = new Logger();
