// 首先 Object 是一个构造函数，就会有 prototype 属性
var result = Object.prototype
console.log(result) // 得到一个原型对象
/*
 * 原型对象的 constructor 属性 -> 返回与之关联的构造函数
 * Object.getPrototypeOf(result) 返回指向构造函数的 prototype
 */
var result2 = result.constructor
console.log(result2) // [Function: Object]
var result3 = Object.getPrototypeOf(result)
console.log(result3) // null
