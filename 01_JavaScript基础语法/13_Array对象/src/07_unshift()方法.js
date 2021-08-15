var arr = [100, true, '这是一个字符串']

// 在数组最前面添加一个元素
var count = arr.unshift(200)
console.log(arr) // [ 200, 100, true, '这是一个字符串' ]

// 删除最后一个元素
var result = arr.pop()
console.log(arr) // [ 200, 100, true ]

// result为删除的元素
console.log(result) // 这是一个字符串