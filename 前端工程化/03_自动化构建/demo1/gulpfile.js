// Gulp的入口文件
const fs = require('fs')
exports.stream = done => {
  // 读取文件的文件流对象
  const readStream = fs.createReadStream('package.json')
  // 写入文件的文件流对象
  const writeStream = fs.createWriteStream('temp.txt')
  // 文件复制从读入通过管道倒入到写入里面
  readStream.pipe(writeStream)
  // 把readStream返回
  // return readStream
  // 上面的return类似于监听了end事件执行done
  readStream.on('end', () => {
    done()
  })
}
