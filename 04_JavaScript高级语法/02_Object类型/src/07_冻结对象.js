var obj = {
  name: '一碗粥',
}

// 冻结对象
Object.freeze(obj)
// 修改属性
obj.name = '一碗周'
// 新增属性
obj.age = 18

console.log(obj) // 无效，但是并不报错
// 修改属性描述符
Object.defineProperty(obj, 'name', {
  value: '掘金', // 抛出异常 TypeError: Cannot redefine property: name
})

// 一个冻结的对象既是一个密封对象，也是一个不可扩展对象。
console.log(Object.isFrozen()) // true
console.log(Object.isExtensible()) // false
console.log(Object.isSealed()) // true
