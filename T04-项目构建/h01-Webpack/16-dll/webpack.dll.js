/**
 * dll: 对某些库(常是第三方库jQuery, vue, react)进行单独打包,
 *      dll的主要作用就时将公共包统一打出去, 这样在引入jquery的时候, 就不需要打包了, 减少了webpack.config配置文件的打包量
 * webpack打包时, 默认查找的就是当先目录下的webpack.config.js
 * webpack --config webpack.dll.js        打包使用dll配置文件
 */

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    // key表示打包生成的name叫jquery, 值['jQuery']表示要打包的库是jquery
    jquery: ['jQuery'],
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]', // 打包的库里面向外暴露出去的变量叫什么名字
  },
  plugins: [
    // 打包生成一个 manifest.json --> 提供和jquery映射
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露的内容名称
      path: resolve(__dirname, 'dll/manifest.json'), // 输出文件路径
    }),
  ],
};
