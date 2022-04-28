# stylelint 规则

## 使用

### 安装

依赖于`stylelint`：

```bash
npm i stylelint -D
```

安装规则配置文件

```bash
npm i @vinsea/stylelint-config-rules -D
```

### 引用

#### 引用方式 1: 在`package.json`中加入`stylelint`字段

```json
{
    // ...
    "stylelint": {
        "extends": "@vinsea/stylelint-config-rules"
    }
}
```

#### 引入方式 2: 编辑根目录下的`.stylelintrc.js`

```js
module.exports = require('@vinsea/stylelint-config-rules');

// 或者

module.exports = {
    extends: ['@vinsea/stylelint-config-rules']
};
```

### vs code 配置

TODO

## 规则详情

> 目前激活**23**条 html 规则

> 未激活**7**条

> updateTime: 20200412

> version: 1.0.0

| 序号 | 规则 | 规则描述 | 规则描述解释 | 严重级别 | 启用状态 |
| --- | --- | --- | --- | --- | --- |
| 1 | S4655 | "!important" should not be used on "keyframes" | 不应该在 keyframes 中使用！important | 主要 | true |
| 2 | S4662 | "at-rules" should be valid | @规则应该是有效的 | 主要 | true |
| 3 | S4650 | "calc" operands should be correctly spaced | 计算属性，操作数的间距应该是正确的 | 阻断 | true |
| 4 | S4651 | "linear-gradient" directions should be valid | 线性渐变的方向应该是有效的 | **阻断(变动)** | true |
| 5 | S4647 | Color definitions should be valid | 颜色定义应该是有效的 | 阻断 | true |
| 6 | S4667 | CSS files should not be empty | css 文件不应该为空 | **提示（变动）** | true |
| 7 | S4654 | CSS properties should be valid | css 属性应该是有效的 | 阻断 | true |
| 8 | S1128 | Duplicate imports should be removed | 重复引入应该被移除 | **主要(变动)** | true |
| 9 | S4648 | Duplicated font names should be removed | 重复字体名应该被移除 | 主要 | true |
| 10 | S4658 | Empty blocks should be removed | 空代码块应该被移除 | 主要 | true |
| 11 | S1116 | Extra semicolons should be removed | 多余的分号应该被移除 | **主要(变动)** | true |
| 12 | S4649 | Font declarations should contain at least one generic font family | 字体声明至少包含一个常规字体 | **提示(变动)** | true |
| 13 | S4661 | Media features should be valid | 媒体查询功能应该是有效的 | 主要 | true |
| 14 | S4663 | Multi-line comments should not be empty | 多行注释不应该为空 | 次要 | true |
| 15 | S4656 | Properties should not be duplicated | 属性不应该重复 | 主要 | true |
| 16 | S4659 | Pseudo-class selectors should be valid | 伪类选择器应有效 | 主要 | true |
| 17 | S4660 | Pseudo-element selectors should be valid | 伪元素选择器应该是有效的 | 主要 | true |
| 18 | S4670 | Selectors should be known | 选择器应该是可识别的 | 严重 | true |
| 19 | S4666 | Selectors should not be duplicated | 不应重复选择器 | 主要 | true |
| 20 | S4657 | Shorthand properties that override related longhand properties should be avoided | 应该避免用全属性覆盖特定属性 | 严重 | true |
| 21 | S4668 | Single line comment syntax should not be used | 不应使用单行注释语法 | 阻断 | true |
| 22 | S4652 | Strings should not contain new lines | 字符串不应包含新的行 | 阻断 | true |
| 23 | S4653 | Units should be valid | 单位应该有效 | 阻断 | true |
