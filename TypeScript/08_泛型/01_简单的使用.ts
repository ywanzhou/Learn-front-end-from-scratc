// 所谓的泛型，通俗一点的解释就是泛指的类型
// 定义一个join函数，接受两个一样类型的参数，并将两个参数拼接后返回。
function join<T>(first: T, second: T) {
  return `${first}${second}`
}
// 这里明确 T 为 string 类型
join<string>('第一', '第二') // 第一第二
// 这里通过类型推导的方式，编译器会根据传入的参数自动推断出类型
join(1, 2) // 12

export {}
