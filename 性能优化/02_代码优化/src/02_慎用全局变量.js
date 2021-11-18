const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

suite
  .add('全局变量', () => {
    // 该函数内模拟全局作用域
    let i,
      str = ''
    for (i = 0; i < 1000; i++) {
      str += i
    }
  })
  .add('局部变量', () => {
    for (let i = 0, str = ''; i < 1000; i++) {
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
