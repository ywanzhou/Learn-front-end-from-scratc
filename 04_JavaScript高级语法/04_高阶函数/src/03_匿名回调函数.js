// 定义一个函数，这个函数有两个函数类型的参数，然后分别执行那两个函数，并返回它们的和。
function sum(a, b) {
  // 目标函数
  return a() + b()
}

console.log(
  sum(
    function () {
      // 匿名回调函数
      return 1
    },
    function () {
      //  匿名回调函数
      return 2
    },
  ),
) // 3
