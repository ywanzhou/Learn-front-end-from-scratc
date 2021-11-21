const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

suite
  .add('before', () => {
    var str = new String('string')
  })
  .add('after', () => {
    var str = 'string'
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('最快的是：' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })
