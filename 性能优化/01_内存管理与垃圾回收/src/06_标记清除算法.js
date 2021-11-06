function fun() {
  const obj1 = {},
    obj2 = {},
    obj3 = {},
    obj4 = {},
    obj5 = {},
    obj6 = {}

  obj1.next = obj2

  obj2.next = obj3
  obj2.prev = obj6

  obj4.next = obj6
  obj4.prev = obj1

  obj5.next = obj4
  obj5.prev = obj6

  return obj1
}

const obj = fun()
