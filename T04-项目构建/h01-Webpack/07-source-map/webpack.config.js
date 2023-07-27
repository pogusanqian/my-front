/**
    内敛的构建方式更快
    webpack5自动启用了source-map, 不用进行人工配置的
    source-map：外部(js.map是外部文件)
      错误代码准确信息 和 源代码的错误位置
    hidden-source-map：外部
      错误代码错误原因，但是没有错误位置
      不能追踪源代码错误，只能提示到构建后代码的错误位置
    nosources-source-map：外部
      错误代码准确信息, 但是没有任何源代码信息
      可以防止别人窥视源码
    cheap-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      定位的是压缩后的一大行; 但是source-map等报错的是具体的报错语法信息
    cheap-module-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      module会将loader的source map加入

    inline-source-map：内联(js.map映射写在了main.js文件中)
      只生成一个内敛文件
      错误代码准确信息 和 源代码的错误位置
    eval-source-map：内联
      每一个文件都生成对应的source-map，都在eval
      错误代码准确信息 和 源代码的错误位置
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          esModule: false,
          outputPath: 'imgs',
        },
        type: 'javascript/auto',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        exclude: /\.(html|js|css|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
          esModule: false,
        },
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: resolve(__dirname, 'build'),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
};
