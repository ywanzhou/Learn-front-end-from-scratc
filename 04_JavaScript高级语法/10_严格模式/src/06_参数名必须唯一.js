'use strict'

function fun(a, a, b) {
  console.log(a + a + b)
}
/*
 *非严格模式下结果为7=2+2+3
 *严格模式下将会抛出异常
 */
fun(1, 2, 3)
