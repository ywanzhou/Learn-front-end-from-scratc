// 父级对象
function Parent() {
  this.parent = 'parent'
}
// 为 Parent 父级对象的原型增加属性
Parent.prototype.name = '一碗周'
// 子级对象
function Child() {
  this.child = 'child'
  // 使用 call() 或者 apply() 方法调用父级构造函数 实现继承。
  Parent.call(this)
}
// 解决不会继承构造函数的原型对象的问题
Child.prototype = Parent.prototype

const child = new Child()
console.log(child.name) // 一碗周
