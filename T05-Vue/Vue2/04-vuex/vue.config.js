const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: '05_src_模块化/main.js',
    }
  },
  lintOnSave: false,
});
