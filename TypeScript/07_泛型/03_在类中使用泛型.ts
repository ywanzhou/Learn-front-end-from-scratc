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
