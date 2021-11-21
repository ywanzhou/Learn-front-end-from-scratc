// 模拟函数的重载
function add() {
  // 记录参数数量
  var len = arguments.length
  // 通过 switch case 语句判断传入参数数量，来模拟重载的功能
  switch (len) {
    case 2:
      return arguments[0] + arguments[1]
      break
    case 3:
      return arguments[0] + arguments[1] + arguments[2]
      break
    case 4:
      return arguments[0] + arguments[1] + arguments[2] + arguments[3]
      break

    default:
      break
  }
}
console.log(add(1, 2)) // 3
console.log(add(1, 2, 3)) // 6
console.log(add(1, 2, 3, 4)) // 10
