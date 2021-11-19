// 自定义构造函数 -> 作用：创建对象
function Person(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
  this.print = function () {
    console.log(name + '今年' + age + '岁 性别' + sex)
  }
}
// 创建 一碗甜
var hong = new Person('一碗甜', 18, '女')
hong.print() // 一碗甜今年18岁 性别女
// 创建 一碗粥
var dong = new Person('一碗粥', 20, '男')
dong.print() //一碗粥今年20岁 性别男
