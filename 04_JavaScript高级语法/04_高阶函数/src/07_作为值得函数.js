function outer() {
  var v = 100
  // 在函数的函数体中定义另一个函数 -> 内部(私有)函数
  return function () {
    // 使用匿名函数
    return v * 2
  }
}
var result = outer()
console.log(result) // [Function]
