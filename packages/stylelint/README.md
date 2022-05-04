# stylelint 规则

个人常用的一套样式规则，可以直接用于实际项目中

## 使用

### 安装

```bash
npm i stylelint @vinsea/stylelint-config-rules -D
```

### 引用

#### 引用方式 1: 在`package.json`中加入`stylelint`字段

```json
{
    "stylelint": {
        "extends": "@vinsea/stylelint-config-rules"
    }
}
```

#### 引入方式 2: 编辑根目录下的`.stylelintrc.js`

```js
module.exports = require('@vinsea/stylelint-config-rules');

// or

module.exports = {
    extends: ['@vinsea/stylelint-config-rules']
};
```

## 待办
[ ] 增加`less`和`sass`规则