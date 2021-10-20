# Symbol类型

## 写在前面

`Symbol`是JavaScript中**提供的第七种数据类型** ，前面六种分别是`string`、`number`、`boolean`、`null`、`undefined`和`广义的Object`，在ECMAScript2020的时候引入了第八种数据类型，即`BigInt`。

`Symbol`类型的出现帮助了我们即将属性命名冲突的问题，通过这篇文章我们来学习一下这个数据类型。

## Symbol的语法

### 基础语法

`Symbol`的语法比较简单，就是直接一个`Symbol()`函数，还函数有个参数，是一个可选的字符串即`Symbol`的描述。下面的代码演示的Symbol类型的创建：

```JavaScript
/**
 * 语法
 * Symbol([description])
 * * description -> 是一个可选的描述信息
 */
// 创建一个 Symbol 类型的值
const mySymbol = Symbol()
console.log(mySymbol) // Symbol()

const myName = Symbol('一碗周')
console.log(typeof myName) // symbol
```


还有一点需要说的就是没有两个`symbol`的值是相等的，我们看下面这个代码：

```JavaScript
console.log(Symbol() === Symbol()) // false 
console.log(Symbol('一碗周') === Symbol('一碗周')) /// false
```


`Symbol`还有一个特性就是**可以用作对象的属性名** ；如果我们拿`Symbol`作为对象的key，就**不会出现属性名命名冲突的情况。** 示例代码如下所示：

```JavaScript
const myName = Symbol('一碗周')

const person = {
  // 值得注意的是使用 Symbol 作为属性名的时候，需要使用计算属性名的方式，即 Symbol 使用 [] 包裹
  [myName]: '一碗周'
}

console.log(person[myName]) // 一碗周

```


使用`Symbol`作为属性名还有一个特性就是无法使用常规的方式来访问，如下代码展示：

```JavaScript
console.log(Object.keys(person)) // []
console.log(JSON.stringify(person)) // {}
```


这不代表不可以访问，需要使用`Object`提供的`getOwnPropertySymbols()`方法来访问，如下代码：

```JavaScript
console.log(Object.getOwnPropertySymbols(person)) // [ Symbol(一碗周) ]
```


除了`Object.getOwnPropertySymbols()`外还可以通过`Reflect`提供的`ownKeys()`方法，也是可以访问的，如下代码：

```JavaScript
console.log(Reflect.ownKeys(person)) // [ Symbol(一碗周) ]
```


### for与keyFor

`Symbol`提供的`for()`和`keyFor()`用于创建和读取在全局注册的`Symbol`，在使用`for()`方法是会先查找是否存在，如果存在就创建否则直接返回。

如下代码展示了`for()`与`keyFor()`的用法：

```JavaScript
let myName = Symbol.for("myName");
let object = {
  [myName]: "一碗周"
};

console.log(object[myName]);       // "一碗周"
console.log(myName);               // "Symbol(myName)"

let myName2 = Symbol.for("myName");

// 这里的相等是因为 myName2 的 Symbol.for("myName") 已经是创建好的。myName 和 myName2 指向的是同一块内存地址
console.log(myName === myName2);      // true


console.log(object[myName2]);      // "一碗周"
console.log(myName2);              // "Symbol(myName)"


// keyFor用于读取，未读取到返回undefined

console.log(Symbol.keyFor(myName));    // "myName"

console.log(Symbol.keyFor(myName2));   // "myName"

let myName3 = Symbol("myName");

console.log(Symbol.keyFor(myName3));   // undefined
```


## 使用场景

Symbol的主要应用场景有两个，分别是解决命名冲突和用作私有属性，我们分别来看：

### 作为私有属性

代码如下：

```JavaScript
function getObj () {
  const myName = Symbol('name');
  const obj = {};
  obj[myName] = '一碗周';
  return obj;
}

const obj = getObj();

Object.keys(obj); // []

// 除非有这个 symbol 的引用，否则无法访问该属性
obj[Symbol('name')]; // undefined

```


### 解决命名冲突

代码如下：

```JavaScript
const cache = {}
// a.js
cache['foo'] = 123
// b.js
cache['foo'] = 234

console.log(cache) // { foo: 234 }
// ==============================================
// a.js
cache['a_foo'] = 123
// b.js
cache['b_foo'] = 234

console.log(cache) // { foo: 234, a_foo: 123, b_foo: 234 }
```


## 写在最后

`Symbol`作为JavaScript支持的第七种数据类型，它给我的感受就是优化了js中的私有属性，还有一个就是提供`Symbol.iterator`来定义迭代器，其他的用法我目前是没有接触到。


