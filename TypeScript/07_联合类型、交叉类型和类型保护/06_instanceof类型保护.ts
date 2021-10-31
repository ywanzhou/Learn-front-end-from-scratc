/**
 * 由于 instanceof 仅仅支持引用类型，不支持原始类型，所以说这里需要进行一下改动，将数组修改为如下：
 */
const arr2: (Number | String)[] = [new String('彼岸繁華'), new Number(10)]
// 1. 定义一个获取数字的函数
const getNumber: (value) => number = (value): number => {
  // 判断当前是否为 Number 类型，将当前值转换为字符串返回
  if (value instanceof Number) {
    return Number(value)
  }
}
// 2. 调用获取最终的数值
const getValue: (arr: (Number | String)[]) => number = (
  arr: (Number | String)[],
): number => {
  for (let i = 0; i < arr.length; i++) {
    // 如果返回数字，转换为 boolean 值为 true
    if (getNumber(arr[i]) || getNumber(arr[i]) === 0) {
      return getNumber(arr[i])
    }
  }
}
export {}
