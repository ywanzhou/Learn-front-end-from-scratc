var arr = [100, true, '这是一个字符串']

// concat()方法将多个数组（值）合并为要给数组
var newArr = arr.concat([200, false], '这是另一个字符串', 300)

console.log(newArr) // [ 100, true, '这是一个字符串', 200, false, '这是另一个字符串', 300 ]