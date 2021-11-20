const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

var userList = {
  one: {
    name: '一碗周',
    age: 18,
  },
  two: {
    name: '一碗粥',
    age: 18,
  },
}

suite
  .add('before', () => {
    function returnOneInfo() {
      userList.one.info = userList.one.name + userList.one.age
    }
    returnOneInfo()
  })
  .add('after', () => {
    function returnOneInfo() {
      let one = userList.one
      one.info = one.name + one.age
    }
    returnOneInfo()
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', () => {
    console.log('最快的是：' + suite.filter('fastest').map('name'))
  })
  .run({ async: true })
