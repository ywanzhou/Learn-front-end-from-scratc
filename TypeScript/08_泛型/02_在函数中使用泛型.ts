function identity<T, Y, P>(first: T, second: Y, third: P): Y {
  return second
}
// 指定类型
identity<boolean, string, number>(true, '字符串', 123) // 字符串
// 类型推断
identity('string', 123, true) // true

export {}
