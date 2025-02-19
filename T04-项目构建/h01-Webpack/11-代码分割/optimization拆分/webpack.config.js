const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  // 可以将node_modules中代码单独打包一个chunk最终输出
  // 自动分析多入口chunk中, 有没有公共的文件, 如果有会打包成单独一个chunk(jquery是公用的)
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
