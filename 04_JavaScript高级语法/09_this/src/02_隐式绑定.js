var v = 200
var obj = {
  v: 100,
  fun: function () {
    console.log(this.v)
  },
}
obj.fun() //100
