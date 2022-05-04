# eslint 规则

个人常用的一套比较严格的规则，可以直接用于实际项目中

## 使用

### 安装

```bash
npm install eslint @vinsea/eslint-config-rules -D
```

### 引用

#### 引用方式 1: 在`package.json`中加入`eslintConfig`字段

```json
{
    "eslintConfig": {
        "root": true,
        "extends": ["plugin:vue/essential", "@vinsea/rules"]
    }
}
```


#### 引入方式 2: 编辑根目录下的`.eslintrc.js`

1. 新建 `.eslintrc.js`，或通过 `./node_modules/.bin/eslint --init` 生成；
2. 在`extends`中添加：

```js
module.exports = {
    root: true,
    extends: ['plugin:vue/essential', '@vinsea/rules']
};
```

#### 配置文件优先级

如果同一个目录下有多个配置文件，ESLint 只会使用一个。[优先级顺序](https://eslint.bootcss.com/docs/user-guide/configuring#configuration-file-formats)如下：

-   .eslintrc.js
-   .eslintrc.yaml
-   .eslintrc.yml
-   .eslintrc.json
-   .eslintrc
-   package.json

### ⚠️ 注意

1. 如果是`vue`项目，必须使用`vue/essential`规则；

1. `@vinsea/rules`一定要放在数组最后；

1. `@vinsea/rules`不是单词漏写（全称`@vinsea/eslint-config-rules`）,是因为`eslint`在解析模块的时候会默认忽略 `eslint-config-` 这个前缀（还有`eslint-plugin-`）；

1. `prettier`只用来做代码风格，禁止使用`eslint-config-prettier`和`eslint-plugin-prettier`来禁用 eslint 规则；

1. 此插件已经包含`parser`配置：

```js
parserOptions: {
    parser: '@babel/eslint-parser',
}
```

如果你的项目中也有，可以删掉，统一用此插件的配置

### vs code 配置

查看 [vs code 统一配置](http://172.18.12.223:32155/project/#vscode-%E7%BC%96%E8%BE%91%E5%99%A8%E8%AE%BE%E7%BD%AE)

### `.eslintignore`

增加以下忽略配置

```
/build/
/config/
/dist/
/*.js
```