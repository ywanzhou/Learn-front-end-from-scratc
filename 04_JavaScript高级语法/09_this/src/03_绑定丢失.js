var obj = {
  v: 100,
  fun: function () {
    console.log(this.v)
  },
}
var fun = obj.fun
fun() //undefined

var person = {
  name: '一碗周',
  sayMe: function () {
    console.log(this.name)
  },
}
setTimeout(person.sayMe) // undefined
