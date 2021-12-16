// 导入默认成员
// import sayMe from './component/module_e.js'
// 或者通过 as 关键字对导入的默认成员进行重命名
// import { default as sayMe } from './component/module_e.js'
// 导入指定成员
// import { name } from './component/module_e.js'

// 也可以将上面两行合并为1行，示例代码如下：
// import { default as sayMe, name } from './component/module_e.js'
// 或者简写如下：
import sayMe, { name } from './component/module_e.js'

sayMe()
console.log(name)
name = '1'
