module.exports = class myWebpackPlugin {
  apply(compiler) {
    console.log('我的webpack插件开始执行')

    compiler.hooks.emit.tap('myWebpackPlugin', compilation => {
      // compilation => 可以理解为此次打包的上下文
      // 可以通过 compilation.assets 获取所有文件的对象
      for (const name in compilation.assets) {
        // 通过 for...in 语句遍历到所有的文件名
        // name // 当前文件名
        // compilation.assets[name].source() 获取该文件下所有的内容
        if (name.endsWith('.js')) {
          // 如果以 .js 文件结尾，获取内容并删除对应的注释
          const contents = compilation.assets[name].source()
          const withoutComments = contents.replace(/\/\*\*+\*\//g, '')
          // 重新将内容包装一个对象
          compilation.assets[name] = {
            source: () => withoutComments,
            // 约定包含一个 size 属性
            size: () => withoutComments.length,
          }
        }
      }
    })
  }
}
