var person = {
  name: '一碗周',
  friends: ['张三', '李四', '王五'],
}

function createAnother(original) {
  var clone = Object.create(original) // 通过调用 object() 函数创建一个新对象
  clone.sayMe = function () {
    // 以某种方式来增强对象
  }
  return clone // 返回这个对象
}

var anotherPerson = createAnother(person)
anotherPerson.sayMe()
