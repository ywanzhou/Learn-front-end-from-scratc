const marked = require('marked')

// source 输入的内容，这里为 Markdown 语法
module.exports = source => {
  // 通过 marked 插件进行处理，然后将 HTML 字符串交给下一个 loader 处理
  return marked.parse(source)
}
