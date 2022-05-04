/**
 * @fileoverview 字面量对象成员变量声明时，冒号和值之间需要有空格
 * @author Vinsea @see https://www.vinxea.com
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'layout',
        docs: {
            description: '对象属性冒号前后空格校验|Space check before and after the colon of object properties',
            category: 'Stylistic Issues',
            recommended: true,
            url: 'https://github.com/Vinsea/toolkit/blob/main/packages/eslint-custom/docs/rules/object-colon-spacing.md'
        },
        fixable: 'whitespace',
        messages: {
            expectedSpaceAfter: '冒号后应该有一个空格|A space is required after the colon',
            expectedOneSpaceAfter: '冒号后面应该只能有一个空格|There should only be one space after the colon',
            unexpectedSpaceBefore: '冒号前面不能有空格|There must be no space before the colon'
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * 检查当前节点的下一个节点是不是 冒号
         * @param {ASTNode} node 要检查的节点
         * @returns {boolean} 返回 `true` 如果是冒号
         */
        function isColonToken(node) {
            const firstToken = sourceCode.getFirstToken(node);
            let colonToken = null;
            if (firstToken) {
                colonToken = sourceCode.getTokenAfter(firstToken);
            }
            // console.log('colonToken', colonToken);
            return colonToken && colonToken.value === ':' && colonToken.type === 'Punctuator';
        }

        /**
         * 获取节点的下标位置信息
         * @param {ASTNode} node 节点
         * @returns {Object} 节点下标信息
         */
        function getColonTokenDiff(node) {
            const firstToken = sourceCode.getFirstToken(node);
            const colonToken = sourceCode.getFirstToken(node, 1);
            const colonNextToken = sourceCode.getFirstToken(node, 2);
            const lengthAfterColon = colonNextToken.range[0] - colonToken.range[1];
            const lengthBeforeColon = colonToken.range[0] - firstToken.range[1];

            return {
                // 冒号标示符对象
                colonToken,
                // 冒号后面空格长度
                lengthAfterColon,
                // 冒号前面空格长度
                lengthBeforeColon,
                // 第一个标识符的结束下标
                firstTokenRangEnd: firstToken.range[1],
                // 冒号后第一个标示符的开始下标
                colonTokenAfterRangStart: colonNextToken.range[0]
            };
        }

        return {
            Property(node) {
                if (!isColonToken(node)) {
                    return;
                }

                const {
                    colonToken, lengthAfterColon, colonTokenAfterRangStart
                } = getColonTokenDiff(node);

                if (lengthAfterColon === 1) {
                    return;
                }

                if (lengthAfterColon > 1) {
                    context.report({
                        node,
                        loc: colonToken.loc,
                        messageId: 'expectedOneSpaceAfter',
                        fix: (fixer) => fixer.replaceTextRange([colonToken.range[1], colonTokenAfterRangStart], ' ')
                    });
                    return;
                }

                context.report({
                    node,
                    loc: colonToken.loc,
                    messageId: 'expectedSpaceAfter',
                    // data: { bracket: sourceCode.getText(colonToken) },
                    fix: (fixer) => fixer.insertTextAfter(colonToken, ' ')
                });
            },

            'Property:exit'(node) {
                if (!isColonToken(node)) {
                    return;
                }

                const {
                    colonToken, lengthBeforeColon, firstTokenRangEnd
                } = getColonTokenDiff(node);

                if (lengthBeforeColon === 0) {
                    return;
                }

                context.report({
                    node,
                    loc: colonToken.loc,
                    messageId: 'unexpectedSpaceBefore',
                    // data: { bracket: sourceCode.getText(colonToken) },
                    fix: (fixer) => fixer.replaceTextRange([firstTokenRangEnd, colonToken.range[0]], '')
                });
            }

        };
    }
};
