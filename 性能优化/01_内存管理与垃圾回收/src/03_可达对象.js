function groupObj(obj1, obj2) {
  obj1.next = obj2
  obj2.prev = obj1

  return {
    obj1,
    obj2,
  }
}

let obj = groupObj({ name: '大明' }, { name: '小明' })

delete obj.obj1

delete obj.obj2.prev
