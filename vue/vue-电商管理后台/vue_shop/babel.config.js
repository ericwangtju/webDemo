const prodPlugins = []
if (process.env.MODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // ...展开运算符
    ...prodPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}
