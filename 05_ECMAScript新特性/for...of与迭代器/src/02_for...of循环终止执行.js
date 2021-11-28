const arr = [1, 2, 3, 4, 5, 6, 7, 8]

for (num of arr) {
  if (num === 3) {
    // 当 num 的值遍历到 3 时，跳过本次循环
    continue
  } else if (num === 6) {
    // 当 num 的值遍历到 6 时，终止本次循环
    break
  }
  console.log(num);
  /*
  1
  2
  4
  5
  */
}
