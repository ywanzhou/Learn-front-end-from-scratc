const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

suite
  .add('forEach', () => {
    let arr = new Array(100)
    let str = ''
    arr.forEach(i => {
      str += i
    })
  })
  .add('for...in', () => {
    let arr = new Array(100)
    let str = ''
    for (i in arr) {
      str += i
    }
  })
  .add('for', () => {
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
