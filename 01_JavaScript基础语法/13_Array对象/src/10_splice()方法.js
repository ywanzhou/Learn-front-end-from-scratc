var arr = ['red', 'blue', 'black', 'green', 'yellow']

// 从索引2开始 删除3个元素
// arr.splice(2, 3)
// console.log(arr) // [ 'red', 'blue' ]

// 将索引为2的元素替换为 orange
// arr.splice(2, 1, 'orange')
// console.log(arr) // [ 'red', 'blue', 'orange', 'green', 'yellow' ]


// 将索引为2的元素位置添加 orange
arr.splice(2, 0, 'orange')
console.log(arr) // [ 'red', 'blue', 'orange', 'black', 'green', 'yellow' ]