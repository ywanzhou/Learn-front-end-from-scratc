const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

suite
  .add('使用属性访问方法', () => {
    function Person() {
      this.name = '一碗周'
      this.getName = function () {
        return '一碗周'
      }
    }
    let p = new Person()
    let n = p.getName()
  })
  .add('不使用属性访问方法', () => {
    function Person() {
      this.name = '一碗周'
    }
    let p = new Person()
    let n = p.name
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('最快的是：' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })
