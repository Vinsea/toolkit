# console-webpack-plugin

作用：在`webpack`执行结束时，将指定的文本输出到控制台


## 用法

### 安装

```bash
npm i @vinsea/console-webpack-plugin -D
```

### webpack
```js
plugins: [
    new ConsoleWebpackPlugin([
        { text: process.env.NODE_ENV, type: 'title' },
        { text: `gateway: ${YOUR_URL_CONFIG}`, type: 'info' },
     ]))
]
```

### vue cli3 项目
`vue.config.js`

```javascript
const ConsoleWebpackPlugin = require('@vinsea/console-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      // 要在dev环境或者prod环境输出，根据自己情况来定
      config.plugins.push(new ConsoleWebpackPlugin([ {YOUR_CONFIG} ]));
    }
  }
}
```

### vue cli2

**cli2内置`FriendlyErrorsPlugin`，可以直接修改`webpack`配置文件，不用这个插件**

`build/webpack.dev.conf.js`
```js
// Add FriendlyErrorsPlugin
devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
  compilationSuccessInfo: {
    messages: [
               `项目运行地址为: http://${devWebpackConfig.devServer.host}:${port} \n`,
               '当前启动的环境是： xxxxx'
               ],
    notes: [`当前网关为：xxxxx`]
  }
}))
```
如果用此插件：

`build/webpack.dev.conf.js`
```javascript
const ConsoleWebpackPlugin = require('@vinsea/console-webpack-plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
  // ...
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // ...
      // 不用 FriendlyErrorsPlugin
      // ...
      
      devWebpackConfig.plugins.push(new ConsoleWebpackPlugin([ 这里是数据 ]))
      resolve(devWebpackConfig)
    }
  })
})
```

或者 `build/webpack.prod.conf.js`
```js
const webpackConfig = merge(baseWebpackConfig, {
  // ...
})

webpackConfig.plugins.push(new ConsoleWebpackPlugin([ 这里是数据 ]))

module.exports = webpackConfig
```

## 参数
`ConsoleWebpackPlugin`构造函数需要传一个数组，数组中每一项代表每一行要输出的内容；

每一行内容的数据为一个对象`object`格式

| 参数    |  类型  | 是否必传 | 默认值 | 说明  |
| ------ | ------ |------- |------ |------ |
| text   | string |是      | 无     |要展示的文本                                            |
| type   | string |否      | `log`  |文本展示的类型，可选值：title、info、log                   |
| color  | string |否      | `white`|文本颜色，可选值：[chalk支持的颜色](https://www.npmjs.com/package/chalk) ]                   |
| options| object |否      | `{horizontalLayout: 'full'}`|只有type为`title`时生效，配置[figlet](https://www.npmjs.com/package/figlet)|

详情查看下方示例

## 示例

### 输出大标题
```js
new ConsoleWebpackPlugin([
    { 
      text: 'hahahaha', 
      type: 'title' 
    },
])
```

大标题通过 [figlet](https://www.npmjs.com/package/figlet#basic-usage---nodejs) 实现，`figlet`的配置通过`options`参数设置，格式和官网一样，如：
```js
new ConsoleWebpackPlugin([
    { 
      text: 'hahahaha', 
      type: 'title',
      options: {
          width: 80,
          whitespaceBreak: true
      }
    },
])
```
### 输出常规信息
```js
new ConsoleWebpackPlugin([
    { text: '当前环境：测试', type: 'info' },
])
```

### 输出日志类信息
```js
new ConsoleWebpackPlugin([
    { text: '当前环境：测试', type: 'log' },
])
```