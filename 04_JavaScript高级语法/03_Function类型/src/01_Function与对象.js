var f = function () {
  console.log('this is f function')
}
// 函数也是一个对象
console.log(f instanceof Object) // true
// 函数是Function类型的对象
console.log(f instanceof Function) // true
