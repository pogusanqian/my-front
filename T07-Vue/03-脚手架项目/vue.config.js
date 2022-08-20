// 修改配置文件之后, 需要重新启动服务
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './07-src-todolist/main.js'
    }
  },
  lintOnSave: false,
});
