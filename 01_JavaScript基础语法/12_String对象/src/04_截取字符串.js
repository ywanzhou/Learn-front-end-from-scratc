var str = 'JavaScript'

var result1 = str.slice(0, 4)
// JavaScript这个字符串的长度为10，-10 + 10 = 0，即开始索引为0，结束索引-6 + 10 = 4即开始索引为4
var result2 = str.slice(-10, -6)

console.log(result1, result2) // Java Java

// 传递负数会被当做0来使用 最终结果为空
var result1 = str.substring(0, -1)
var result2 = str.substring(0, 4)
console.log(result1, result2) //  Java
