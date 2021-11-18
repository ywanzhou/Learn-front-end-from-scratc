const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

suite
  .add('构造函数内部添加', () => {
    function Person() {
      this.sayMe = function () {
        return '一碗周'
      }
    }
    let p = new Person()
  })
  .add('原型方式内部添加', () => {
    function Person() {}
    Person.prototype.sayMe = function () {
      return '一碗周'
    }
    let p = new Person()
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('最快的是：' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })
