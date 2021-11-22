function Parent() {
  // 父级对象

  this.parent = 'parent'
}

Parent.prototype.name = '一碗周' // 为 Parent 父级对象的原型增加属性

function Child() {
  // 子级对象

  this.child = 'child'

  Parent.call(this) // 使用 call() 或者 apply() 方法调用父级构造函数 实现继承。
}

const child = new Child()

console.log(child)

console.log(child.name) // undefined     // 不会继承父类的原型
