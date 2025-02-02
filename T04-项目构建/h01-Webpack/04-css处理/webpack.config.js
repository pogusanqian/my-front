const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// 设置nodejs环境变量, 浏览器的兼容性browlist, 默认是production
process.env.NODE_ENV = 'development'

/**
 * 打包的css样式放在js中的缺点:
 *      - js文件特别大, 加载起来比较慢
 *      - 由于css样式放在js中, 渲染样式时, 需要先加载js, 会造成渲染不及时, 出现闪屏的现象
 */
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 替换掉style-loader, 将css文件从打包的js文件中提取出来, 注意style-loader时将样式写在style标签中的,而这个是将使用的link标签
          MiniCssExtractPlugin.loader,
          'css-loader',
          // CSS兼容性处理postcss-loader postcss-preset-env, 在package.json中配置browerlist属性, 配置css兼容性
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // 将css文件从打包的js文件中提取出来
    new MiniCssExtractPlugin({
      // 设置打包后, css文件的存放路径
      filename: 'css/main.css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ]
}
