/*
 * 判断闰年的条件
 * 1. 能被4整除，但不能被100整除。
 * 2. 能被4整除，也能被400整除。

 */
function Leap (year) {
    var flag = false; // 标志位，如果是就返回true
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        flag = true;
    }
    return flag;
}
console.log(Leap(2000));  // true
console.log(Leap(1580));  // true
console.log(Leap(2020));  // true
console.log(Leap(2051));  // false