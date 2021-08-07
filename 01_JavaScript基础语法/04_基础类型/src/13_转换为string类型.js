var bool = true
var num = 123

// 使用String()函数
var str1 = String(bool)
var str2 = String(num)

console.log(typeof str1) // string
console.log(typeof str2) // string

// 使用 Object.toString()方法

var str3 = Object.toString(bool)
var str4 = Object.toString(num)

console.log(typeof str3) // string
console.log(typeof str4) // string