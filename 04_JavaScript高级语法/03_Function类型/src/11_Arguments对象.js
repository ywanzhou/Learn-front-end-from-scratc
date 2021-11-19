/*
 * arguments 对象是一个存在于函数体中的特殊对象。
 * arguments 对象是一个类数组对象
 * arguments 对象对应传递给函数的实参
 */
// 定义一个函数
var fun = function () {
  console.log(arguments)
  // arguments.callee  指向参数所属的当前执行的函数。
  //如果给这个属性加一个括号则表示调用。因为 arguments.callee === fun 的结果为 true
  console.log(arguments.callee)
  // arguments.length  传递给函数的参数数量。
  console.log(arguments.length)
}
fun(1, 2, 3, 4, 5)
