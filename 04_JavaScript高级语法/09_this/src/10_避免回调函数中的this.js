var v = 100

var obj = {
  v: 200,
  f: function () {
    console.log(this.v)
  },
}

function fn(f) {
  f()
}
fn(obj.f) //100
