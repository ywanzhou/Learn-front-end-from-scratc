// 定义一个简单的接口
interface Person {
  name: string
}
// 定义 get 方法
function getPersonName(person: Person): void {
  console.log(person.name)
}
// 定义 set 方法
function setPersonName(person: Person, name: string): void {
  person.name = name
}
// 定义一个 person 对象
let person = {
  name: '一碗粥',
}
setPersonName(person, '一碗周')
// 修改成功
getPersonName(person) // 一碗周
