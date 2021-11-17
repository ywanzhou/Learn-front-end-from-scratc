var obj = {}

// 将对象设置为禁止扩展
Object.preventExtensions(obj)

// 新增属性或方法无效，但是语法并不报错
obj.name = '一碗周'
console.log(obj)
/*
  通过 Object.defineProperty() 方法新增属性
   * 抛出异常， 提示信息： TypeError: Cannot define property: name, object is not extensible.
*/
Object.defineProperty(obj, 'name', {
  value: '一碗粥',
})
