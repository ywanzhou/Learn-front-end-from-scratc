// 函数的接口
interface MyAdd {
  (x: number, y: number): number
}

// 通过接口定义函数
let myAdd: MyAdd = (x: number, y: number): number => {
  return x + y
}
