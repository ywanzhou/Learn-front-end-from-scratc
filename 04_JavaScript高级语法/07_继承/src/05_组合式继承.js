var person = {
  name: '一碗周',
  friends: ['张三', '李四', '王五'],
}

var anotherPerson = Object.create(person)
anotherPerson.name = '一碗甜'
anotherPerson.friends.push('赵六')

console.log(person.friends) // [ '张三', '李四', '王五', '赵六' ]
