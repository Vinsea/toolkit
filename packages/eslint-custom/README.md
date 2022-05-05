# eslint-plugin-custom

自定义`eslint`规则

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i 

```

## Usage
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

## Supported Rules

1. 冒号后面需要加一个空格; A space is required after the colon;
1. todo






