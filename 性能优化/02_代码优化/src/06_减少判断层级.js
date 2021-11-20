const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()
/**
 * 接收两类文件，zip 和 rar
 * 压缩包的大小限制为 10 兆
 */

suite
  .add('嵌套写法', () => {
    function uploadFile(suffix, size) {
      // 允许上传的后缀名
      const suffixList = ['.zip', '.rar']
      const M = 1024 * 1024

      if (suffixList.includes(suffix)) {
        if (size <= 10 * M) {
          return '下载成功'
        }
      }
    }
    uploadFile('.zip', 1 * 1024 * 1024)
  })
  .add('减少判断写法', () => {
    function uploadFile(suffix, size) {
      // 允许上传的后缀名
      const suffixList = ['.zip', '.rar']
      const M = 1024 * 1024
      if (!suffixList.includes(suffix)) return
      if (size > 10 * M) return
      return '下载成功'
    }
    uploadFile('.zip', 1 * 1024 * 1024)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('最快的是：' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })
