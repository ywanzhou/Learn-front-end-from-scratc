;(function () {
  interface Person {
    // 将 name 设置为只读
    readonly name: string
  }
  // 定义一个 person 对象
  let person = {
    name: '一碗周',
  }
  // 定义 set 方法
  function setPersonName(person: Person, name: string): void {
    // person.name = name // Cannot assign to 'name' because it is a read-only property.
  }
  setPersonName(person, '一碗粥')
})()
