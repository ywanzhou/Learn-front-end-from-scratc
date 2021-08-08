// 表示今天星期几
var date = 1

/**
 * 根据今天日期来决定吃什么
*/

switch (date) {
    case 1:
        console.log("今天吃烤鸭");
        break;
    case 2:
        console.log("今天吃酱牛肉");
        break;
    case 3:
        console.log("今天吃辣子鸡");
        break;
    case 4:
        console.log("今天吃红烧肉");
        break;
    case 5:
        console.log("今天吃土豆鸡块");
        break;
    case 6:
        console.log("今天火锅");
        break;
    case 7:
        console.log("今天吃外卖");
        break;
    default:
        console.log("您的输入有误");
        break;
}