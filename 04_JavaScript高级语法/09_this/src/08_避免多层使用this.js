var obj = {
  f1: function () {
    console.log(this) //指向obj
    var f2 = (function () {
      console.log(this) //指向全局
    })()
  },
}
obj.f1()
