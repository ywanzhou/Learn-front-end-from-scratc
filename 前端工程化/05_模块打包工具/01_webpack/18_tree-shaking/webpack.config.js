module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true,
    // 尽可能合并每一个模块到一个函数中，这个功能称为 Scope Hoisting 这个概念是在 webpack3 中提出的
    concatenateModules: true,
    // 压缩输出结果
    minimize: true,
  },
}
