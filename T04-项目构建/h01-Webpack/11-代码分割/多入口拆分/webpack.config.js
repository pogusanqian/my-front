/**
 * 代码分割(code split): 将原本要打包的一个chunk, 拆分成多个文件
 *    并行加载: 多个小文件并行加载, 比加载一个大文件chunk要快
 *    按需加载: 只加载需要的文件; 前提是将每个路由文件, 都拆分成一个单独的js文件
 *
 * 多入口拆分文件: 注意entry的属性是个对象, 不是数组; 这种方式一般不适用, 因为配置起来太麻烦
 * optimization: 可以将node_modules中代码单独打包一个chunk最终输出
 *               自动分析多入口chunk中, 有没有公共的文件, 如果有会打包成单独一个chunk(jquery是公用的)
 * import动态导入打包:
 *
 */

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    show: './src/js/show.js',
  },
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
  ],
};
