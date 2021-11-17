var obj = {
  name: '一碗周',
}
// 封闭对象
Object.seal(obj)
// 新增属性
obj.age = 18
console.log(obj) // 无效，但是并不报错
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// 修改属性描述符
Object.defineProperty(obj, 'name', {
  configurable: true, // 抛出异常 TypeError: Cannot redefine property: name
})

console.log(Object.isSealed()) // true
