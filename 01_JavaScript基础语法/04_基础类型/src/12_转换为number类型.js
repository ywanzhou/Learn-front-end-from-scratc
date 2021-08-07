var str1 = '10'
var str2 = 'str'

// 使用 Number
console.log(Number(str1)) // 10
console.log(Number(str2)) // NaN

// 使用parseInt
console.log(parseInt(str1)) // 10
console.log(parseInt(str2)) // NaN
// 如果转换的是一个浮点数，最终不会保留小数点
console.log(parseInt(10.5)) // 10

// 使用parseFloat
console.log(parseFloat(str1)) // 10
console.log(parseFloat(str2)) // NaN 
console.log(parseFloat(10.5)) // 10.5
