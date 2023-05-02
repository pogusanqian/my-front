const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const fs = require('fs');

module.exports = defineConfig({
  transpileDependencies: true,
  // 开发服务器设置
  devServer: {
    host: 'localhost',
    port: 3000,
    https: {
      key: fs.readFileSync('./src/assets/crts/server.key'),
      cert: fs.readFileSync('./src/assets/crts/server.crt'),
      passphrase: 'server'
    }
  },
  // webpack配置
  configureWebpack: {
    resolve: {
      // 配置别名; 如果使用ts, 还需要在tsconfig.json中进行paths配置; css中或者html中需要使用~开头(最新版本的vue-cli, 省略也不报错)
      alias: {
        '@assets': '@/assets',
        '@type': '@/type'
      }
    }
  },
  // vue3语法糖全局引入配置
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        reactivityTransform: true
      }));
  }
});
