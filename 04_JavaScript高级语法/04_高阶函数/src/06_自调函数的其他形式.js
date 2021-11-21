;+(function (v) {
  // 形参
  var w = 100 // 局部变量
  console.log('自调函数' + v)
})(1) // 实参

!(function (v) {
  var w = 100 // 局部变量
  console.log('自调函数' + v)
})(2)

~(function (v) {
  var w = 100 // 局部变量
  console.log('自调函数' + v)
})(3)
