// { name: '一碗周' } 的引用计数器 + 1
let person = {
  name: '一碗周',
}
// 又增加了一个引用，引用计数器 + 1
let man = person

// 取消一个引用，引用计数器 - 1
person = null

// 取消一个引用，引用计数器 - 1。此时 { name: '一碗周' } 的内存就会被当做垃圾回收
man = null
