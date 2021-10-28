/*
 * @Descripttion:
 * @version: Version
 * @Author: Eric Wang
 * @Date: 2021-02-16 00:27:54
 * @LastEditors: Eric Wang
 * @LastEditTime: 2021-02-16 22:58:33
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
}
