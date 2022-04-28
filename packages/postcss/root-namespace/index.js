

const postcssVersion = Number(require('postcss/package.json').version.split('.')[0]);
const chalk = require('chalk');

// 默认排除的选择器
const skipSelector = ['body', 'html'];
// 参数对象
const options = {
    rootClassName: null,
    includeonlyPath: null,
    excludePath: null,
    excludeSelector: null
};

/**
 * 初始化配置
 * @param {object} opts 参数对象
 * @returns {undefined}
 */
function initOpt(opts) {
    Object.keys(options).forEach(key => {
        options[key] = opts[key];
    });
    // Object.assign(options, opts);
    if (options.includeonlyPath) {
        options.excludePath = [];
    }
    // console.log(options);
}

/**
 * @param {string} selector 选择器
 * @returns {boolean} 是否跳过处理
 */
function checkSelectorSkip(selector) {
    if (skipSelector.includes(selector)) {
        return true;
    }
    return options.excludeSelector && options.excludeSelector.some(v => v === selector);
}

/**
 * @param {object} root postcss根对象
 * @returns {boolean} 是否跳过处理
 */
function getSoucePath(root) {
    const filepath = root.source.input.from;
    return filepath || '';
}

/**
 * @param {object} root postcss根对象
 * @returns {boolean} 是否跳过处理
 */
function isExclude(root) {
    const filepath = getSoucePath(root);
    if (!filepath || !options.excludePath) {
        return false;
    }
    return options.excludePath.some((v) => filepath.includes(v));
}

/**
 * @param {object} root postcss根对象
 * @returns {boolean} 是否处理
 */
function isInclude(root) {
    const filepath = getSoucePath(root);
    if (!filepath || !options.includeonlyPath) {
        return false;
    }
    return options.includeonlyPath.some((v) => filepath.includes(v));
}

/**
 * 处理选择器
 * @param {object} root postcss根对象
 * @returns {undefined}
 */
function handleWalk(root) {
    root.walk(node => {
        const selectorArr = (node.selector || '').split(',');
        node.selector = selectorArr.map((selector) => {
            if (checkSelectorSkip(selector)) {
                return selector;
            }
            if (selector.charAt(0) === '.') {
                return `${options.rootClassName} ${selector}`;
            }
            return selector;
        }).join(',');
    });
}

module.exports = (opts = {}) => {
    const PLUGIN_NAME = 'postcss-root-namespace';

    if (postcssVersion < 8) {
        console.log(`此组件最低要求 postcss >= 8.0.0，请使用${chalk.white.bgRed('@vinsea/postcss 0.*.*')}版本`);
        return { postcssPlugin: PLUGIN_NAME };
    }

    initOpt(opts);

    return {
        postcssPlugin: PLUGIN_NAME,
        Once(root) {
            if (!options.rootClassName || isExclude(root)) {
                return;
            }

            if (options.includeonlyPath) {
                if (isInclude(root)) {
                    handleWalk(root);
                }
            } else {
                handleWalk(root);
            }
        }
    };
};

// It allows PostCSS to distinguish between require('plugin') and require('plugin')(opts) end-user calls.
module.exports.postcss = true;
