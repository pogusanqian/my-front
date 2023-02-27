const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  // 开发服务器设置
  devServer: {
    port: 3000
  },
  // webpack配置
  configureWebpack: {
    resolve: {
      // 配置别名; 如果使用ts, 还需要在tsconfig.json中进行paths配置; css中或者html中需要使用~开头(最新版本的vue-cli, 省略也不报错)
      alias: {
        '@assets': '@/assets',
        '@type': '@/type'
      }
    },
    // 按需引入elementUI, 会自动生成auto-imports.d.ts和components.d.ts两个声明文件
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  // vue3语法糖全局引入配置
  chainWebpack: (config) => {
    config.module.rule('vue').use('vue-loader').tap((options) => ({
      ...options,
      reactivityTransform: true
    }));
  }
});
