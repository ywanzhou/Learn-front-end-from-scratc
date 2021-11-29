function printPropertyName(target: any, propertyName: string) {
  console.log(propertyName)
}
class Info {
  @printPropertyName
  name: string
  @printPropertyName
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
new Info('一碗周', 18)
export {}
