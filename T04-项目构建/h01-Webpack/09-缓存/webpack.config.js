/**
 * 缓存属于生产环境优化
 *    babel缓存: 如果不开启babel缓存, 当一个js文件发生改变时, 所有的js文件都要重新编译
 *    文件资源缓存: 服务器的资源缓存到浏览器, 这里将整个build目录都当成了静态资源(为了使浏览器每次都能请求最新的服务器文件, 所以对文件名做了标识处理)
 *                 hash: 每次wepack构建时会生成一个唯一的hash值; 如果使用hash值作为版本号, 每次build之后, 所有缓存文件的版本号都会改变, 所有缓存都会失效
 *                 chunkhash: 根据chunk生成的hash值; 
 *                     例如我们的入口文件有两个index1.js, index2.js, css文件也有两个index1.css, index2.css
 * `                   index1.js中引入了index1.css, index2.js中引入了index2.css, 那么[index1.css, index1.js]是同一个chunk, 剩下的两个是另一个chunk
 *                 contenthash: 根据文件的内容生成hash值; 当a文件发生改变时, 浏览器只会重新拉去a文件, 其他文件仍然使用缓存
 */

const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
          },
          {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ],
              // 开启babel缓存
              cacheDirectory: true
            }
          },
          {
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false
            },
            type: 'javascript/auto',
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)/,
            loader: 'file-loader',
            options: {
              outputPath: 'media',
              esModule: false,
            },
            type: 'javascript/auto',
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
};
