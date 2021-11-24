'use strict'

function fun(v) {
  v = '100'
  console.log(v)
  console.log(arguments[0])
}
/*
 *在非严格模式中打印的结果为100，100
 *在严格模式中打印的结果为100，200
 */
fun(200)
