var score = 88

/**
 * 需求
 * 当成绩为100分时输出 -> 你考了满分
 * 当成绩大于85分时输出 -> 你的成绩为优秀
 * 当成绩小于于85分且大于60分时输出 -> 你的成绩为良好
 * 当成绩小于60分时输出 -> 你的成绩不及格
 * 当成绩为0分时输出 -> 你的成绩居然是0分
 */
if (score === 100) {
    console.log('你考了满分')
} else if (score > 85) {
    console.log('你的成绩为优秀')
} else if (score >= 60) {
    console.log('你的成绩为良好')
} else if (score === 0) {
    console.log('你的成绩居然是0分')
} else {
    console.log('你的成绩不及格')
}