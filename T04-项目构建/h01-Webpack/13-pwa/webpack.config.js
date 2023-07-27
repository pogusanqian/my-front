/**
 * PWA: 渐进式网络开发应用程序(离线可访问), 使用的技术使浏览器中的services worker和cache storage
 * 1. 需要在package.json中配置eslintConfig.env.brower=true, 使eslint支持浏览器中的全局变量
 * 2. 打包后的资源需要放在静态服务器上
 *
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
