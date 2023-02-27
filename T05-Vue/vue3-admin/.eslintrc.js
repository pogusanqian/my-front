module.exports = {
  root: true,
  env: {
    node: true,
    // 解决vue3中defineProps全局变量的问题
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    // 解决vue3中不能使用$ref的问题, 注意还需要在tsconfig.json的type进行引入; 在env中设置'vue/ref-macros': true不起作用 
    $ref: "readonly"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
};
