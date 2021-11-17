// 1. 创建空对象
var obj1 = new Object(undefined)
var obj2 = new Object(null)
console.log(obj1) // {}
console.log(obj2) // {}

// 2. 如果传进去的是一个基本类型的值，则会构造其包装类型的对象
var obj3 = new Object(100)
var obj4 = new Number(100)
console.log(obj3) // [Number: 100]
console.log(obj4) // [Number: 100]
