
/**
 * @description spinner
 *              from https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-shared-utils/lib/spinner.js
 *              with some modifications & additions
 * @creationDate 2022-4-28 16:53:42
 */

const ora = require('ora');
const chalk = require('chalk');

const spinner = ora({
    // prefixText: 'vv',
    // spinner:'material',
    spinner: 'point',
    spinner1: {
        'interval': 120,
        'frames': [
            '▐|\\____________▌',
            '▐_|\\___________▌',
            '▐_V|\\__________▌',
            '▐_VI|\\_________▌',
            '▐_VIN|\\________▌',
            '▐_VINS|\\_______▌',
            '▐_VINSE|\\______▌',
            '▐_VINSEA|\\_____▌',
            '▐_VINSEA♥|\\____▌',
            '▐_VINSEA♥V|\\___▌',
            '▐_VINSEA♥VE|\\__▌',
            '▐_VINSEA♥VER|\\_▌',
            '▐_VINSEA♥VERA|\\▌',
            '▐_VINSEA♥VERA/|▌',
            '▐_VINSEA♥VER/|_▌',
            '▐_VINSEA♥VE/|__▌',
            '▐_VINSEA♥V/|___▌',
            '▐_VINSEA♥/|____▌',
            '▐_VINSEA/|_____▌',
            '▐_VINSE/|______▌',
            '▐_VINS/|_______▌',
            '▐_VIN/|________▌',
            '▐_VI/|_________▌',
            '▐_V/|__________▌',
            '▐_/|___________▌',
            '▐/|____________▌'
        ]
    },
    color: 'blue'
    // hideCursor: false
});
let lastMsg = null;
let isPaused = false;

exports.logWithSpinner = (symbol, msg) => {
    let msgTemp = msg;
    let symbolTemp = symbol;
    if (!msg) {
        msgTemp = symbol;
        symbolTemp = chalk.green('✔');
    }
    if (lastMsg) {
        spinner.stopAndPersist({
            symbol: lastMsg.symbol,
            text: lastMsg.text
        });
    }
    spinner.text = ` ${msgTemp}`;
    lastMsg = {
        symbol: `${symbolTemp} `,
        text: msgTemp
    };
    spinner.start();
};

exports.stopSpinner = (text) => {
    if (!spinner.isSpinning) {
        return;
    }

    if (lastMsg && text) {
        spinner.stopAndPersist({
            symbol: lastMsg.symbol,
            text: text
        });
    } else {
        spinner.stop();
    }
    lastMsg = null;
};

exports.pauseSpinner = () => {
    if (spinner.isSpinning) {
        spinner.stop();
        isPaused = true;
    }
};

exports.resumeSpinner = () => {
    if (isPaused) {
        spinner.start();
        isPaused = false;
    }
};

exports.failSpinner = (text) => {
    spinner.fail(text);
};
