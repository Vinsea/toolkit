/* eslint-disable */

/**
 * @author Vinsea
 * @description postcss-root-namespace 的单元测试
 */
const postcss = require('postcss');
const rootNameSpace = require('../root-namespace');

async function run(input, output, opts = { }, initFrom) {
    const result = await postcss([rootNameSpace(opts)]).process(input, { from: initFrom });
    expect(result.css).toEqual(output);
    expect(result.warnings()).toHaveLength(0);
}

describe('rootClassName', () => {
    it('加class', () => {
        run('.vv-button{}', '.root-class-test .vv-button{}',
            { rootClassName: '.root-class-test' });
    });
    it('不加class', () => {
        run('.vv-button{}', '.vv-button{}',
            { rootClassName: '' });
    });
});

const testPath = '@vinsea/xx-ui/dist/xx-ui.css';

describe('includeonlyPath', () => {

    it('处理指定文件(匹配)', () => {
        run('.vv-button{}', '.root-class-test .vv-button{}',
            {
                rootClassName: '.root-class-test',
                includeonlyPath: [testPath]
            }, testPath);
    });
    it('处理指定文件(不匹配)', () => {
        run('.vv-button{}', '.vv-button{}',
            { 
                rootClassName: '.root-class-test',
                includeonlyPath: ['src/index.css']
            }, testPath);
    });
});

describe('excludePath', () => {
    it('排除文件(匹配)', () => {
        run('.vv-button{}', '.vv-button{}',
            {
                rootClassName: '.root-class-test',
                excludePath: [testPath]
            }, testPath);
    });
    it('排除文件(不匹配)', () => {
        run('.vv-button{}', '.root-class-test .vv-button{}',
            { 
                rootClassName: '.root-class-test',
                excludePath: ['src/index.css']
            }, testPath);
    });
});

describe('excludeSelector', () => {

    it('排除选择器(匹配)', () => {
        run('.vv-button{}', '.vv-button{}',
            {
                rootClassName: '.root-class-test',
                excludeSelector: ['.vv-button','.vv-icon']
            });
    });
    it('排除选择器(不匹配)', () => {
        run('.vv-button,.vv-icon{}', '.root-class-test .vv-button,.vv-icon{}',
            { 
                rootClassName: '.root-class-test',
                excludeSelector: ['.vv-icon']
            });
    });
});
