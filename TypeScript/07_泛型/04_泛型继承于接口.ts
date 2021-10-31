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

export {}
