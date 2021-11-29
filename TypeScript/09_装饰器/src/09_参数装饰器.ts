function required(target: any, propertyName: string, index: number) {
  console.log(`修饰的是${propertyName}的第${index + 1}个参数`)
}
class Info {
  name: string = '一碗周'
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
