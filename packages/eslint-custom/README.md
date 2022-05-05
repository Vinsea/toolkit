# eslint-plugin-custom

## 安装 Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint -D
```

## 使用 Usage
```
$ npm i @vinsea/eslint-plugin-custom -D
```

```js
module.exports = {
    plugins: ['@vinsea/custom'],
    rules: {
        '@vinsea/custom/object-colon-spacing': 1
    }
};
```

## 规则集 Supported Rules

1. 冒号后面需要加一个空格; A space is required after the colon; [details](./docs/rules/object-colon-spacing.md)
1. todo






