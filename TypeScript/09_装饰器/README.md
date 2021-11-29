# 装饰器

## 写在前面

装饰器*Decorator* 在ECMAScript中已经提案，但是目前还没有定案；在TypeScript中已经将其实现，但是这仍是一项正在试验中的特性，如果想要使用装饰器，需要在`tsconfig.json`中将`experimentalDecorators`属性，将其设置为`true`。

## 概念

### 定义

装饰器是一种新的声明，它可以作用于**类声明** 、**方法** 、**访问器** 、**属性** 以及**参数** 上。装饰器的使用采用`@`符号加一个函数名称，例如`@testDecorator`，其中，这个`testDecorator`**必须是一个函数或者** `return`**一个函数** ，这个函数在运行的时候被调用，被装饰的声明作为参数会自动传入。

**值得注意的是** ，**装饰器要紧挨着要修饰的内容的前面** ，而且所有的装饰器不能用在声明文件`.d.ts.`中，和任何外部上下文中(比如`declare`)。

装饰器的定义以及使用如下所示：

```TypeScript
// 定义一个函数作为装饰器函数使用
function testDecorator() {}

// 通过@符号使用装饰器
@testDecorator

```


### 装饰器工厂

所谓的装饰器工厂也是一个函数，与普通的装饰器函数不同的是它的返回值是一个函数，返回的函数作为装饰器调用的函数。如果使用装饰器工厂，可以在使用的时候根据当前的使用情况，传递不同的参数，但是在使用的时候，就需要加上函数调用。示例代码如下：

```TypeScript
// 装饰器工厂，返回值是一个函数
function testDecorator() {
    return function() {}
}

// 通过@符号 + 函数调用的方式使用装饰器
@testDecorator()

```


### 装饰器组合使用

装饰器是可以组合使用的，也就是说可以对用一个目标，引用多个装饰器，示例代码如下所示：

```TypeScript
// 定义两个装饰器函数
function setName() {}
function setAge() {}

// 使用装饰器
@setName
@setAge
class Person {}
```


如果使用多个装饰器，装饰器的执行是有顺序的，执行顺序如下：

- 如果使用的普通的装饰器函数的话，执行顺序是从下往上执行的，示例代码如下：

```TypeScript
function setName(constructor: any) {
  console.log('setName', constructor)
}
function setAge(constructor: any) {
  console.log('setAge', constructor)
}
@setName
@setAge
class Person {}
/* 执行结果如下：
setAge [Function: Person]
setName [Function: Person]
*/
```


- 如果是装饰器工厂的，它的执行顺序是先从上到下依次执行工厂函数，然后从下往上依次执行工厂函数`return`的函数。示例代码如下

```TypeScript
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


```


### 装饰器求值

类的定义中不同声明上的装饰器将按以下规定的顺序引用：

1. 参数装饰器，方法装饰器，访问符装饰器或属性装饰器应用到每个实例成员；

2. 参数装饰器，方法装饰器，访问符装饰器或属性装饰器应用到每个静态成员；

3. 参数装饰器应用到构造函数；

4. 类装饰器应用到类。

## 类装饰器

**类装饰器** 在类声明之前使用，必须紧挨着需要装饰的内容，类装饰器应用于类的声明。

类装饰器表达式会在运行时当做函数被调用，它有一个参数，就是这个类的构造函数。示例代码如下：

```TypeScript
let sign = null
function setName() {
  return function (constructor: Function) {
    sign = constructor
  }
}
@setName()
class Info {
  constructor() {}
}
console.log(sign === Info) // true
console.log(sign === Info.prototype.constructor) // true

```


如上代码可以知道类`Info`的原型对象的`constructor`属性指向的其实就是`Info`本身。

我们还可以通过装饰器来修改类的原型对象和构造函数，示例代码如下：

```TypeScript
// * 通过装饰器 修改原型对象与构造函数
function addName(constructor: { new (): any }) {
  constructor.prototype.name = '一碗周'
}
@addName
class Person {}
const person = new Person()
console.log(person.name) // error 类型“A”上不存在属性“name”

```


在上面的代码中，我们通过`addName`修饰符在类`Person`的原型上添加一个`name`属性，这样使得通过`Person`类实例化的对象，都可以访问`name`这个属性，但是实际上并不是这样的，这里已经抛出一个异常，想要解决这个问题，可以通过类型断言的方式，也可以通过定义一个同名接口，通过声明合并的方式解决这个问题。示例代码如下：

```TypeScript
function addName(constructor: { new (): any }) {
  constructor.prototype.name = '一碗周'
}
@addName
class Person {}
const person = new Person()
// 1. 类型断言
// console.log((person as any).name) // 一碗周

// 2. 定义同名接口，声明合并
interface Person {
  name: string
}

console.log(person.name) // 一碗周
```


而且我们还可以通过装饰器重载构造函数，示例代码如下：

```TypeScript
// * 重载构造函数
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  return class extends constructor {
    name = '一碗周'
    hobby = 'coding'
  }
}
@classDecorator
class Person {
  age = 18
  name: string
  constructor(name: string) {
    this.name = name
  }
}
const person = new Person('一碗周')
console.log(person)
/* 执行结果如下：
{
  age: 18,
  name: '一碗周',
  hobby: 'coding',
}
*/

```


我们还可以通过装饰器工厂的方式来传递参数，示例代码如下：

```TypeScript
// 定义一个装饰器工厂
function classDecorator(_name: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      name = _name
      hobby = 'coding'
    }
  }
}
@classDecorator('一碗周')
class Person {
  age = 18
  name: string
  constructor(name: string) {
    this.name = name
  }
}
const person = new Person('一碗粥')
console.log(person)
/* 执行结果如下：
{
  age: 18,
  name: '一碗周',
  hobby: 'coding',
}
*/

```


## 方法装饰器

方法装饰器用来处理类中的方法，它可以处理方法的属性描述符(关于什么是属性描述符，请参考[Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty))，也可以处理方法定义。方法装饰器在运行时也是被当做函数调用，其包含三个参数，具体如下所示：

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

2. 成员的名字。

3. 成员的*属性描述符* 。

值得注意的是如果代码输出目标版本小于`ES5`，*属性描述符* 将会是`undefined`。

如下代码通过装饰器工厂定义了一个简单的方法装饰器，示例代码如下：

```TypeScript
// 装饰器工厂
function enumerable(bool: boolean) {
  /**
   * 方法装饰器接受三个参数：
   * 1. target：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
   * 2. propertyName：成员的名字
   * 3. descriptor：属性描述符，其类型为 PropertyDescriptor
   */
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) {
    // 根据传入的bool决定该方法是否可枚举
    descriptor.enumerable = bool
  }
}
class Info {
  constructor(public name: string) {}
  @enumerable(false)
  getName() {
    return this.name
  }
}
const info = new Info('一碗周')
// 如果直接打印，该对象中不包含 getName() 方法，因为该方法是不可枚举的。
console.log(info) // { name: '一碗周' }
// 但是可以调用该方法
console.log(info.getName()) // 一碗周

```


在上面的代码中，我们直接通过装饰器对类中的方法的属性描述符进行了修改。

如果方法装饰器返回一个值，那么会用这个值作为方法的属性描述符对象，示例代码如下：

```TypeScript
// 装饰器工厂
function enumerable(bool: boolean) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) {
    return {
      value: function () {
        return 'Error: name is undefined'
      },
      enumerable: bool,
    }
  }
}
class Info {
  constructor(public name: string) {}
  @enumerable(false)
  getName() {
    return this.name
  }
}
const info = new Info('一碗周')
console.log(info) // { name: '一碗周' }
console.log(info.getName()) // Error: name is undefined

```


在上面的代码中，我们的方法装饰器中返回了一个对象，该对象的`value`属性修改了方法的定义，所以最终看到的结果为`Error: name is undefined`。

## 访问器装饰器

访问器装饰器就是之前所学习的`set`和`get`方法，一个在设置属性值的时候触发，一个在获取属性值的时候触发。

访问器装饰器同样也接受三个参数，与方法装饰器一样，这里不做赘述了，示例代码如下：

```TypeScript
function enumerable(bool: boolean) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = bool
  }
}
class Info {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  @enumerable(false)
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name
  }
}

```


值得注意的是，在TypeScript不允许同时装饰一个成员的`get`和`set`访问器。

## 属性装饰器

属性装饰器声明在属性声明之前，它有两个参数，如下所示：

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

2. 成员的名字。

示例代码如下：

```TypeScript
function printPropertyName(target: any, propertyName: string) {
  console.log(propertyName)
}
class Info {
  @printPropertyName
  name: string
  @printPropertyName
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
new Info('一碗周', 18)

```


执行结果如下：

```PowerShell
name
age
```


## 参数装饰器

参数装饰器具有三个参数，具体如下：

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

2. 成员的名字。

3. 参数在函数参数列表中的索引。

参数装饰器的作用是用于监视一个方法的参数是否被传入，参数装饰器的返回值会被忽略。示例代码如下：

```TypeScript
function required(target: any, propertyName: string, index: number) {
    console.log(`修饰的是${propertyName}的第${index + 1}个参数`)
}
class Info {
    name: string = '彼岸繁華'
    age: number = 18
    getInfo(prefix: string, @required infoType: string): any {
        return prefix + ' ' + this[infoType]
    }
}
interface Info {
    [key: string]: string | number | Function
}
const info = new Info()
info.getInfo('', 'age') // 修饰的是getInfo的第2个参数

```


这里我们在`getInfo`方法的第二个参数之前使用参数装饰器，从而可以在装饰器中获取到一些信息。


