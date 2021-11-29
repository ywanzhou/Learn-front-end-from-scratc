// function setName(constructor: any) {
//   console.log('setName', constructor)
// }
// function setAge(constructor: any) {
//   console.log('setAge', constructor)
// }
// @setName
// @setAge
// class Person {}
// /* 执行结果如下：
// setAge [Function: Person]
// setName [Function: Person]
// */

// 如果是装饰器工厂的，它的执行顺序是先从上到下依次执行工厂函数，然后从下往上依次执行工厂函数return的函数。
function setName() {
  console.log('get setName')
  return function (constructor: any) {
    console.log('setName', constructor)
  }
}
function setAge() {
  console.log('get setAge')
  return function (constructor: any) {
    console.log('setAge', constructor)
  }
}
@setName()
@setAge()
class Person {}
/* 执行结果如下：
get setName
get setAge
setAge [Function: Person]
setName [Function: Person]
*/
