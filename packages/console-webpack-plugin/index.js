const chalk = require('chalk');
const figlet = require('figlet');
const log = console.log;

/**
 * @author Vinsea
 * @description webpack执行结束时在控制台打印指定内容
 */
module.exports = class ConsoleWebpackPlugin {
    constructor(output) {
        this.output = output || [];
    }

    /**
     * apply is called by the webpack main compiler during the start phase
     * @param {object} compiler compiler
     * @returns {undefined}
     */
    apply(compiler) {
        const onDone = (stats, callback) => {
            this.output.forEach((item) => {
                if (!item.text) {
                    return;
                }
                if (item.type === 'title') {
                    this.consoleTitle(item);
                } else if (item.type === 'info') {
                    this.consoleInfo(item);
                } else {
                    this.consoleLog(item);
                }
            });
            if (callback) {
                callback();
            }
        };
        if (compiler.hooks) {
            // webpack 4
            compiler.hooks.done.tapAsync(this.constructor.name, onDone);
        } else {
            // webpack < 4
            compiler.plugin('done', onDone);
        }
    }

    /**
     * 输出大标题（使用figlet库）
     * @param {object} textObj 文本对象
     * @returns {undefined}
     */
    consoleTitle(textObj) {
        const opt = Object.assign({ horizontalLayout: 'full' }, textObj.options);
        log(`\n${chalk[textObj.color || 'greenBright'](figlet.textSync(textObj.text, opt))}\n`);
    }

    /**
     * 输出信息
     * @param {object} textObj 文本对象
     * @returns {undefined}
     */
    consoleInfo(textObj) {
        log(chalk.bgBlue.black(' INFO '), chalk[textObj.color || 'white'](textObj.text));
    }

    /**
     * 输出日志
     * @param {object} textObj 文本对象
     * @returns {undefined}
     */
    consoleLog(textObj) {
        log(chalk.bgBlackBright.white.dim(' LOG  '), chalk[textObj.color || 'white'](textObj.text));
    }
};
