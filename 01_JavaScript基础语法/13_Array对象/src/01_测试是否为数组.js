var arr = [1, 2, 3, 4, 5]

// 通过 instanceof 来判断是否为一个数组，运算符右侧为一个构造函数
console.log(arr instanceof Array) // true

// Array.isArray() 可以传递一个需要
console.log(Array.isArray(arr)) // true

// 检测 arr 是否处于Array的原型链上
console.log(Array.prototype.isPrototypeOf(arr)) // true