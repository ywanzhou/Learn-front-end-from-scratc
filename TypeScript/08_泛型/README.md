# 泛型

在JavaScript中，封装一个API可以具有多种用途，因为其实弱类型语言，但是就因为是弱类型可以最终得到的结果并不是我们想要的。

TypeScript的出现正好中解决了这个问题，但是考虑到API的复用时，TypeScript又显得不是这么的灵活。这个时候可以使用`any`类型来解决不灵活的问题，但是又回到JavaScript中的问题，得到最终的结果可能不是预期的那个样子。

为了解决这种情况，TypeScript推出了**泛型** 的概念，使用泛型可以在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型，这样做的目的是为了更大程度的来复用我们的代码。 

## 简单的使用

现在我们要定义一个`join`函数，该函数的功能主要是接受两个类型一样的值，返回两个参数拼接后的值。示例代码如下：

```TypeScript
// 所谓的泛型，通俗一点的解释就是泛指的类型
// 定义一个join函数，接受两个一样类型的参数，并将两个参数拼接后返回。
function join<T>(first: T, second: T) {
  return `${first}${second}`
}
// 这里明确 T 为 string 类型
join<string>('第一', '第二') // 第一第二
// 这里通过类型推导的方式，编译器会根据传入的参数自动推断出类型
join(1, 2) // 12

```


定义泛型是通过`<>`对尖括号来定义，我们在定义`join`函数的时候，并不知道可以接受那些类型，但是可以明确的是两个类型是必须一样的，如果想要满足这样的需求，不用泛型的话解决起来是没有这么简单的。

在调用函数的时候，这里使用了两种方式，一种是直接指定类型为`string`类型；另一种是通过类型推导的方式，编辑器会根据传入的参数自动帮助我们确定类型。

## 在函数中使用泛型

在定义一个函数时，我们可以使用多个泛型，而且返回值类型也可以通过泛型指定，只要在数量上和使用方式上能对应就可以。示例代码如下：

```TypeScript
function identity<T, Y, P>(first: T, second: Y, third: P): Y {
  return second
}
// 指定类型
identity<boolean, string, number>(true, '字符串', 123) // 字符串
// 类型推断
identity('string', 123, true) // true


```


## 在类中使用泛型

我们不仅可以在函数中使用泛型，还可以在类中使用泛型。示例代码如下：

```TypeScript
class DataManager<T> {
  // 定义一个类，该类中具有一个T类型的私有数组
  constructor(private data: T[]) {}
  // 根据索引说数组中的值
  getItem(index: number): T {
    return this.data[index]
  }
}
const data = new DataManager(['一碗周'])
data.getItem(0) // 一碗周

```


而且泛型还可以继承与于某个接口，示例代码如下：

```TypeScript
interface Item {
  name: string
}
class DataManager<T extends Item> {
  // 定义一个类，该类中具有一个T类型的私有数组
  constructor(private data: T[]) {}
  // 根据索引说数组中的值
  getItem(index: number): string {
    return this.data[index].name
  }
}
const data = new DataManager([{ name: '一碗周' }])
data.getItem(0) // 一碗周

```


使用`extends`可以达到一个**泛型约束** 的作用，就上面那个代码来说，我们必须约束传入的值必有具有一个`name`属性，否则就会抛出异常。

## 在泛型约束中使用类型参数

假如有如下需求，我们定义一个类，在类中一个私有对象，该对象中包含一些属性；然后定义一个方法，通过`key`来获取其对应的值。实现代码如下：

```TypeScript
// 定义一个接口
interface Person {
  name: string
  age: number
  hobby: string
}
// 定义一个类
class Me {
  constructor(private info: Person) {}
  getInfo(key: string) {
    return this.info[key]
  }
}
const me = new Me({
  name: '一碗周',
  age: 18,
  hobby: 'coding',
})
// 调用 me.getInfo() 可能会得到一个 undefined 如下示例
me.getInfo('myName') // undefined

```


上面的代码，如果我们调用示实例对象中的`getInfo()`方法时，传入一个没有的属性，会得到一个`undefined`。调用一个方法返回一个`undefined`时，这并不是TypeScript中的作风。

解决该问题可以通过`keyof`操作符，该关键字可以通过**该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。** 示例代码如下：

```TypeScript
type myPerson = keyof Person // 'name' | 'age' | 'hobby'

```


那现在就可以通过该操作符解决上面出现的那个问题。示例代码如下：

```TypeScript
class Me {
  constructor(private info: Person) {}
  // 该写法与如下写法是一样的
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  }
  // getInfo<T extends 'name' | 'age' | 'hobby'>(key: T): Person[T] {
  //     return this.info[key]
  // }
}
const me = new Me({
  name: '一碗周',
  age: 18,
  hobby: 'coding',
})
// 调用 me.getInfo() 如果传递一个未知的属性则会编译错误
me.getInfo('myName') // error : 类型“"myName"”的参数不能赋给类型“keyof Person”的参数。

```


现在我们只要访问对象中不具有的属性编译则会异常。


