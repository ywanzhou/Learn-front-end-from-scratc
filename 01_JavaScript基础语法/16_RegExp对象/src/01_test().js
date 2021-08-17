// var str = 'JavaScript'
// var re = /Java/
// var result1 = re.test(str)
// console.log(result1) // true

var str = 'JavaScript'
var re = /Java/g
console.log(re.lastIndex) // 0
var result1 = re.test(str)
console.log(result1) // true

// 当带有g修饰符后，匹配一次之后，lastIndex的属性会根据匹配到位置发生变化
console.log(re.lastIndex) // 4

var result2 = re.test(str)
console.log(result2) // false

// 修复lastIndex属性的值
re.lastIndex = 0

var result3 = re.test(str)
console.log(result3) // true