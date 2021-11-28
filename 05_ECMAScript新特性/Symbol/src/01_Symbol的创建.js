/**
 * 语法
 * Symbol([description])
 * * description -> 是一个可选的描述信息
 */
// 创建一个 Symbol 类型的值
// const mySymbol = Symbol()
// console.log(mySymbol) // Symbol()

// const myName = Symbol('一碗周')
// console.log(typeof myName) // symbol

// console.log(Symbol() === Symbol()) // false 
// console.log(Symbol('一碗周') === Symbol('一碗周')) /// false


const myName = Symbol('一碗周')

const person = {
  // 值得注意的是使用 Symbol 作为属性名的时候，需要使用计算属性名的方式，即 Symbol 使用 [] 包裹
  [myName]: '一碗周'
}

console.log(person[myName]) // 一碗周

console.log(Object.keys(person)) // []
console.log(JSON.stringify(person)) // {}

console.log(Object.getOwnPropertySymbols(person)) // [ Symbol(一碗周) ]

console.log(Reflect.ownKeys(person)) // [ Symbol(一碗周) ]


