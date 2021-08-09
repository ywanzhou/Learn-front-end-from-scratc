var num = 5
for (var i = 0; i <= 10; i++) {
    if (i === num) {
        console.log('你的数字为：' + num);
    }
    console.log("代码执行了" + i + "次");
}
for (var i = 0; i <= 10; i++) {
    if (i === num) {
        console.log('你的数字为：' + num);
        // 使用break关键字 跳出循环
        break
    }
    console.log("代码执行了" + i + "次");
}