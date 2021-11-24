var v = 100

function fun() {
  console.log(this.v)
}
var obj = {
  v: 200,
  fun: fun,
}
var ob = {
  v: 300,
}
;(ob.fun = obj.fun)() //100
;(function () {
  console.log(this.v)
})()
