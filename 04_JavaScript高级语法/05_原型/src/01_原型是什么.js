function fun() {
  console.log('函数原型')
}

console.log(fun.prototype) // {}
// 通过 Object.getOwnPropertyNames() 获取全部属性
console.log(Object.getOwnPropertyNames(fun.prototype)) // [ 'constructor' ]

// constructor属性

console.log(fun.prototype.constructor) // [Function: fun]

console.log(fun.prototype.constructor === fun) // true
