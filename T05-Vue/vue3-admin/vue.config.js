const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 配置别名
      // 以后当使用 v-bind 语法时使用 assets 就是调用 src/assets 这个路径，如<img :src="assets/">，其实就是<img :src="src/assets/">
      // 如果不使用 v-bind 语法时使用 assets 则需要在前面加 ~ ，如<img src="~assets/">，其实就是<img src="src/assets/">
      // 如果使用ts, 还需要在tsconfig.json中进行paths配置
      alias: {
        '@assets': "@/assets",
        '@type': "@/type",
      },
    },
    // 按需引入elementUI, 会自动生成auto-imports.d.ts和components.d.ts两个声明文件
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
