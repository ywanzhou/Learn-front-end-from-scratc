// 实现可选参数功能
// 参数名旁加一个?即可
function add(x: number, y?: number): number {
  return x + y
}
let result1 = add(1)
let result2 = add(1, 2)
// let result3 = add(1, 2, 3) //  Expected 2 arguments, but got 3
