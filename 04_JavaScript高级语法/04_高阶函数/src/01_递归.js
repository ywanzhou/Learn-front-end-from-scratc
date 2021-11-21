var v = 1 // 出口条件
function fun() {
  console.log('第' + v + '次调用函数')
  v++
  if (v <= 3) {
    fun()
  }
}
fun()
