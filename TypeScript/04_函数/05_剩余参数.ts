function fun(x: number, ...numbers: number[]): void {
  console.log(numbers)
}
fun(1, 2, 3, 4) // [ 2, 3, 4 ]
