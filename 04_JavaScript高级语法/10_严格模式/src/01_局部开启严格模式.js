//全局开启严格模式
//"use strict"
v = 100
console.log(v)

function fun() {
  //局部开启严格模式
  'use strict'
  vv = 200
  console.log(vv)
}
// fun() 抛出异常 vv is not defined
