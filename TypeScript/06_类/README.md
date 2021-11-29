# 类

## 概述

类这个概念基本是所有面向对象编程语言都具有一个概念，例如Java、Python等；在JavaScript中ES6 之前是没有类这个概念的，对于熟悉面向对象来程序猿来说有些棘手，因为他们用的都是基于类的继承，对象也是通过类创建出来的。在ES6中添加了类这个概念，虽然只是一个语法糖，但是这就可以让程序员基于类去进行操作了。在TS中也是支持类这个概念的。

## 定义一个简单的类

在TS中也是使用`class`关键字来定义一个类，示例代码如下：

```TypeScript
;(function () {
  // 定义类
  class Person {
    // 公共属性，默认可以不写
    public name: string
    // 构造函数
    constructor(name: string) {
      // 初始化name属性
      this.name = name
    }
  }
  // 实例化类
  const person = new Person('一碗周')
  console.log(person.name) // 一碗周
})()


```


上面定义的那个类中具有一个构造函数和一个公共属性`name`，在类实例化时调用了`constructor`构造函数，调用对功能属性进行初始化。

上面的写法还有一种简写形式，如下所示：

```TypeScript
;(function () {
  class Person {
    constructor(public name: string) {}
  }
  // 实例化类
  const person = new Person('一碗周')
  console.log(person.name) // 一碗周
})()

```


这个写法等同于上面那个写法。

## 继承

在面向对象的编程语言中，有一个重要得特征就是继承。继承就是基于某个类来扩展现有的类。

例如，爸爸在北京有一个四合院，儿子可以继承爸爸的四合院，而且还可以自己去买一栋别墅；最终儿子的房产拥有北京的四合院和一栋别墅。

在TS中继承使用`extends`关键字，示例代码如下：

```TypeScript
;(function () {
  // 定义一个基类，又称超类
  class Person {
    // 在基类中定义一个name属性
    constructor(public name: string) {}
  }
  // 定义一个派生类，又称子类，继承于基类
  class Programmer extends Person {
    constructor(name: string, public hobby: string) {
      // 通过 super 调用基类的构造函数
      super(name)
    }
  }
  // 实例化子类
  const programmer = new Programmer('一碗周', 'coding')
  console.log(programmer.name, programmer.hobby) // 一碗周 coding
})()


```


如上示例代码中，`Person`称作**基类** ，或者称**超类** ，`Programmer`是一个**派生类** ，或者称**子类** 。

在上面那个例子中，`Programmer`类通过`extends`关键字继承于`Person`类。子类拥有父类全部的属性和方法。

在子类的构造函数中，我们必须调用`super()`方法来执行基类的构造函数，这个是必须的。

类的继承不仅可以继承类，而且还可以在子类重写父类的属性或者方法。实例代码如下：

```TypeScript
// 定义一个 Person类
class Person {
    constructor(public name: string) {}
    // 定义一个方法
    sayMy() {
        console.log(`我的名字: ${this.name}`)
    }
}
// 定义一个 Adult 类继承于 Person 类
class Adult extends Person {
    constructor(public age: number) {
        super('彼岸繁華')
    } // 重写父类方法
    sayMy() {
        console.log(`我的名字: ${this.name} 年龄: ${this.age}`)
    }
}
// 定义一个 Programmer 类继承于 Adult 类
class Programmer extends Adult {
    constructor(public hobby: string) {
        super(18)
    } // 重写父类方法
    sayMy() {
        console.log(
            `我的名字: ${this.name} 年龄: ${this.age} 爱好: ${this.hobby}`
        )
    }
}
// 类的实例化
const programmer = new Programmer('coding')
programmer.sayMy() // 我的名字: 彼岸繁華 年龄: 18 爱好: coding

```


首先我们定义了一个`Person`类，在类中定义了一个属性和一个方法；然后又定义了一个`Adult`类，这个类继承于`Person`类，并重写了`Person`类中的方法；最后又定义了一个`Programmer`类，这个类继承于`Adult`类，并重写了`Adult`类中的方法，也就是说`Programmer`类拥有`Person`类与`Adult`类中的全部属性与方法，但是`sayMe()`方法被重写了两次，也就是说`Programmer`类拥有3个属性和1个方法。

## `public`、`private`、`protected`修饰符

`public`、`private`、`protected`修饰符的区别：

- `public`：公开的，我们可以在类中自由的访问类中定义的成员。TS默认为`public`

- `private`：私有的，仅仅可以在类中访问定义的成员，在类外访问不到

- `protected`：受保护的，可以在本类或者子类中访问定义的成员。

示例代码如下所示：

```TypeScript
// 定义一个 Person 类，其中包含 public 成员 private 成员和 protected 成员。
class Person {
  public name: string
  // 约定 私有成员一般采用 _ 开头
  private _age: number
  protected hobby: string
  // 属性初始化
  constructor(name: string, age: number, hobby: string) {
    this.name = name
    this._age = age
    this.hobby = hobby
  }
  sayMy() {
    console.log(this.name, this._age, this.hobby)
  }
}

// 实例化 Person 类
const person = new Person('一碗周', 18, 'coding')

console.log(person.name) // 一碗周
// 类外访问私有成员 抛出异常
// console.log(person._age) // 报错
// 类外访问保护成员 抛出异常
// console.log(person.hobby) // 报错

// private 成员和 protected 成员可以在类内访问
person.sayMy() // 一碗周 18 coding

// 定义一个类继承与 Person 类
class Programmer extends Person {
  constructor(name: string, age: number, hobby: string) {
    super(name, age, hobby)
  }
  sayMy() {
    console.log(this.name) // 一碗周
    // 在子类不可以访问父类的私有成员
    // console.log(this._age) // 报错
    // 在子类可以访问受保护的成员
    console.log(this.hobby) // coding
  }
}

// 实例化 Programmer 类
const programmer = new Programmer('一碗周', 18, 'coding')
programmer.sayMy()

// 确保跟其他代码中的成员冲突
export {}

```


如上代码中，我们可以在基类中访问，公共成员、私有成员和保护成员，但是我们在类外只能访问公共成员。当我们定义一个子类继承于`Person`类时，我们可以在子类访保护成员，但是不能访问私有成员。

### `getters`与`setters`

类中的私有成员和保护成员我们并不是真的不能读写，在TS中提供了`getters`与`setters`帮助我们有效的控制对对象成员的访问。

示例代码如下所示：

```TypeScript
// 定义一个 Person 类
class Person {
  // 约定 私有成员一般采用 _ 开头
  private _name: string
  // 属性初始化
  constructor(name: string) {
    this._name = name
  }
  // 获取 私有的 _name 属性值
  get getName(): string {
    return this._name
  }
  // 设置 私有的 _name 属性值
  set setName(name: string) {
    this._name = name
  }
}
// 实例化类
const person = new Person('一碗粥')
// 通过 getName 的方式获取
console.log(person.getName) // 一碗粥
// 通过 setName 的方式设置 _name 的值
person.setName = '一碗周'
// 重新获取
console.log(person.getName) // 一碗周

```


## `readonly`修饰符

我们可以通过 `readonly`修饰符将一个属性设置为只读的。只读属性必须在声明时或者在构造函数中进行初始化。示例代码如下所示：

```TypeScript
// 定义一个类，且具有一个只读属性
class Person {
  // readonly name: string
  // 等同于
  // public readonly name: string
  // constructor(name: string) {
  //     this.name = name
  // }
  // 或者
  constructor(public readonly name: string) {}
}
// 实例化
const person = new Person('一碗周')
console.log(person.name) // 一碗周
// 修改name的值
// person.name = '一碗周' // 错误! name 是只读的.

```


## 静态成员

在 TS 中我们也可以创建静态成员，这些属性或者方法是存在于类本身而不是存在于类的实例上。在 TS中定义静态成员与ES6中一样，都是使用`static`关键字来说明。

示例代码如下所示：

```TypeScript
class Hero {
  // 计数器
  static count = 0
  constructor(public name: string) {
    // 每创建一个属性 count ++
    ++Hero.count
  }
}
// 实例一个 Hero 类
const hero1 = new Hero('孙悟空')
console.log(Hero.count) // 1
const hero2 = new Hero('哪吒')
console.log(Hero.count) // 2

```


这里我们用静态属性实现了一个记录实例化几个类的一个计数器。

## 抽象类

想要理解什么是抽象类，就需要先理解什么是抽象，所谓的抽象就是从**众多的事物中抽取出共同的、本质性的特征，而舍弃其非本质的特征** 。例如苹果、香蕉、生梨、葡萄、桃子等，它们共同的特性就是水果。得出水果概念的过程，就是一个抽象的过程。

抽象类就是将众多类中具有共同部分的功能抽离出来，单独创建一个类作为其他派生类的基类使用。他们不允许被实例化，定义抽象类使用`abstract`关键字。

抽象方法就是只有方法的定义，没有方法体，方法体需要在子类中进行实现。

示例代码如下：

```TypeScript
// 通过 abstract 关键字 定义一个抽象类，该类不必进行初始化，仅作为基类使用
abstract class Department {
  // 初始化name成员，参数属性
  constructor(public name: string) {}

  printName(): void {
    console.log('部门名称: ' + this.name)
  }
  // 抽象方法必须包含 abstract 关键字
  abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('会计部') // 在派生类的构造函数中必须调用super()
  }

  printMeeting(): void {
    console.log('会计部是负责管钱的部门')
  }
}

// const department = new Department() // 抛出异常：不能创建一个抽象类的实例
// 实例化抽象子类
const department = new AccountingDepartment()
// 调用抽象类中的方法
department.printName() // 部门名称: 会计部
// 调用在派生类实现的抽象方法
department.printMeeting() // 会计部是负责管钱的部门


```


## 类与接口

类定义会创建两个东西：类的实例类型和一个构造函数，因为类可以创建出类型，这一点与我们之前学习的[接口](https://www.wolai.com/wEo6C4yQMGR8Bj16mFgVD6)类似，所以说我们可以在使用接口的地方使用类。示例代码如下所示：

```TypeScript
// 定义一个类
class Point {
    x: number
    y: number
}
// 定义一个接口继承与类
interface Point3d extends Point {
    z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }

```


类可以通过`implement`去实现一个接口，示例代码如下：

```TypeScript
// 定义接口
interface Eat {
  eat(food: string): void
}
interface Run {
  run(distance: number): void
}

// 定义类实现接口
class Person implements Eat, Run {
  eat(food: string): void {
    console.log(food)
  }
  run(distance: number) {
    console.log(distance)
  }
}
export {}

```


