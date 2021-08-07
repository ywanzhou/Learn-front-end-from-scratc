console.log(true && true)    // true
console.log(true && false)   // false
console.log(false && true)   // false
console.log(false && false)  // false


console.log(1 && 2) // 2
console.log(0 && 1) // 0
console.log(1 && '') // ''
console.log(true && 'str') // 'str'


// 这里我们使用了一个未定义变量value，如果检测到左值为false的话，就不会继续执行，否则将会报错，报错信息为：value is not defined
console.log(false && value) // false