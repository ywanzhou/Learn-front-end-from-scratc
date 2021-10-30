;(function () {
  // 定义一个简单的接口
  interface Person {
    name: string
    // 说明 age 是可选的
    age?: number
  }
  // 定义一个 person 对象
  let person = {
    name: '一碗周',
    age: 18,
    hobby: 'coding',
  }
  // 定义 get 方法
  function getPersonName(person: Person): void {
    // console.log(person.age, person.hobby) //  Property 'hobby' does not exist on type 'Person'.
  }
})()
