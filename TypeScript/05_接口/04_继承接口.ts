// 定义两个接口
interface PersonName {
  name: string
}
interface PersonAge {
  age: number
}

// 定义一个 Person 接口继承于以上两个接口 多个接口使用 , 逗号分割
interface Person extends PersonName, PersonAge {
  hobby: string
  // 定义一个方法，返回值为 string
  say(): string
}
let person = {
  name: '一碗周',
  age: 18,
  hobby: 'coding',
  // 示例方法
  say() {
    return '一碗周'
  },
}
// 定义 get 方法
function getPersonName(person: Person): void {
  console.log(person.name, person.age, person.hobby)
}
getPersonName(person) // 一碗周 18 coding
