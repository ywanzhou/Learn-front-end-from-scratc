function fun() {
  const obj1 = {}
  const obj2 = {}
  obj1.next = obj2
  obj2.prev = obj1
  return '一碗周'
}
fun()
