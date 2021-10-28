;(function () {
  // 定义一个值分别被 string 和 number 的元组
  let tuple: [string, number] = ['123', 123]
  console.log(tuple) // [ '123', 123 ]
  // 通过索引赋值
  tuple[0] = 'string'
  console.log(tuple) // [ 'string', 123 ]
  // 赋值其他类型
  // tuple[0] = true
  // console.log(tuple) // 抛出异常
})()
