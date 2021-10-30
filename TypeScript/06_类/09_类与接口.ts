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
