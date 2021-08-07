var A = {}

// console.log(A.a.b) // 报错

console.log(A.a?.b) // undefined

var obj = {}

// 如果存在 obj.fun() 这个方法，下面则会直接调用，如果不存在则会返回undefined
obj.fun?.A()

