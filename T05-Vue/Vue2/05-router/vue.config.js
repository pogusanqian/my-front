const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: '15_src_history模式与hash模式/main.js',
    }
  },
  lintOnSave: false,
});
