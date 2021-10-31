// 现在我们有一个需求：获取一个具有任意类型数组中第一个数字。
// 定义一个包含number或者string的数组
const arr: (number | string)[] = [1, '数字']
// 遍历数组返回第一个数字
// const getValue: (arr: (number | string)[]) => number = (
//   arr: (number | string)[],
// ): number => {
//   for (let i = 0; i < arr.length; i++) {
//     // 如果当前值转换为数字时候不是一个 NaN 则返回
//     if (!isNaN(Number(arr[i]))) {
//       return arr[i] // 不能将类型“string | number”分配给类型“number”。
//     }
//   }
// }

// 通过类型断言来实现
const getValue: (arr: (number | string)[]) => number = (
  arr: (number | string)[],
): number => {
  for (let i = 0; i < arr.length; i++) {
    // 如果当前值转换为数字时候不是一个 NaN 则返回
    if (!isNaN(Number(arr[i]))) {
      return arr[i] as number // 告诉 编译器 我返回的就是一个 number
    }
  }
}
