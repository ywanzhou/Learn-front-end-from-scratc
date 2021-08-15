var arr = [100, true, '这是一个字符串']

// 在数组末尾添加一个元素
var count = arr.push(200)
console.log(arr) // [ 100, true, '这是一个字符串', 200 ]

// 删除第一个元素
var result = arr.shift()
console.log(arr) // [ true, '这是一个字符串', 200 ]

// result为删除的元素
console.log(result) // 100