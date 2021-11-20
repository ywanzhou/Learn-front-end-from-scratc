const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

suite
  .add('before', () => {
    var name = '一碗粥'
    function sayMe() {
      name = '一碗周'
      function print() {
        var age = 18
        return name + age
      }
      print()
    }
    sayMe()
  })
  .add('after', () => {
    var name = '一碗粥'
    function sayMe() {
      var name = '一碗周' // 形成局部作用域
      function print() {
        var age = 18
        return name + age
      }
      print()
    }
    sayMe()
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('最快的是：' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })
