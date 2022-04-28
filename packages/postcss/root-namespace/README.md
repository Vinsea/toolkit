
# `postcss-root-namespace`
可以在所有选择器上加共同的选择器。

使用之前：
```css
.vv-button,
.vv-link{
    color: red;
}
```
配置一个选择器 `.fd-common-btn` 之后：
```css
.fd-common-btn .vv-button,
.fd-common-btn .vv-link{
    color: red;
}
```
[查看更多测试用例](../__tests__/root-namespace.test.js)

## Usage
安装
```sh
npm i @vinsea/postcss -D
```

### vue cli2
`build/utils.js`：
```js
const {postcssNamespace} = require('@vinsea/postcss');

exports.cssLoaders = function (options) 

  // ... 省略其他 ...

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap,
      postcssOptions: {
        plugins: [
            postcssNamespace({
                rootClassName: '.fd-common-root-class'
            })
        ]
      }
    }
  }

  // ... 省略其他 ...

}
```

### vue cli3
`vue.config.js` ：

```js
const postcssNamespace = require('@vinsea/postcss-root-namespace');

module.exports = {

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcssNamespace({
            rootClassName: '.fd-common-root-class'
          })
        ]
      }
    }
  }
};
```

### 属性

属性名            | 类型  | 默认值  | 说明（下方有示例）
-----------------|------|--------|---------------
`rootClassName`  |string|无      |要设置的选择器值
`includeonlyPath`|array |无      |只对设置的文件生效
`excludePath`    |array |无      |要排除的文件
`excludeSelector`|array |无      |要排除的选择器

示例：

#### `rootClassName`
配置
```js
postcssNamespace({
    rootClassName: '.fd-common-root-class'
})
```
之前
```css
.vv-button {
    color: red;
}
.fd-button {
    color: red;
}
```
之后
```css
.fd-common-root-class .vv-button {
    color: red;
}
.fd-common-root-class .fd-button {
    color: red;
}
```

#### `includeonlyPath`

设置只想用于处理选择器的文件路径，假如有这么一个ui库`@vinsea/wis-ui`, 那么：

配置
```js
postcssNamespace({
    rootClassName: '.fd-common-root-class',
    includeonlyPath: ['@vinsea/wis-ui/dist/styles/wis-ui.css']
    // 等同于下面这些写法，因为程序中是通过 includeonlyPath 做模糊匹配
    // includeonlyPath: ['wis-ui/dist/styles/wis-ui.css']
    // includeonlyPath: ['dist/styles/wis-ui.css']
    // includeonlyPath: ['styles/wis-ui.css']
    // includeonlyPath: ['wis-ui.css']
})
```
之前
```css
.vv-button {
    color: red;
}
.fd-button {
    color: red;
}
```
之后，只有在`wis-ui.css`文件中的选择器会被修改
```css
.fd-common-root-class .vv-button {
    color: red;
}
.fd-button {
    color: red;
}
```

#### `excludePath`
和 `includeonlyPath` 相反

配置

```js
postcssNamespace({
    rootClassName: '.fd-common-root-class',
    excludePath: ['@vinsea/wis-ui/dist/styles/wis-ui.css']
    // 等同于下面这些写法，因为程序中是通过 excludePath 做模糊匹配
    // includeonlyPath: ['wis-ui/dist/styles/wis-ui.css']
    // includeonlyPath: ['dist/styles/wis-ui.css']
    // includeonlyPath: ['styles/wis-ui.css']
    // includeonlyPath: ['wis-ui.css']
})
```
之前
```css
.vv-button {
    color: red;
}
.fd-button {
    color: red;
}
```
之后，在`wis-ui.css`文件中的选择器不会被修改
```css
.vv-button {
    color: red;
}
.fd-common-root-class .fd-button {
    color: red;
}
```

#### `excludeSelector`

排除不想处理的选择器

配置

```js
postcssNamespace({
    rootClassName: '.fd-common-root-class',
    excludeSelector: ['.vv-button', '.vv-link']
})
```
之前
```css
.vv-button {
    color: red;
}

.vv-link,
.fd-button {
    color: red;
}
```
之后，`.vv-button`和 `.vv-link` 不会被修改
```css
.vv-button {
    color: red;
}

.vv-link,
.fd-common-root-class .fd-button {
    color: red;
}
```