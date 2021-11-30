// Gulp的入口文件
const fs = require('fs')
const { Transform } = require('stream')

exports.default = () => {
  // 文件读取流
  const read = fs.createReadStream('style.css')
  // 文件写入流
  const write = fs.createWriteStream('style.min.css')
  // 文件转换流
  const transform = new Transform({
    transform: (chunk, encoding, callback) => {
      // ★★★核心转换过程实现★★★
      // chunk => 读取流中读取到的内容（Buffer）
      // 使用toString将Buffer数组转化成字符串
      const input = chunk.toString()
      // 替换掉空白字符和css注释
      // 将转换后的结果放在output变量中
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
      // 执行callback的时候返回，错误优先第一个传错误参数，没有的话传null
      // output是成功之后作为结果导出
      callback(null, output)
    },
  })

  // 文件复制从读入通过管道先转换，后倒入到写入里面
  read.pipe(transform).pipe(write)

  return read
}
