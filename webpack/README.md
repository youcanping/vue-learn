## webpack工程配置
### 创建`npm`项目
```bash
$ npm init
```
### 安装`webpack`
```bash
$ npm i -D webpack webpack-cli
```
### 新建配置文件
在当前目录下创建`webpack.config.js`。

### 配置`webpack`入口出口
```js
module.exports = {
    entry: {
        index: path.join(__dirname, "src/index.js")
    },
    output: {
        filename: "[name].js?[hash]",
        path: path.join(__dirname, "dist")
    }
}
```

## 配置`webpack`的`loader`
```bash
$ npm i -D css-loader style-loader file-loader
```
```js

module.exports = {
    module: {
        rules: [
            {
                test: /\.css/,
                loader: "style-loader!css-loader"//优先级从右到转
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader",
                options: {
                    filename: "[path][name].[ext]",
                    limit: "8192", //图片base64内联的最大限制
                    outputPath: "images/"
                }
            }
        ]
    }
}
```

### 配置`babel-loader`解析`ES2015`语法
```bash
$ npm i -D babel-core babel-loader babel-present-env
$ npm i -D babel-plugin-transform-runtime # 开发依赖
$ npm i -S babel-runtime # 生产依赖
```

* 在项目根目录添加`.babelrc`
```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions", "safari >= 7"]
        }
      }
    ]
  ],
  "plugins": [
    ["transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
  ]
}
```

* 配置`babel-loader`
```
{
    test: /\.js$/,
    exclude: /..\/node_modules\//, //根据自己目录结构排除
    loader: "babel-loader"
}
```

### 安装`webpack`插件
* 安装`html-webpack-plugin`，加载`html`用
```bash
$ npm i -D html-webpack-plugin
```
```js
module.exports = {
    plugins: [
       new HtmlWebpackPlugin({
           template: path.join(__dirname, "src/index.html"),
           filename: "index.html",
           meta: {
               "viewport": "width=device-width, initial-scale=1.0",
           }
       })
    ]
}
```

### 配置本地服务器
```bash
$ npm i -D webpack-dev-server
```
```js
module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "0.0.0.0", //0.0.0.0 可服务器提供给外部访问
        port: "9999",
        hot: true
    }
}
```
