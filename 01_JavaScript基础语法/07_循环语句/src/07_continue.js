var num = 5
for (var i = 0; i <= 10; i++) {
    if (i === num) {
        console.log('你的数字为：' + num);
        // 使用continue关键字 结束本次循环
        continue
    }
    console.log("代码执行了" + i + "次");
}