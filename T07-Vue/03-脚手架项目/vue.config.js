// 修改配置文件之后, 需要重新启动服务
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: '17_src_作用域插槽/main.js',
    }
  },
  lintOnSave: false,
  // 开启代理服务器(目标服务器只有一台的情况)
  // devServer: {
  //   // 这里配置的是目标服务器的ip地址
  //   proxy: 'http://localhost:3000'
  // },

  // 开启代理服务器(有多个目标服务器)
  devServer: {
    proxy: {
      '/koa': { // 使用路径前缀进行不同目标服务器代理
        target: 'http://localhost:3000',
        // 使用正则表达式替换路径前缀
        pathRewrite: { '^/koa': '' },
        // 用于支持websocket
        ws: true,
        // 用于控制请求头中的host值; 如果为true, 则访问koa服务的端口是一个虚假端口3000(和koa保持了一致), false则传递真正的端口8080
        changeOrigin: true,
      },
      '/liveView': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/liveView': '' },
      }
    }
  }
});
