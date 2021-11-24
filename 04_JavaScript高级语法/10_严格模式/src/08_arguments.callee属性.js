'use strict'

function fun() {
  console.log(arguments.callee)
}
fun() //抛出异常
