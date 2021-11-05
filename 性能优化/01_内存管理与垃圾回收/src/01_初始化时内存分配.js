let num = 123 // 给数值变量分配内存
let str = '一碗周' // 给字符串分配内存

let obj = {
  name: '一碗周',
  age: 18,
} // 给对象及其包含的值分配内存

// 给数组及其包含的值分配内存（类似于对象）
let arr = [1, null, 'abc']

function fun(a) {
  return a + 2
} // 给函数（可调用的对象）分配内存

// 函数表达式也能分配一个对象
Element.addEventListener(
  'click',
  event => {
    console.log(event)
  },
  false,
)

// 有些时候的定义变量是不会重新分配内存的

let arr2 = [arr[0], arr[2]]
// 这里并不会重新对分配内存，而是直接存储原来的那份内存
