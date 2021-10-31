// 使用自定义类型保护
// 1. 定义一个函数 其返回值是一个 类型谓词，即 parameterName is Type 也就是 参数名 is 类型 的形式
function isNumber(value: number | string): value is number {
  // 如果返回 true 则说明 传入的 value 是 is 后面的type
  return !isNaN(Number(value))
}
// 2. 定义一个获取数字的函数
const getNumber: (value: number | string) => number = (
  value: number | string,
): number => {
  // 如果调用 isNumber 的值为 true 则说明 value 是一个数字，所以将数字返回
  if (isNumber(value)) {
    return value
  }
}
// 3. 调用获取最终的数值
const getValue: (arr: (number | string)[]) => number = (
  arr: (number | string)[],
): number => {
  for (let i = 0; i < arr.length; i++) {
    // 如果返回数字，转换为 boolean 值为 true
    if (getNumber(arr[i]) || getNumber(arr[i]) === 0) {
      return getNumber(arr[i])
    }
  }
}
export {}
