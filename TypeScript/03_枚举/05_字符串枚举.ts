enum Person {
  name = '一碗周',
  hobby = 'coding',
  // 设置枚举中的字段作为值
  myName = name,
}
console.log(Person.name, Person.myName) // 一碗周 一碗周
