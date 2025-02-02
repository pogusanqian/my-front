const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'cheap-source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'js/main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
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
              outputPath: 'imgs'
            },
            type: 'javascript/auto'
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              /**
               * 使用hhread-loader开启多进程打包
               * 进程的启动与关闭也是需要消耗时间的, 所以通常而言都是给babel-loader开启多进程
               */
              {
                loader: 'thread-loader',
                options: {
                  workers: 2 // 进程2个
                }
              },
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        useBuiltIns: 'usage', // 按需加载
                        corejs: { version: 3 }, // 指定core-js版本
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
          {
            exclude: /\.(html|js|css|less|jpg|png|gif)$/,
            loader: 'file-loader',
            options: {
              name: '[hash:10].[ext]',
              outputPath: 'media',
              esModule: false
            },
            type: 'javascript/auto'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
