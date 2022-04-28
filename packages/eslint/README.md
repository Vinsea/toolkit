# eslint 规则

## 使用

### 安装

依赖于`eslint`：

```bash
npm install eslint -D
```

安装本规则

```bash
npm install @vinsea/eslint-config-rules -D
```

### 引用

#### 引用方式 1: 在`package.json`中加入`eslintConfig`字段

```json
{
    // ...
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

2. `@vinsea/rules`一定要放在数组最后；

3. `@vinsea/rules`不是单词漏写（全称`@vinsea/eslint-config-rules`）,是因为`eslint`在解析模块的时候会默认忽略 `eslint-config-` 这个前缀（还有`eslint-plugin-`）；

4. 此规范为公司统一规范，禁止自己写`rules`来覆盖规范，如有异议，可以向团队技术负责任上报，最终汇总给`孙国兴`、`李文涛`

5. `prettier`只用来做代码风格，禁止使用`eslint-config-prettier`和`eslint-plugin-prettier`来禁用 eslint 规则；

6. 此插件已经包含`parser`配置：

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

## 贡献

[查看贡献指南](./CONTRIBUTING.md)

## 规则详情

> 目前已激活 eslint**157**条 html 规则
>
> eslint 未激活**140**条
>
> updateTime: 20200412
>
> version: 1.0.0

| 序号 | 规则 | 规则描述 | 规则描述解释 | 严重级别 | 启用状态 |
| --- | --- | --- | --- | --- | --- |
| 1 | angular-no-controller | - disallow use of controllers (according to the component first pattern) | 禁止使用控制器（根据组件第一模式） | 主要 | 开启 |
| 2 | angular-no-run-logic | - keep run functions clean and simple (y171) | 保持运行函数的干净和简单 | 严重 | 开启 |
| 3 | angular-json-functions | - use angular.fromJson and 'angular.toJson' instead of JSON.parse and JSON.stringify | 使用 angular.fromJson 和 'angular.toJson' 代替 JSON.parse 和 JSON.stringify | 主要 | 开启 |
| 4 | angular-on-destroy | Check for common misspelling \$on('destroy', ...). | 检查\$on('destroy', ...).的拼写错误 | 主要 | 开启 |
| 5 | no-tabs | disallow all tabs | 禁用 tab | 提示 | 开启 |
| 6 | angular-directive-restrict | disallow any other directive restrict than 'A' or 'E' (y074) | 禁止除“A”或“E”之外的任何其他指令 | 主要 | 开启 |
| 7 | no-array-constructor | disallow Array constructors | 禁用 Array 构造函数 | 次要 | 不匹配 |
| 8 | no-confusing-arrow | disallow arrow functions where they could be confused with comparisons | 禁止在可能与比较操作符相混淆的地方使用箭头函数 | 次要 | 关闭 |
| 9 | no-cond-assign | disallow assignment operators in conditional expressions | 禁止条件表达式中出现赋值操作符 | 主要 | 不匹配 |
| 10 | no-return-assign | disallow assignment operators in return statements | 禁止在 return 语句中使用赋值语句 | 严重 | 不匹配 |
| 11 | angular-controller-as | disallow assignments to \$scope in controllers (y031) | 禁止分配给控制器中的\$scope | 主要 | 开启 |
| 12 | no-global-assign | disallow assignments to native objects or read-only global variables | 禁止对原生对象或只读的全局对象进行赋值 | 严重 | 开启 |
| 13 | no-self-assign | disallow assignments where both sides are exactly the same | 禁止自我赋值 | 阻断 | 不匹配 |
| 14 | require-await | disallow async functions which have no await expression | 禁止使用不带 await 表达式的 async 函数 | 主要 | 开启 |
| 15 | no-await-in-loop | disallow await inside of loops | 禁止在循环中出现 await | 主要 | 开启 |
| 16 | no-bitwise | disallow bitwise operators | 禁用按位运算符 | 严重 | 关闭 |
| 17 | no-obj-calls | disallow calling global object properties as functions | 禁止把全局对象作为函数调用 | 主要 | 不匹配 |
| 18 | no-prototype-builtins | disallow calling some Object.prototype methods directly on objects | 禁止直接调用 Object.prototypes 的内置属性 | 主要 | 关闭 |
| 19 | no-catch-shadow | disallow catch clause parameters from shadowing variables in the outer scope | 禁止变量声明与外层作用域的变量同名 | 主要 | 不匹配 |
| 20 | no-restricted-properties | disallow certain properties on certain objects | 禁止使用对象的某些属性 | 主要 | 开启 |
| 21 | no-sequences | disallow comma operators | 禁用逗号操作符 | 主要 | 不匹配 |
| 22 | no-self-compare | disallow comparisons where both sides are exactly the same | 禁止自身比较 | 阻断 | 不匹配 |
| 23 | no-unexpected-multiline | disallow confusing multiline expressions | 禁止出现令人困惑的多行表达式 | 提示 | 不匹配 |
| 24 | no-constant-condition | disallow constant expressions in conditions | 禁止在条件中使用常量表达式 | 主要 | 不匹配 |
| 25 | no-continue | disallow continue statements | 禁用 continue 语句 | 主要 | 关闭 |
| 26 | no-control-regex | disallow control characters in regular expressions | 禁止在正则表达式中使用控制字符 | 主要 | 不匹配 |
| 27 | no-unsafe-finally | disallow control flow statements in finally blocks | 禁止在 finally 语句块中出现控制流语句 | 严重 | 开启 |
| 28 | no-underscore-dangle | disallow dangling underscores in identifiers | 禁止标识符中有悬空下划线 | 次要 | 关闭 |
| 29 | no-delete-var | disallow deleting variables | 禁止删除变量 | 严重 | 不匹配 |
| 30 | angular-no-services | disallow DI of specified services for other angular components (\$http for controllers, filters and directives) | 翻译 | 主要 | 开启 |
| 31 | angular-rest-service | disallow different rest service and specify one of '$http', '$resource', 'Restangular' | 禁止使用不同的服务，使用'$http', '$resource', 'Restangular'其中一种 | 主要 | 开启 |
| 32 | no-div-regex | disallow division operators explicitly at the beginning of regular expressions | 禁止除法操作符显式的出现在正则表达式开始的位置 | 严重 | 不匹配 |
| 33 | no-dupe-args | disallow duplicate arguments in function definitions | 禁止 function 定义中出现重名参数 | 主要 | 不匹配 |
| 34 | no-duplicate-case | disallow duplicate case labels | 禁止出现重复的 case 标签 | 主要 | 不匹配 |
| 35 | no-dupe-class-members | disallow duplicate class members | 禁止类成员中出现重复的名称 | 主要 | 不匹配 |
| 36 | no-dupe-keys | disallow duplicate keys in object literals | 禁止对象字面量中出现重复的 key | 主要 | 不匹配 |
| 37 | no-duplicate-imports | disallow duplicate module imports | 禁止出现引入重复的模块 | 主要 | 不匹配 |
| 38 | no-else-return | disallow else blocks after return statements in if statements | 禁止 if 语句中 return 语句之后有 else 块 | 次要 | 不匹配 |
| 39 | no-empty | disallow empty block statements | 禁止出现空语句块 | 主要 | 不匹配 |
| 40 | no-empty-character-class | disallow empty character classes in regular expressions | 禁止在正则表达式中使用空字符集 | 严重 | 不匹配 |
| 41 | angular-empty-controller | disallow empty controllers | 禁止出现空的控制器 | 主要 | 开启 |
| 42 | no-empty-pattern | disallow empty destructuring patterns | 禁止使用空解构模式 | 主要 | 不匹配 |
| 43 | no-empty-function | disallow empty functions | 禁止出现空函数 | 主要 | 不匹配 |
| 44 | no-extend-native | disallow extending native types | 禁止扩展原生类型 | 严重 | 不匹配 |
| 45 | no-fallthrough | disallow fallthrough of case statements | 禁止 case 语句落空 | 严重 | 不匹配 |
| 46 | no-loop-func | disallow function declarations and expressions inside loop statements | 禁止在循环语句中出现包含不安全引用的函数声明 | 主要 | 不匹配 |
| 47 | no-shadow-restricted-names | disallow identifiers from shadowing restricted names | 禁止将标识符定义为受限的名字 | 严重 | 不匹配 |
| 48 | no-lonely-if | disallow if statements as the only statement in else blocks | 禁止 if 作为唯一的语句出现在 else 语句中 | 次要 | 不匹配 |
| 49 | no-undef-init | disallow initializing variables to undefined | 禁止将变量初始化为 undefined | 主要 | 不匹配 |
| 50 | no-inline-comments | disallow inline comments after code | 禁止在代码后使用内联注释 | 主要 | 不匹配 |
| 51 | no-invalid-regexp | disallow invalid regular expression strings in RegExp constructors | 禁止 RegExp 构造函数中存在无效的正则表达式字符串 | 严重 | 不匹配 |
| 52 | no-irregular-whitespace | disallow irregular whitespace outside of strings and comments | 禁止不规则的空白 | 提示 | 不匹配 |
| 53 | no-script-url | disallow javascript: urls | 禁止使用 javascript: url | 主要 | 关闭 |
| 54 | no-labels | disallow labeled statements | 禁用标签语句 | 主要 | 不匹配 |
| 55 | no-label-var | disallow labels that share a name with a variable | 不允许标签与变量同名 | 主要 | 不匹配 |
| 56 | no-floating-decimal | disallow leading or trailing decimal points in numeric literals | 禁止数字字面量中使用前导和末尾小数点 | 主要 | 不匹配 |
| 57 | no-case-declarations | disallow lexical declarations in case clauses | 不允许在 case 子句中使用词法声明 | 主要 | 不匹配 |
| 58 | no-magic-numbers | disallow magic numbers | 禁用魔术数字 | 主要 | 不匹配 |
| 59 | no-mixed-operators | disallow mixed binary operators | 禁止混合使用不同的操作符 | 主要 | 关闭 |
| 60 | no-mixed-spaces-and-tabs | disallow mixed spaces and tabs for indentation | 禁止空格和 tab 的混合缩进 | 提示 | 不匹配 |
| 61 | no-multi-str | disallow multiline strings | 禁止使用多行字符串 | 提示 | 不匹配 |
| 62 | no-multiple-empty-lines | disallow multiple empty lines | 禁止出现多行空行 | 提示 | 不匹配 |
| 63 | no-multi-spaces | disallow multiple spaces | 禁止使用多个空格 | 提示 | 不匹配 |
| 64 | no-regex-spaces | disallow multiple spaces in regular expressions | 禁止正则表达式字面量中出现多个空格 | 主要 | 不匹配 |
| 65 | no-negated-condition | disallow negated conditions | 禁用否定的表达式 | 次要 | 关闭 |
| 66 | no-unsafe-negation | disallow negating the left operand of relational operators | 禁止对关系运算符的左操作数使用否定操作符 | 主要 | 开启 |
| 67 | no-nested-ternary | disallow nested ternary expressions | 禁用嵌套的三元表达式 | 次要 | 关闭 |
| 68 | no-new | disallow new operators outside of assignments or comparisons | 禁止使用 new 以避免产生副作用 | 次要 | 不匹配 |
| 69 | no-new-require | disallow new operators with calls to require | 禁止调用 require 时使用 new 操作符 | 主要 | 不匹配 |
| 70 | no-new-func | disallow new operators with the Function object | 禁止对 Function 对象使用 new 操作符 | 主要 | 不匹配 |
| 71 | no-new-wrappers | disallow new operators with the String, Number, and Boolean objects | 禁止对 String，Number 和 Boolean 使用 new 操作符 | 主要 | 不匹配 |
| 72 | no-new-symbol | disallow new operators with the Symbol object | 禁止 Symbolnew 操作符和 new 一起使用 | 次要 | 不匹配 |
| 73 | no-eq-null | disallow null comparisons without type-checking operators | 禁止在没有类型检查操作符的情况下与 null 进行比较 | 主要 | 不匹配 |
| 74 | no-new-object | disallow Object constructors | 禁用 Object 的构造函数 | 主要 | 不匹配 |
| 75 | no-octal-escape | disallow octal escape sequences in string literals | 禁止在字符串中使用八进制转义序列 | 严重 | 不匹配 |
| 76 | no-octal | disallow octal literals | 禁用八进制字面量 | 严重 | 不匹配 |
| 77 | prefer-numeric-literals | disallow parseInt() in favor of binary, octal, and hexadecimal literals | 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量 | 次要 | 开启 |
| 78 | no-class-assign | disallow reassigning class members | 禁止修改类声明的变量 | 次要 | 不匹配 |
| 79 | no-const-assign | disallow reassigning const variables | 禁止修改 const 声明的变量 | 阻断 | 不匹配 |
| 80 | no-ex-assign | disallow reassigning exceptions in catch clauses | 禁止对 catch 子句的参数重新赋值 | 严重 | 不匹配 |
| 81 | no-func-assign | disallow reassigning function declarations | 禁止对 function 声明重新赋值 | 次要 | 不匹配 |
| 82 | no-param-reassign | disallow reassigning function parameters | 禁止对 function 的参数进行重新赋值 | 严重 | 不匹配 |
| 83 | no-useless-return | disallow redundant return statements | 禁止多余的 return 语句 | 主要 | 开启 |
| 84 | no-useless-rename | disallow renaming import, export, and destructured assignments to the same name | 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字 | 严重 | 开启 |
| 85 | no-mixed-requires | disallow require calls to be mixed with regular variable declarations | 禁止混合常规变量声明和 require 调用 | 主要 | 关闭 |
| 86 | no-implicit-coercion | disallow shorthand type conversions | 禁止使用短符号进行类型转换 | 主要 | 不匹配 |
| 87 | no-sparse-arrays | disallow sparse arrays | 禁用稀疏数组 | 次要 | 不匹配 |
| 88 | no-restricted-globals | disallow specified global variables | 禁用特定的全局变量 | 严重 | 不匹配 |
| 89 | id-blacklist | disallow specified identifiers | 禁用指定的标识符 | 次要 | 关闭 |
| 90 | no-restricted-imports | disallow specified modules when loaded by import | 禁止使用指定的 import 加载的模块 | 严重 | 关闭 |
| 91 | no-restricted-modules | disallow specified modules when loaded by require | 禁用通过 require 加载的指定模块 | 阻断 | 关闭 |
| 92 | no-restricted-syntax | disallow specified syntax | 禁用特定的语法 | 次要 | 关闭 |
| 93 | no-warning-comments | disallow specified warning terms in comments | 禁止在注释中使用特定的警告术语 | 主要 | 不匹配 |
| 94 | no-path-concat | disallow string concatenation with **dirname and **filename | 禁止对 **dirname 和 **filename 进行字符串连接 | 主要 | 关闭 |
| 95 | no-sync | disallow synchronous methods | 禁用同步方法 | 主要 | 关闭 |
| 96 | no-template-curly-in-string | disallow template literal placeholder syntax in regular strings | 禁止在常规字符串中出现模板字面量占位符语法 | 主要 | 开启 |
| 97 | no-ternary | disallow ternary operators | 禁用三元操作符 | 次要 | 关闭 |
| 98 | no-unneeded-ternary | disallow ternary operators when simpler alternatives exist | 禁止可以在有更简单的可替代的表达式时使用三元操作符 | 次要 | 不匹配 |
| 99 | angular-no-http-callback | disallow the \$http methods success() and error() | 禁止使用\$http 方法 success（）和 error（）回调 | 严重 | 开启 |
| 100 | angular-no-directive-replace | disallow the deprecated directive replace property | 禁止使用不推荐的指令替换属性 | 严重 | 开启 |
| -- | ---- | ---- | ----- | ----- | ------ |
| 101 | no-plusplus | disallow the unary operators ++ and -- | 禁用一元操作符 ++ 和 -- | 次要 | 关闭 |
| 102 | no-alert | disallow the use of alert, confirm, and prompt | 禁用 alert、confirm 和 prompt | 主要 | 关闭 |
| 103 | no-caller | disallow the use of arguments.caller or arguments.callee | 禁用 arguments.caller 或 arguments.callee | 主要 | 开启 |
| 104 | no-console | disallow the use of console | 禁用 console | 主要 | 开启 |
| 105 | no-debugger | disallow the use of debugger | 禁用 debugger | 严重 | 开启 |
| 106 | no-eval | disallow the use of eval() | 禁用 eval() | 严重 | 开启 |
| 107 | no-implied-eval | disallow the use of eval()-like methods | 禁用类似 eval() 的方法 | 严重 | 开启 |
| 108 | angular-no-inline-template | disallow the use of inline templates | 禁用使用内联模板 | 严重 | 不匹配 |
| 109 | no-process-env | disallow the use of process.env | 禁用 process.env | 主要 | 关闭 |
| 110 | no-process-exit | disallow the use of process.exit() | 禁用 process.exit() | 阻断 | 关闭 |
| 111 | no-iterator | disallow the use of the **iterator** property | 禁用 iterator 属性 | 主要 | 开启 |
| 112 | no-proto | disallow the use of the **proto** property | 禁用 proto 属性 | 主要 | 开启 |
| 113 | no-undef | disallow the use of undeclared variables unless mentioned in /_global _/ comments | 禁用未声明的变量，除非它们在 /_global _/ 注释中被提到 | 主要 | 开启 |
| 114 | no-undefined | disallow the use of undefined as an identifier | 禁止将 undefined 作为标识符 | 主要 | 开启 |
| 115 | no-use-before-define | disallow the use of variables before they are defined | 禁止在变量定义之前使用它们 | 主要 | 开启 |
| 116 | no-invalid-this | disallow this keywords outside of classes or class-like objects | 禁止在类或类对象之外使用 this 关键字 | 主要 | 开启 |
| 117 | no-this-before-super | disallow this/super before calling super() in constructors | 禁止在构造函数调用 super()之前使用 this/super | 次要 | 开启 |
| 118 | no-throw-literal | disallow throwing literals as exceptions | 禁止抛出异常字面量 | 阻断 | 开启 |
| 119 | angular-module-setter | disallow to assign modules to variables (linked to module-getter (y021) | 禁用将模块分配给变量(链接到 module-getter (y021)) | 严重 | 不匹配 |
| 120 | angular-module-getter | disallow to reference modules with variables and require to use the getter syntax instead angular.module('myModule') (y022) | 禁用引用带有变量的模块，要求使用 getter 语法代替 angular.module('myModule') (y022) | 严重 | 不匹配 |
| 121 | angular-no-jquery-angularelement | disallow to wrap angular.element objects with jQuery or \$ | 禁用用 jQuery 或\$包装 angular.element 对象 | 主要 | 不匹配 |
| 122 | no-trailing-spaces | disallow trailing whitespace at the end of lines | 禁用行尾空白 | 提示 | 开启 |
| 123 | no-unmodified-loop-condition | disallow unmodified loop conditions | 禁用一成不变的循环条件 | 严重 | 开启 |
| 124 | no-extra-boolean-cast | disallow unnecessary boolean casts | 禁止不必要的布尔类型转换 | 主要 | 开启 |
| 125 | no-extra-bind | disallow unnecessary calls to .bind() | 禁止不必要的函数绑定 | 主要 | 开启 |
| 126 | no-useless-call | disallow unnecessary calls to .call() and .apply() | 禁用不必要的 .call() 和 .apply() | 主要 | 开启 |
| 127 | no-useless-computed-key | disallow unnecessary computed property keys in object literals | 禁止在对象中使用不必要的计算属性 | 次要 | 关闭 |
| 128 | no-useless-concat | disallow unnecessary concatenation of literals or template literals | 禁止没有必要的字符拼接 | 次要 | 开启 |
| 129 | no-useless-constructor | disallow unnecessary constructors | 禁用不必要的构造函数 | 次要 | 不匹配 |
| 130 | no-useless-escape | disallow unnecessary escape characters | 禁用不必要的转义 | 次要 | 开启 |
| 131 | no-extra-label | disallow unnecessary labels | 禁用不必要的标签 | 主要 | 关闭 |
| 132 | no-lone-blocks | disallow unnecessary nested blocks | 禁用不必要的嵌套块 | 主要 | 开启 |
| 133 | no-extra-parens | disallow unnecessary parentheses | 禁用不必要的括号 | 次要 | 开启 |
| 134 | no-return-await | disallow unnecessary return await | 禁用不必要的 return await | 次要 | 不匹配 |
| 135 | no-extra-semi | disallow unnecessary semicolons | 禁用不必要的分号 | 次要 | 开启 |
| 136 | no-unreachable | disallow unreachable code after return, throw, continue, and break statements | 禁止在 return、throw、continue 和 break 语句后出现不可达代码 | 严重 | 开启 |
| 137 | angular-di-unused | disallow unused DI parameters | 禁止未使用过的变量 | 主要 | 不匹配 |
| 138 | no-unused-expressions | disallow unused expressions | 禁止未使用过的表达式 | 严重 | 开启 |
| 139 | no-unused-labels | disallow unused labels | 禁止未使用过的标签 | 主要 | 开启 |
| 140 | no-unused-vars | disallow unused variables | 禁止未使用过的变量 | 主要 | 开启 |
| 141 | no-multi-assign | disallow use of chained assignment expressions | 禁止连续赋值 | 次要 | 不匹配 |
| 142 | angular-no-private-call | Disallow use of internal angular properties prefixed with \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\$\$ | 禁止在内部 angular 属性使用 \$\$ 前缀 | 严重 | 不匹配 |
| 143 | no-implicit-globals | disallow variable and function declarations in the global scope | 禁止在全局范围使用变量和函数声明 | 主要 | 开启 |
| 144 | no-shadow | disallow variable declarations from shadowing variables declared in the outer scope | 禁止变量声明覆盖外层作用域的变量 | 主要 | 开启 |
| 145 | no-inner-declarations | disallow variable or function declarations in nested blocks | 禁止在嵌套的语句块中出现变量或 function 声明 | 次要 | 开启 |
| 146 | no-redeclare | disallow variable redeclaration | 禁止重新声明变量 | 严重 | 开启 |
| 147 | no-void | disallow void operators | 禁止使用 void 操作符 | 主要 | 开启 |
| 148 | no-whitespace-before-property | disallow whitespace before properties | 禁止属性前有空白 | 提示 | 开启 |
| 149 | no-with | disallow with statements | 禁用 with 语句 | 次要 | 开启 |
| 150 | complexity | enforce a maximum cyclomatic complexity allowed in a program | 强制限制圈复杂度 | 主要 | 开启 |
| 151 | max-depth | enforce a maximum depth that blocks can be nested | 强制块语句的最大可嵌套深度 | 主要 | 关闭 |
| 152 | max-nested-callbacks | enforce a maximum depth that callbacks can be nested | 强制回调函数最大嵌套深度 | 次要 | 开启 |
| 153 | max-len | enforce a maximum line length | 强制行的最大长度 | 次要 | 开启 |
| 154 | max-lines | enforce a maximum number of lines per file | 强制文件的最大行数 | 主要 | 关闭 |
| 155 | max-params | enforce a maximum number of parameters in function definitions | 强制函数定义最大参数个数 | 主要 | 关闭 |
| 156 | max-statements | enforce a maximum number of statements allowed in function blocks | 强制函数块中的语句的最大数量 | 次要 | 关闭 |
| 157 | max-statements-per-line | enforce a maximum number of statements allowed per line | 强制每一行中所允许的最大语句数量 | 次要 | 开启 |
| 158 | camelcase | enforce camelcase naming convention | 强制驼峰命名规则 | 次要 | 开启 |
| 159 | valid-typeof | enforce comparing typeof expressions against valid strings | 强制 typeof 表达式与有效的字符串进行比较 | 主要 | 开启 |
| 160 | curly | enforce consistent brace style for all control statements | 强制所有控制语句使用一致的大括号样式 | 提示 | 开启 |
| 161 | brace-style | enforce consistent brace style for blocks | 强制块使用一致的大括号样式 | 提示 | 开启 |
| 162 | comma-style | enforce consistent comma style | 强制使用一致的逗号样式 | 提示 | 开启 |
| 163 | indent | enforce consistent indentation | 强制使用一致的缩进 | 次要 | 开启 |
| 164 | object-curly-newline | enforce consistent line breaks inside braces | 强制在花括号内使用一致的换行符 | 提示 | 开启 |
| 165 | linebreak-style | enforce consistent linebreak style | 强制使用一致的换行符风格 | 提示 | 关闭 |
| 166 | operator-linebreak | enforce consistent linebreak style for operators | 强制操作符使用一致的换行符风格 | 提示 | 开启 |
| 167 | consistent-this | enforce consistent naming when capturing the current execution context | 强制捕获当前执行上下文时使用一致的命名 | 次要 | 开启 |
| 168 | dot-location | enforce consistent newlines before and after dots | 强制在点号之前或之后换行 | 提示 | 开启 |
| 169 | spaced-comment | enforce consistent spacing after the // or /\* in a comment | 强制在注释前有空白 (space 或 tab) | 提示 | 开启 |
| 170 | generator-star-spacing | enforce consistent spacing around \* operators in generator functions | 强制 generator 函数中 \* 号周围有空格 | 次要 | 开启 |
| 171 | comma-spacing | enforce consistent spacing before and after commas | 强制在逗号周围使用空格 | 提示 | 开启 |
| 172 | keyword-spacing | enforce consistent spacing before and after keywords | 强制在关键字周围使用空格 | 提示 | 开启 |
| 173 | semi-spacing | enforce consistent spacing before and after semicolons | 强制在分号周围使用空格 | 提示 | 开启 |
| 174 | arrow-spacing | enforce consistent spacing before and after the arrow in arrow functions | 强制在箭头函数的箭头周围使用空格 | 提示 | 开启 |
| 175 | space-before-blocks | enforce consistent spacing before blocks | 强制语句块之前的空格 | 提示 | 开启 |
| 176 | space-before-function-paren | enforce consistent spacing before function definition opening parenthesis | 强制函数圆括号之前有一个空格 | 提示 | 开启 |
| 177 | space-unary-ops | enforce consistent spacing before or after unary operators | 强制在一元操作符之前或之后存在空格 | 提示 | 关闭 |
| 178 | key-spacing | enforce consistent spacing between keys and values in object literal properties | 强制在对象字面量的键和值之间使用一致的空格 | 提示 | 关闭 |
| 179 | array-bracket-spacing | enforce consistent spacing inside array brackets | 禁止或强制在括号内使用空格 | 提示 | 开启 |
| 180 | object-curly-spacing | enforce consistent spacing inside braces | 强制在花括号中使用一致的空格 | 提示 | 开启 |
| 181 | computed-property-spacing | enforce consistent spacing inside computed property brackets | 禁止或强制在计算属性中使用空格 | 提示 | 关闭 |
| 182 | space-in-parens | enforce consistent spacing inside parentheses | 强制函数圆括号之前有一个空格 | 提示 | 开启 |
| 183 | block-spacing | enforce consistent spacing inside single-line blocks | 强制单行块前后空格 | 提示 | 开启 |
| 184 | dot-notation | enforce dot notation whenever possible | 强制使用.表达式 | 提示 | 关闭 |
| 185 | accessor-pairs | enforce getter and setter pairs in objects | 强制 getter/setter 成对出现在对象中 | 次要 | 关闭 |
| 186 | id-length | enforce minimum and maximum identifier lengths | 强制标识符的最大和最小长度 | 次要 | 关闭 |
| 187 | multiline-ternary | enforce newlines between operands of ternary expressions | 强制在三元操作数中间换行 | 次要 | 不匹配 |
| 188 | capitalized-comments | enforce or disallow capitalization of the first letter of a comment | 强制或禁止对注释的第一个字母大写 | 提示 | 不匹配 |
| 189 | object-property-newline | enforce placing object properties on separate lines | 强制将对象的属性放在不同的行上 | 次要 | 开启 |
| 190 | line-comment-position | enforce position of line comments | 强制行注释的位置 | 提示 | 不匹配 |
| 191 | array-callback-return | enforce return statements in callbacks of array methods | 强制数组方法的回调函数中有 return 语句 | 次要 | 关闭 |
| 192 | sort-imports | enforce sorted import declarations within modules | 强制模块导入声明排序 | 主要 | 关闭 |
| 193 | rest-spread-spacing | enforce spacing between rest and spread operators and their expressions | 强制剩余和扩展运算符及其表达式之间有空格 | 次要 | 关闭 |
| 194 | class-methods-use-this | enforce that class methods utilize this | 强制在不用 this 时使用静态类方法 | 主要 | 不匹配 |
| 195 | quotes | enforce the consistent use of either backticks, double, or single quotes | 强制使用一致的反勾号、双引号或单引号 | 次要 | 开启 |
| 196 | jsx-quotes | enforce the consistent use of either double or single quotes in JSX attributes | 强制在 JSX 属性中使用一致的单引号或双引号 | 次要 | 开启 |
| 197 | func-style | enforce the consistent use of either function declarations or expressions | 强制 function 声明或表达式的一致性 | 次要 | 关闭 |
| 198 | radix | enforce the consistent use of the radix argument when using parseInt() | 强制在使用 parseInt()使用一致的基数参数 | 主要 | 开启 |
| 199 | block-scoped-var | enforce the use of variables within the scope they are defined | 强制把变量的使用限制在其定义的作用域范围内 | 主要 | 关闭 |
| 200 | valid-jsdoc | enforce valid JSDoc comments | 强制合法的 JSDoc 注释 | 提示 | 开启 |
| -- | ---- | ---- | ----- | ----- | ------ |
| 201 | one-var | enforce variables to be declared either together or separately in functions | 强制函数中的变量要么一起声明要么分开声明 | 次要 | 开启 |
| 202 | eslint-issue | EsLint issues that are not yet known to the plugin | 插件还不知道的 EsLint 问题 | 主要 | 关闭 |
| 203 | angular-component-limit | limit the number of angular components per file (y001) | 限制每个文件中 angular 组件的数量(y001) | 严重 | 关闭 |
| 204 | angular-on-watch | require $on and $watch deregistration callbacks to be saved in a variable | 要求$on和$watch 撤销回调保存在一个变量中 | 主要 | 关闭 |
| 205 | angular-di | require a consistent DI syntax | 需要一致的 DI 语法 | 主要 | 关闭 |
| 206 | angular-module-dependency-order | require a consistent order of module dependencies | 需要一致的模块依赖顺序 | 主要 | 开启 |
| 207 | newline-per-chained-call | require a newline after each call in a method chain | 要求方法链中每个调用都有一个换行符 | 次要 | 开启 |
| 208 | angular-one-dependency-per-line | require all DI parameters to be located in their own line | 要求所有 DI 参数位于它们自己的行中 | 主要 | 关闭 |
| 209 | newline-before-return | require an empty line before return statements | 在返回语句之前需要空行 | 次要 | 关闭 |
| 210 | angular-controller-as-vm | require and specify a capture variable for this in controllers (y032) | 在控制器(y032)中为此需要并指定一个捕获变量 | 主要 | 关闭 |
| 211 | angular-file-name | require and specify a consistent component name pattern (y120, y121) | 要求并指定一致的组件名称模式(y120, y121) | 次要 | 关闭 |
| 212 | angular-function-type | require and specify a consistent function style for components ('named' or 'anonymous') (y024) | 要求并为组件指定一致的函数样式('named'或'anonymous') (y024) | 主要 | 关闭 |
| 213 | angular-component-name | require and specify a prefix for all component names | 要求并为所有组件名称指定前缀 | 次要 | 关闭 |
| 214 | angular-constant-name | require and specify a prefix for all constant names (y125) | 要求并为所有常量名称指定前缀(y125) | 次要 | 关闭 |
| 215 | angular-controller-name | require and specify a prefix for all controller names (y123, y124) | 要求并为所有控制器名称指定前缀(y123, y124) | 次要 | 关闭 |
| 216 | angular-directive-name | require and specify a prefix for all directive names (y073, y126) | 要求并为所有指令名指定前缀(y073, y126) | 次要 | 关闭 |
| 217 | angular-factory-name | require and specify a prefix for all factory names (y125) | 要求并为所有工厂名称指定前缀(y125) | 次要 | 关闭 |
| 218 | angular-filter-name | require and specify a prefix for all filter names | 要求并为所有筛选器名称指定前缀 | 次要 | 关闭 |
| 219 | angular-module-name | require and specify a prefix for all module names (y127) | 要求并为所有模块名称指定前缀(y127) | 次要 | 关闭 |
| 220 | angular-provider-name | require and specify a prefix for all provider names (y125) | 要求并为所有提供程序名称指定前缀(y125) | 次要 | 关闭 |
| 221 | angular-service-name | require and specify a prefix for all service names (y125) | 要求并为所有服务名称指定前缀(y125) | 次要 | 关闭 |
| 222 | angular-value-name | require and specify a prefix for all value names (y125) | 要求并为所有值名指定前缀(y125) | 次要 | 关闭 |
| 223 | angular-watchers-execution | require and specify consistent use $scope.digest() or $scope.apply() | 要求并指定一致的使用$scope.digest()或$scope.apply() | 主要 | 关闭 |
| 224 | prefer-arrow-callback | require arrow functions as callbacks | 要求回调函数使用箭头函数 | 次要 | 关闭 |
| 225 | arrow-body-style | require braces around arrow function bodies | 要求箭头函数体使用大括号 | 次要 | 开启 |
| 226 | use-isnan | require calls to isNaN() when checking for NaN | 要求使用 `isNaN()` 检查 `NaN` | 主要 | 开启 |
| 227 | prefer-const | require const declarations for variables that are never reassigned after declared | 要求使用 `const` 声明那些声明后不再被修改的变量 | 严重 | 开启 |
| 228 | new-cap | require constructor names to begin with a capital letter | 要求构造函数首字母大写 | 主要 | 开启 |
| 229 | default-case | require default cases in switch statements | 要求 `switch` 语句中有 `default` 分支 | 主要 | 开启 |
| 230 | prefer-destructuring | require destructuring from arrays and/or objects | 优先使用数组和对象解构 | 次要 | 关闭 |
| 231 | angular-di-order | require DI parameters to be sorted alphabetically | 要求 DI 参数按字母顺序排序 | 主要 | 关闭 |
| 232 | lines-around-comment | require empty lines around comments | 要求在注释周围有空行 | 提示 | 开启 |
| 233 | handle-callback-err | require error handling in callbacks | 要求回调函数中有容错处理 | 严重 | 开启 |
| 234 | guard-for-in | require for-in loops to include an if statement | 要求 `for-in` 循环中有一个 `if` 语句 | 主要 | 关闭 |
| 235 | func-name-matching | require function names to match the name of the variable or property to which they are assigned | 要求函数名与赋值给它们的变量名或属性名相匹配 | 提示 | 关闭 |
| 236 | require-yield | require generator functions to contain yield | 要求 generator 函数内有 `yield` | 次要 | 关闭 |
| 237 | id-match | require identifiers to match a specified regular expression | 要求标识符匹配一个指定的正则表达式 | 次要 | 关闭 |
| 238 | require-jsdoc | require JSDoc comments | 需要 JSDoc 注释 | 次要 | 开启 |
| 239 | no-var | require let or const instead of var | 要求使用 `let` 或 `const` 而不是 `var` | 主要 | 开启 |
| 240 | sort-keys | require object keys to be sorted | 要求对象属性按序排列 | 次要 | 关闭 |
| 241 | yoda | require or disallow Yoda conditions | 要求或禁止 “Yoda” 条件 | 次要 | 开启 |
| 242 | newline-after-var | require or disallow an empty line after variable declarations | 在变量声明后需要或禁止空行 | 提示 | 关闭 |
| 243 | operator-assignment | require or disallow assignment operator shorthand where possible | 要求或禁止在可能的情况下使用简化的赋值操作符 | 次要 | 关闭 |
| 244 | init-declarations | require or disallow initialization in variable declarations | 要求或禁止 `var` 声明中的初始化 | 次要 | 关闭 |
| 245 | object-shorthand | require or disallow method and property shorthand syntax for object literals | 要求或禁止对象字面量中方法和属性使用简写语法 | 次要 | 关闭 |
| 246 | func-names | require or disallow named function expressions | 要求或禁止使用命名的 `function` 表达式 | 次要 | 关闭 |
| 247 | eol-last | require or disallow newline at the end of files | 要求或禁止文件末尾存在空行 | 主要 | 开启 |
| 248 | lines-around-directive | require or disallow newlines around directives | 要求或禁止围绕指令的换行 | 次要 | 关闭 |
| 249 | one-var-declaration-per-line | require or disallow newlines around variable declarations | 要求或禁止在变量声明周围换行 | 次要 | 开启 |
| 250 | padded-blocks | require or disallow padding within blocks | 要求或禁止块内填充 | 提示 | 开启 |
| 251 | semi | require or disallow semicolons instead of ASI | 要求或禁止使用分号代替 ASI | 提示 | 开启 |
| 252 | template-curly-spacing | require or disallow spacing around embedded expressions of template strings | 要求或禁止模板字符串中的嵌入表达式周围空格的使用 | 提示 | 开启 |
| 253 | yield-star-spacing | require or disallow spacing around the _ in yield_ expressions | 强制在 `yield*` 表达式中 `*` 周围使用空格 | 次要 | 开启 |
| 254 | func-call-spacing | require or disallow spacing between function identifiers and their invocations | 要求或禁止在函数标识符和其调用之间有空格 | 提示 | 关闭 |
| 255 | strict | require or disallow strict mode directives | 要求或禁止使用严格模式指令 | 次要 | 开启 |
| 256 | comma-dangle | require or disallow trailing commas | 要求或禁止末尾逗号 | 提示 | 不匹配 |
| 257 | unicode-bom | require or disallow Unicode byte order mark (BOM) | 要求或禁止 Unicode 字节顺序标记 (BOM) | 次要 | 关闭 |
| 258 | arrow-parens | require parentheses around arrow function arguments | 要求箭头函数的参数使用圆括号 | 次要 | 关闭 |
| 259 | wrap-iife | require parentheses around immediate function invocations | 要求 IIFE 使用括号括起来 | 次要 | 开启 |
| 260 | new-parens | require parentheses when invoking a constructor with no arguments | 强制或禁止调用无参构造函数时有圆括号 | 主要 | 开启 |
| 261 | wrap-regex | require parenthesis around regex literals | 要求正则表达式被括号括起来 | 次要 | 开启 |
| 262 | quote-props | require quotes around object literal property names | 要求对象字面量属性名称用引号括起来 | 次要 | 关闭 |
| 263 | global-require | require require() calls to be placed at top-level module scope | 要求 `require()` 出现在顶层模块作用域中 | 严重 | 开启 |
| 264 | prefer-rest-params | require rest parameters instead of arguments | 要求使用剩余参数而不是 `arguments` | 次要 | 关闭 |
| 265 | callback-return | require return statements after callbacks | 强制数组方法的回调函数中有 `return` 语句 | 主要 | 关闭 |
| 266 | consistent-return | require return statements to either always or never specify values | 要求 `return` 语句要么总是指定返回的值，要么不指定 | 主要 | 关闭 |
| 267 | space-infix-ops | require spacing around infix operators | 要求操作符周围有空格 | 提示 | 开启 |
| 268 | prefer-spread | require spread operators instead of .apply() | 要求使用扩展运算符而非 `.apply()` | 次要 | 关闭 |
| 269 | constructor-super | require super() calls in constructors | 要求在构造函数中有 `super()` 的调用 | 次要 | 关闭 |
| 270 | symbol-description | require symbol descriptions | 要求 symbol 描述 | 次要 | 关闭 |
| 271 | prefer-template | require template literals instead of string concatenation | 要求使用模板字面量而非字符串连接 | 主要 | 开启 |
| 272 | eqeqeq | require the use of === and !== | 要求使用 `===` 和 `!==` | 主要 | 开启 |
| 273 | angular-controller-as-route | require the use of controllerAs in routes or states (y031) | 要求在路由或状态中使用控制器(y031) | 主要 | 关闭 |
| 274 | angular-no-angular-mock | require to use angular.mock methods directly | 需要使用 angular。直接模拟方法 | 主要 | 关闭 |
| 275 | prefer-promise-reject-errors | require using Error objects as Promise rejection reasons | 要求使用 Error 对象作为 Promise 拒绝的原因 | 主要 | 关闭 |
| 276 | vars-on-top | require var declarations be placed at the top of their containing scope | 要求所有的 `var` 声明出现在它们所在的作用域顶部 | 主要 | 开启 |
| 277 | sort-vars | require variables within the same declaration block to be sorted | 要求同一个声明块中的变量按顺序排列 | 次要 | 关闭 |
| 278 | angular-dumb-inject | unittest inject functions should only consist of assignments from injected values to describe block variables | unittest inject 函数应该只包含注入值的赋值来描述块变量 | 主要 | 关闭 |
| 279 | angular-no-cookiestore | use $cookies instead of $cookieStore | 用$cookies代替$cookieStore | 严重 | 关闭 |
| 280 | angular-document-service | use \$document instead of document (y180) | 使用\$document 代替 document (y180) | 主要 | 关闭 |
| 281 | angular-interval-service | use \$interval instead of setInterval (y181) | 使用\$interval 代替 setInterval (y181) | 主要 | 关闭 |
| 282 | angular-deferred | use $q(function(resolve, reject){}) instead of $q.deferred | 使用$q(function(resolve, reject){})代替$q.deferred | 主要 | 关闭 |
| 283 | angular-timeout-service | use \$timeout instead of setTimeout (y181) | 使用\$timeout 代替 setTimeout (y181) | 主要 | 关闭 |
| 284 | angular-window-service | use \$window instead of window (y180) | 使用\$window 代替 window (y180) | 主要 | 关闭 |
| 285 | angular-angularelement | use angular.element instead of \$ or jQuery | 使用 angular.element 而不是\$或 jQuery | 主要 | 关闭 |
| 286 | angular-foreach | use angular.forEach instead of native Array.prototype.forEach | 使用 angular.forEach 而不是原生 Array.prototype.forEach | 主要 | 关闭 |
| 287 | angular-typecheck-array | use angular.isArray instead of typeof comparisons | 使用 angular.isArray 而不是 typeof 比较 | 主要 | 关闭 |
| 288 | angular-typecheck-date | use angular.isDate instead of typeof comparisons | 使用 angular.isDate 而不是 typeof 比较 | 主要 | 关闭 |
| 289 | angular-definedundefined | use angular.isDefined and angular.isUndefined instead of other undefined checks | 使用 angular.isDefined 和 angular.isUndefined，而不是其他未定义的检查 | 主要 | 关闭 |
| 290 | angular-typecheck-function | use angular.isFunction instead of typeof comparisons | 使用 angular.isFunction 而不是 typeof 比较 | 主要 | 关闭 |
| 291 | angular-typecheck-number | use angular.isNumber instead of typeof comparisons | 使用 angular.isNumber 而不是 typeof 比较 | 主要 | 关闭 |
| 292 | angular-typecheck-object | use angular.isObject instead of typeof comparisons | 使用 angular.isObject 而不是 typeof 比较 | 主要 | 关闭 |
| 293 | angular-typecheck-string | use angular.isString instead of typeof comparisons | 使用 angular.isString 而不是 typeof 比较 | 主要 | 关闭 |
| 294 | angular-no-service-method | use factory() instead of service() (y040) | 使用 factory()代替 service() (y040) | 主要 | 关闭 |
| 295 | angular-log | use the \$log service instead of the console methods | 使用\$log 服务而不是控制台方法 | 主要 | 关闭 |
| 296 | angular-prefer-component | Use the new api to build components | 使用新的 api 来构建组件 | 主要 | 关闭 |
