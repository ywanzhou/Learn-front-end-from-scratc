// 1. 定义一个获取数字的函数
const getNumber: (value: number | string) => number = (
  value: number | string,
): number => {
  // 判断当前是否为字符串，如果是返回当前值
  if (typeof value === 'number') {
    return value
  }
}
// 2. 调用获取最终的数值
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
