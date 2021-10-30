// 在 js 中定义函数的三种方式

// // 1. 使用function关键字声明函数
// function add1(x, y) {
//   return x + y
// }

// // 2. 使用字面量方式声明函数
// const add2 = function (x, y) {
//   return x + y
// }

// // 3. 使用箭头函数声明函数
// const add3 = (x, y) => {
//   return x + y
// }

// 在 ts 中定义函数

// 1. 使用function关键字声明函数
/*
 语法结构如下
 function 函数名(形参1: 类型, 形参2: 类型,...): 返回值类型 {
     函数体
 }
 */
function add4(x: number, y: number): number {
  return x + y
}

// 2. 使用字面量方式声明函数
/*
 语法结构如下
 const 函数名 = function (形参1: 类型, 形参2: 类型,...): 返回值类型 {
     函数体
 }
 */
const add5 = function (x: number, y: number): number {
  return x + y
}

// 3. 使用箭头函数声明函数
/*
 语法结构如下
 const 函数名 = (形参1: 类型, 形参2: 类型,...): 返回值类型  => {
     函数体
 }
 */
// 3. 使用箭头函数声明函数
const add6 = (x: number, y: number): number => {
  return x + y
}
