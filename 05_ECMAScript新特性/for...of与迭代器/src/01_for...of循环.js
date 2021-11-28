// 创建可迭代对象
const arr = [10, 20, 30]
const map = new Map([["a", 1], ["b", 2], ["c", 3]])
const set = new Set(arr)

for (let _arr of arr) {
  console.log(_arr) // 10 20 30 
}

// 可以通过解耦赋值的方式直接将 map 中的结构展开
for (let [key, value] of map) {
  console.log(key, value) // a 1   b 2   c 3 
}
for (let _set of set) {
  console.log(_set) // 10 20 30 
}
