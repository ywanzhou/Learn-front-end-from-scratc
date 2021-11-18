const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

suite
  .add('正序', () => {
    let arr = new Array(100)
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str += i
    }
  })
  .add('缓存', () => {
    let arr = new Array(100)
    let str = ''
    for (let i = arr.length; i; i--) {
      str += i
    }
  })
  .add('缓存的另一种写法', () => {
    let arr = new Array(100)
    let str = ''
    for (let i = 0, l = arr.length; i < l; i++) {
      str += i
    }
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('最快的是：' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })
