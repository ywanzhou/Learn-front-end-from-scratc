;(function () {
  let arr = [1, '2'] // 定义一个包含字符串和数字的一个数组
  // 为上面定义的数组重新赋值
  // arr = [true, false] // 错误 不能将类型“boolean”分配给类型“string | number”

  // 还有如下例子
  let val = arr.length === 0 ? 0 : '数组长度不是0'
  // val = false //  错误 不能将类型“boolean”分配给类型“string | number”
})()
