function max (arr) {
    var max = arr[0];  // 用于记录最大的数字
    for (i in arr) {   // 遍历数组
        if (arr[i] > max) {//如果当前数字大于之前的数字就进行替换
            max = arr[i];
        }
    }
    return max
}
var arr = [1, 45, 56, 235, 65, 135, 11]
var result = max(arr)
console.log(result) // 235