// // 装饰器工厂
// function enumerable(bool: boolean) {
//   /**
//    * 方法装饰器接受三个参数：
//    * 1. target：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//    * 2. propertyName：成员的名字
//    * 3. descriptor：属性描述符，其类型为 PropertyDescriptor
//    */
//   return function (
//     target: any,
//     propertyName: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     // 根据传入的bool决定该方法是否可枚举
//     descriptor.enumerable = bool
//   }
// }
// class Info {
//   constructor(public name: string) {}
//   @enumerable(false)
//   getName() {
//     return this.name
//   }
// }
// const info = new Info('一碗周')
// // 如果直接打印，该对象中不包含 getName() 方法，因为该方法是不可枚举的。
// console.log(info) // { name: '一碗周' }
// // 但是可以调用该方法
// console.log(info.getName()) // 一碗周

// 装饰器工厂
function enumerable(bool: boolean) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) {
    return {
      value: function () {
        return 'Error: name is undefined'
      },
      enumerable: bool,
    }
  }
}
class Info {
  constructor(public name: string) {}
  @enumerable(false)
  getName() {
    return this.name
  }
}
const info = new Info('一碗周')
console.log(info) // { name: '一碗周' }
console.log(info.getName()) // Error: name is undefined

export {}
