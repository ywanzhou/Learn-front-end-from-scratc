function ParentClass() {
  this.colors = ['red', 'blue', 'green']
}
function ChildClass() {}

ChildClass.prototype = new ParentClass()

var child1 = new ChildClass()
var child2 = new ChildClass()
console.log(child1.colors) // [ 'red', 'blue', 'green' ]

child2.colors.push('black')
console.log(child2.colors) // [ 'red', 'blue', 'green', 'black' ]

console.log(child1.colors) // [ 'red', 'blue', 'green', 'black' ]
