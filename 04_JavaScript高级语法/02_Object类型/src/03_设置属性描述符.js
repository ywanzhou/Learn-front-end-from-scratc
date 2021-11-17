/*
 * 通过 Object.defineProperties(obj, props) 为 obj 对象增加属性。
 * obj: 在其上定义或修改属性的对象。
 * props: 要定义其可枚举属性或修改的属性描述符的对象。
 */
let person = {}

Object.defineProperties(person, {
  name: {
    // 属性值
    value: '一碗周',
    // 可修改可删除
    configurable: true,
    // 不可枚举
    enumerable: false,
    /*
    我们知道循环遍历语句遍历对象的属性有三种方式，如下所示：
    1. for...in 语句：遍历该对象的可枚举属性
    2. Object.keys() 方法：该方法返回一个数组，该数组包含了该对象中所有自有可枚举的属性名称。
    3. Object.getOwnPropertyNames() 方法：该方法返回一个数组，该数组包含了该对象中所有属性名称。
    */
    // 设置不可枚举后就不可以通过 for...in 语句遍历到，也不可通过 Object.keys() 获取到
  },
  age: {
    value: 18,
    // 其他项不写默认为false
  },
})

/* 
* 调用Object.defineProperty(obj, prop, desc)方法
  * 作用
    * 用于定义目标对象的新属性
    * 用于修改目标对象的已存在属性
  * 参数
    * obj - 表示目标对象
    * prop - 表示目标对象的目标属性名称
    * desc - 表示属性描述符，必须是对象格式
      {
          value : 值
      }
  * 返回值 - 返回传递的对象
*/

Object.defineProperty(person, 'hobby', {
  value: 'coding',
  // 可枚举
  enumerable: true,
})
Object.defineProperty(person, 'sayMe', {
  value: function () {
    console.log('一碗周')
  },
  // 可枚举
  enumerable: true,
})
console.log(person) // { hobby: 'coding', sayMe: [Function: value] }
// 最后结果之后一个属性一个方法的原因是前面几项都不可枚举
person.sayMe() // 一碗周
