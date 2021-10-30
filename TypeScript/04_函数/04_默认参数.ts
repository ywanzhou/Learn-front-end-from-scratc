;(function () {
  function add(x: number, y: number = 2): number {
    return x + y
  }
  let result1 = add(1) // 3
  let result2 = add(1, 2) // 3
})()
