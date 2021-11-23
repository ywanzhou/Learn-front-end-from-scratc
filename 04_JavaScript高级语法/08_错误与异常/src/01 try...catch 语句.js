try {
  // 用于测试有没有出错的代码块
  console.log(v); // 此时v没有定义将会抛出异常
} catch (error) {
  // 抛出异常将执行此代码块
  console.log("上述代码有错误");
}