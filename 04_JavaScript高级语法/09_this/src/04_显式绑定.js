var obj = {
  v: 100,
  fun: function () {
    console.log(this.v)
  },
}
var fun = obj.fun

// 通过 call() 方法
fun.call(obj) // 100

// 通过 apply() 方法
fun.apply(obj) // 100

// 两者的区别只是接受参数的方式不同

// 使用bind
newFun = fun.bind(obj)
newFun() // 100
