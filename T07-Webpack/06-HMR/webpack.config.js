/*
  HMR(hot module replacement): 热模块替换, 一个模块发生变化, 只会重新打包这一个模块(而不是打包所有模块), 极大提升构建速度
    样式文件: 可以使用HMR功能; style-loader内部实现了HMR功能, 所以不用对代码做任何处理
    js文件: 默认不能使用HMR功能 --> 需要修改js代码, 添加支持HMR功能的代码(HMR功能对js的处理, 只能处理非入口js文件的其他文件)
    html文件: 默认不能使用HMR功能, 另外HTML文件的内容也不会发生改变(可以再entry中引入html文件或者直接刷新浏览器)
              在打包的时候, html文件通常只有一个, 所以HTML一般不用实现HMR功能, 直接刷新浏览器就行了
  webpack5中devServer的hot值默认是true, webpack4中hot的默认值是false
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    filename: 'js/main.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: resolve(__dirname, 'build'),
    },
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能(当修改了webpack配置，新配置要想生效，必须重新webpack服务)
    hot: true,
  },
  target: 'web'
};
