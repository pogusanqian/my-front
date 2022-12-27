const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'cheap-source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        fix: true,
      }
    },
    {
      // oneOf: 当一个文件匹配上loader之后, 就不会在往下执行; 注意oneOf在匹配文件的时候, 同一种文件处理, 只能出现一次
      // oneOf属于生产环境的优化
      oneOf: [
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            name: '[hash:10].[ext]',
            // url-loader默认使用的es6模块解析, 而html-loader引入图片的方式commonjs
            esModule: false,
            outputPath: 'imgs',
          },
          type: 'javascript/auto',
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
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
                  useBuiltIns: 'usage',                 // 按需加载
                  corejs: { version: 3 },               // 指定core-js版本
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
        }
      ]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
};
