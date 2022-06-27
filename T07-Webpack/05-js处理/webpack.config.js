const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 生成环境(production)下, 会自动压缩js代码
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 需要再package.json中设置eslintConfig属性, eslint版本太高会报错
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        }
      },
      /**
        js兼容性处理 babel-loader @babel/core 
          1. 基本js兼容性处理 --> @babel/preset-env
             - 默认将es6语法转换成了es5
             - 不能处理promise
          2. 全部js兼容性处理 --> @babel/polyfill  
             - @babel/polyfill这个报是直接引入到了js文件中的, 这个包是添加在了dependencies依赖中的, 导致压缩之后的包太大
          3. 按需处理兼容性问题  --> core-js(安装在dependencies中)
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // presets: ['@babel/preset-env'] // 直接处理兼容性
          // 按需处理兼容性
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',                 // 按需加载
                corejs: { version: 3 },               // 指定core-js版本
                // 指定兼容性做到哪个版本浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      collapseWhitespace: true,
      removeComments: true
    })
  ],
};
