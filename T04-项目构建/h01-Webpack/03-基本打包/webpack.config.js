/**
 * webpack构建工具基于node平台运行, 模块化默认采用commonJS, webpack可以自动处理js和json数据
 *
 * webpack作用:
 *      模块化打包: 将css,js,img等资源打成一个包, 而不是在html文件中通过script标签和link标签引入
 *                 script标签引入的对象是全局挂在到了window对象上, 占用内存, 有命名冲突等问题
 *                 打包时前端组件化的基础, 这样可以将一个组件的js,css,img等静态资源组合在一起
 *
 *      重新编译: 可以将js语法翻译成浏览器识别的语法, 如将es6转换成es5
 *               将图片转换成base64字符串
 *               压缩代码
 *
 *      减少io请求: 打包之后, 浏览器可以通过一次请求获取所有的资源
 *                 如果不打包的话, 我们的项目中有很多文件会相互依赖, 有几个文件就要发多少次请求来获取文件, 会因为一个文件网络问题延误了整个页面也会延误
 *
 */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则匹配处理css文件
        use: [
          // 注意lodaer的执行顺序是从坐后面的元素执行, 也就是说css-loader先执行, 然后再执行style-loader
          'style-loader', // 创建style标签, 将js中的样式资源添加到header中生效
          'css-loader', // 将css文件编程commonjs模块加载到js文件中, 里面的内容是样式字符串
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        // url-loader需要依赖file-loader
        loader: 'url-loader',
        options: {
          // 图片小于8kb, 会被作为base64加载
          limit: 8 * 1024,
          // url-loader默认使用的es6模块解析, 而html-loader引入图片的方式commonjs
          esModule: false,
          // 图片取hash的前10位, ext表示使用原本文件的扩展名
          name: '[hash:10].[ext]',
        },
        // 表示支持所有的模块类型, 如果没有这行代码, 图片加载不出来
        type: 'javascript/auto',
      },
      {
        test: /\.html$/,
        // 处理img标签中引入的图片路径
        loader: 'html-loader',
      },
      {
        // 加载其他文件
        // url-loader和file-loader再webpack5中被废弃了, 如若要使用, 需要添加上esModule:false; type:'javascript/auto'; 两个属性
        exclude: /\.(css|js|html|less|json|png|jpg)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
        },
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    // 导出一个空的HTML, 自动引入打包输出的所有资源(JS/CSS)
    new HtmlWebpackPlugin({
      title: 'WebPack',
      // 指定模板导出, 注意模板文件中就不需要再引入build之后的文件了, webpack会自动引入的
      template: './index.html',
      // 移除空格(只在生产环境中起作用)
      collapseWhitespace: true,
      // 移除注释(只在生产环境中起作用)
      removeComments: true,
    }),
  ],
  // 开发服务器: 需要下载webpack-dev-server, 只在内存中编译打包, 不会输出(这里服务器的启动文件就是entry指定的文件)
  // 当webpack.config.js更改时, devServer是不能监听到的, 需要重新执行npx webpack server
  devServer: {
    // 运行的目录, 4的版本是contentBase, 5的版本是static.directory
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    // 启动gzip压缩
    compress: true,
    // 服务器端口号
    port: 3000,
    // 自动打开浏览器
    open: true,
  },
};
