# 接口

TS的核心原则之一就是对所具有的**结构** 进行类型检查。接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

最终被编译成JavaScript代码后不包含接口以及类型约束的代码。

## 接口的定义

接口的作用于`type`关键字类似，但是又不一样。`type`可以定义简单的数据类型，例如如下代码

```TypeScript
type str = string
```


这种写法就不能应用在 接口 中，接口中只能写函数类型和类类型还有数组类型。

在TS中定义接口使用`interface`关键字。

示例代码如下所示：

```TypeScript
// 定义一个简单的接口
interface Person {
  name: string
}
// 定义 get 方法
function getPersonName(person: Person): void {
  console.log(person.name)
}
// 定义 set 方法
function setPersonName(person: Person, name: string): void {
  person.name = name
}
// 定义一个 person 对象
let person = {
  name: '一碗粥',
}
setPersonName(person, '一碗周')
// 修改成功
getPersonName(person) // 一碗周


```


`Person` 接口就像是一个名字，它用来描述使用该接口中的要求，例如此接口中需要一个`name`属性，且类型为`string`类型。

> 值得注意的是，类型检查并不会检查属性的顺序，只需要对应你的属性存在，且类型相同即可。


## 属性

### 可选属性

如果接口中的某个属性是可选的，或者说仅仅在某个条件下存在，可以在属性名旁边加一个`?`号。示例代码如下：

```TypeScript
;(function () {
  // 定义一个简单的接口
  interface Person {
    name: string
    // 说明 age 是可选的
    age?: number
  }
  // 定义一个 person 对象
  let person = {
    name: '一碗周',
    age: 18,
    hobby: 'coding',
  }
  // 定义 get 方法
  function getPersonName(person: Person): void {
    // console.log(person.age, person.hobby) //  Property 'hobby' does not exist on type 'Person'.
  }
})()


```


> 此时的`sex`属性我们可写可不写，但是`hobb` 属性，由于没有在接口中定义，我们调用会抛出异常。


### 只读属性

如果想让一个属性为一个只读属性，仅仅需要在属性前面添加`readonly`即可。示例代码如下：

```TypeScript
;(function () {
  interface Person {
    // 将 name 设置为只读
    readonly name: string
  }
  // 定义一个 person 对象
  let person = {
    name: '一碗周',
  }
  // 定义 set 方法
  function setPersonName(person: Person, name: string): void {
    person.name = name // Cannot assign to 'name' because it is a read-only property.
  }
  setPersonName(person, '一碗粥')
})()

```


## 类类型

### 继承接口

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

接口继承使用`extends`关键字，示例代码如下：

```TypeScript
// 定义两个接口
interface PersonName {
  name: string
}
interface PersonAge {
  age: number
}

// 定义一个 Person 接口继承于以上两个接口 多个接口使用 , 逗号分割
interface Person extends PersonName, PersonAge {
  hobby: string
  // 定义一个方法，返回值为 string
  say(): string
}
let person = {
  name: '一碗周',
  age: 18,
  hobby: 'coding',
  // 示例方法
  say() {
    return '一碗周'
  },
}
// 定义 get 方法
function getPersonName(person: Person): void {
  console.log(person.name, person.age, person.hobby)
}
getPersonName(person) // 一碗周 18 coding


```


> 继承多个接口中间使用`,`逗号分割。


## 函数类型

在TS中接口还可以对函数类型的接口进行描述。

函数类型接口的定义就像是一个只有参数列表和返回值类型的函数定义，参数列表中**每个参数都需要名字和类型** 。示例代码如下所示：

```TypeScript
interface MyAdd {
    (x: number, y: number): number
}
```


定义完成之后我们可以像使用普通接口一样使用这个函数接口。示例代码如下所示：

```TypeScript
let myAdd: MyAdd = (x: number, y: number): number => {
    return x + y
}
```


上面的代码等同于如下函数定义的代码：

```TypeScript
let myAdd: (x: number, y: number) => number = (
    x: number,
    y: number
): number => {
    return x + y
}
```


