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
