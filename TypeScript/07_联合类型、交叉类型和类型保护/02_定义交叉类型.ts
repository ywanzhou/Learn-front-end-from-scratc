// 定义三个普通接口类型
interface Name {
  name: string
}
interface Age {
  age: number
}
interface Hobby {
  hobby: string
}
// 定义一个对象，该对象为上面三个对象的联合类型
let person: Name & Age & Hobby = {
  // 如果少分配一个类型将会抛出异常
  name: '一碗周',
  age: 18,
  hobby: 'coding',
}
export {}
