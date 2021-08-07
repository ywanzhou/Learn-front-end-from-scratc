console.log(null ?? 10) // 10
console.log(undefined ?? 10) // 10
console.log(false ?? 10) // false

var value

// 如果value的值不为 null 或者 undefined 为其赋值10
value = value ?? 10
console.log(value) // 10
