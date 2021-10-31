// 假如有如下需求，我们定义一个类，在类中一个私有对象，该对象中包含一些属性；然后定义一个方法，通过key来获取其对应的值

// 定义一个接口
interface Person {
  name: string
  age: number
  hobby: string
}
// // 定义一个类
// class Me {
//   constructor(private info: Person) {}
//   getInfo(key: string) {
//     return this.info[key]
//   }
// }
// const me = new Me({
//   name: '一碗周',
//   age: 18,
//   hobby: 'coding',
// })
// // 调用 me.getInfo() 可能会得到一个 undefined 如下示例
// me.getInfo('myName') // undefined

// type myPerson = keyof Person // 'name' | 'age' | 'hobby'

class Me {
  constructor(private info: Person) {}
  // 该写法与如下写法是一样的
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  }
  // getInfo<T extends 'name' | 'age' | 'hobby'>(key: T): Person[T] {
  //     return this.info[key]
  // }
}
const me = new Me({
  name: '一碗周',
  age: 18,
  hobby: 'coding',
})
// 调用 me.getInfo() 如果传递一个未知的属性则会编译错误
// me.getInfo('myName') // error : 类型“"myName"”的参数不能赋给类型“keyof Person”的参数。
export {}
