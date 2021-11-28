# Reflect

## 概述

Reflect是ECMAScript2015提供的一个对象，它提供了一些拦截JavaScript操作的静态方法，这些方法与[Proxy](https://www.wolai.com/hTR31KxAdpgWvBafuj7xuF)中的`handlers`中的方法一致。

Reflect并不是一个构造函数，也就是说它不能够被实例化。

`Proxy`对象中的每一个拦截操作（例如：`get`、`delete`等）,内部都对应的调用了`Reflect`的方法。它提供的静态方法与[Proxy](https://www.wolai.com/hTR31KxAdpgWvBafuj7xuF)中的`handlers`中的方法名称都一致，具体如下：

|默认调⽤|功能|
|---|---|
|`Reflect.get()`|获取对象身上某个属性的值|
|`Reflect.set()`|在对象上设置属性|
|`Reflect.has()`|判断一个对象是否存在某个属性|
|`Reflect.deleteProperty()`|删除对象上的属性|
|`Reflect.getPrototypeOf()`|获取指定对象原型的函数|
|`Reflect.setPrototypeOf()`|设置或改变对象原型的函数|
|`Reflect.isExtensible()`|判断一个对象是否可扩展 （即是否能够添加新的属性）|
|`Reflect.preventExtensions()`|阻止新属性添加到对象|
|`Reflect.getOwnPropertyDescriptor()`|获取给定属性的属性描述符|
|`Reflect.defineProperty()`|定义或修改一个对象的属性|
|`Reflect.ownKeys()`|返回由目标对象自身的属性键组成的数组|
|`Reflect.apply()`|对一个函数进行调用操作，同时可以传入一个数组作为调用参数|
|`Reflect.construct()`|对构造函数进行 `new`操作，实现创建类的实例|



## 静态方法

现在我们就来以此使用这些静态方法

### get

`Reflect.get()`方法的语法结构如下：

```JavaScript
Reflect.get(target, key)
```


该方法的作用是从`target`对象中获取属性为`key`的值，示例代码如下：

```JavaScript
const person = {
    name: '一碗周'
}

console.log(Reflect.get(person, 'name')) // 一碗周

```


> **值得注意的是** ，如果`target`不是一个对象则会抛出异常


### set

`Reflect.set()`方法的语法如下：

```JavaScript
Reflect.set(target, key, value)
```


该方法的作用是为`target`对象中的`key`属性设置`key`值，并返回一个布尔值，表示是否设置成功。

示例代码如下：

```JavaScript
const person = {}

console.log(Reflect.set(person, 'name', '彼岸繁華')) // true
```


> **值得注意的是** ，如果`target`不是一个对象则会抛出异常


### has

`Reflext.has()`方法的语法结构如下：

```JavaScript
Reflect.has(target, key)
```


该方法用于检测属性`key`是不是属于`target`对象中的属性，并返回一个布尔值，表示是否包含。

示例代码如下：

```JavaScript
const person = {
    name: '一碗周'
}


console.log(Reflect.has(person, 'name')) // true
console.log(Reflect.has(person, 'hobby')) // false
```


### deleteProperty

`Reflect.deleteProperty()`方法的语法结构如下：

```JavaScript
Reflect.deleteProperty(target, key)
```


该方法用于删除`target`对象的`key`属性，并返回一个是否删除成功的布尔值，示例代码如下：

```JavaScript
const person = {
    name: '一碗周',
    hobby: 'coding'
}


console.log(Reflect.deleteProperty(person, 'hobby')) // true
console.log(Reflect.has(person, 'hobby')) // false
console.log(person) // { name: '一碗周' }
```


### getPrototypeOf

`Reflect.getPrototypeOf(target)`方法的作用是用于获取`target`对象的原型，示例代码如下：

```JavaScript
const person = {
    name: 一碗周',
    hobby: 'coding'
}

// 获取person的原型
const proto = Reflect.getPrototypeOf(person)
console.log(proto) // [Object: null prototype] {}
```


### setPrototypeOf

`Reflect.setPrototypeOf()`方法的语法结构如下：

```JavaScript
Reflect.setPrototypeOf(target, prototype)
```


该方法的作用是将`target`对象的原型修改为`prototype`并返回一个是否修改成功的布尔值。示例代码如下：

```JavaScript
class sayMe {
}

// 设置在原型上设置一个方法
sayMe.prototype.print = function () {
    console.log('一碗周');
}

const person = {
    name: '一碗周',
    hobby: 'coding'
}


const proto = Reflect.setPrototypeOf(person, sayMe)
console.log(proto) // true

// 可以调用原型上面的方法
person.prototype.print() // 彼岸繁華

```


### preventExtensions和isExtensible

`Reflect.preventExtensions()`方法用于将`target`对象变成一个不可扩展的对象，返回一个布尔值表示是否设置成功。

`Reflect.isExtensible(target)`方法用于判断`target`对象是否可以扩展，即可以不可以添加新的属性，该方法的返回值为一个布尔值，表示对象是否可以扩展。

示例代码如下：

```JavaScript
const person = {
    name: '一碗周',
    hobby: 'coding'
}
console.log(Reflect.isExtensible(person)) // true

// 通过Object.preventExtensions()将对象变成不可扩展对象
Object.preventExtensions(person)


console.log(Reflect.isExtensible(person)) // false
```


### getOwnPropertyDescriptor

`Reflect.getOwnPropertyDescriptor()`方法的语法结构如下：

```JavaScript
Reflect.getOwnPropertyDescriptor(target, key)
```


该方法会返回`target`对象上一个自有属性`key`对应的属性描述符（所谓的自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）。

示例代码如下：

```JavaScript
const person = {
    name: '一碗周',
    hobby: 'coding'
}
console.log(Reflect.getOwnPropertyDescriptor(person, 'name')) // { value: '一碗周', writable: true, enumerable: true, configurable: true }

```


### defineProperty

`Reflect.defineProperty()`方法的语法结构如下：

```JavaScript
Reflect.defineProperty(target, key, attributes)
```


该方法的作用是修改或者定义`target`对象中的`key`属性的属性描述符，`attributes`表示一个属性描述符对象。

> 属性描述符中具有四个值，分别是
`value`： 该属性对应的值
`writable`：是否可写
`configurable`：是否可改变
`enumerable`：是否可枚举


示例代码如下：

```JavaScript
const person = {
    name: '一碗周',
    hobby: 'coding'
}
Reflect.defineProperty(person, 'name', {
    writable: false
})
person.name = '一碗粥'

// name 修改失败
console.log(person);
```


### ownKeys

`Reflect.ownKeys(target)`方法返回`target`对象中的自有属性键组成的数组，示例代码如下：

```JavaScript
const person = {
    name: '一碗周',
    hobby: 'coding'
}
console.log(Reflect.ownKeys(person)) // [ 'name', 'hobby' ]
```


### apply

`Reflect.apply()`的语法结构如下：

```JavaScript
Reflect.apply(func, thisArg, args)
```


该函数的功能是调用`func`函数，传递一个`args`实参列表，该参数是一个类数组对象；`thisArg`表示调用时的`this`对象。

该方法等同于`Function.prototype.apply.call(func, thisArg, args)`

示例代码如下：

```JavaScript
const person = {
    name: '一碗周',
    sayMe: function () {
        console.log(this.name);
    }
}
// 注意：即使没有参数，第三个参数也必须传递
Reflect.apply(person.sayMe, person, [])
```


> **值得注意的是** ，即使没有第三个参数，也需要传递一个空的数组进去


### construct

`Reflect.construct()`方法的作用实际上是创建一个实例对象，该方法的语法结构如下：

```JavaScript
Reflect.construct(target, argumentsList[, newTarget])
```


参数说明：

- `target`：表示可以被运行的构造函数

- `argumentsList`：表示被构造函数调用时的参数，这个是一个类数组对象

- `newTarget`：这是一个可选的，表示新创建对象的原型原型对象的`constructor`属性，默认值为`target`

示例代码如下：

```JavaScript
function Person (name, hobby) {
    this.name = name
    this.hobby = hobby
    this.sayMe = function () {
        console.log(`${this.name}喜欢${this.hobby}`);
    }
}

// 通过Reflect.construct() 实例化一个对象
const person = Reflect.construct(Person, ['一碗周', 'coding'])

person.sayMe() // 一碗周喜欢coding

```


## 总结

`Reflect`对象提供哪些静态方法，都是可以通过另一种方式来完成的，那为什么还要提供一个`Reflect`对象呢？

这是因为前面的那十三种操作，可能来自不同的对象里面的方法，有全局的、有`Object`的、有`Function`的，但是提供了`Reflect`对象之后就将前面所有的操作**统一到了一个对象下面** ，**也统一了操作方式** 。
