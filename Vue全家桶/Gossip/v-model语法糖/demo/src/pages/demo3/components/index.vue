<!--
 * @Description: 演示v-model在组件中的应用
 * @Author: Zhou
 * @Date: 2021-10-19 21:21
 * @LastEditTime: 2021-10-20 00:05
 * @LastEditors: Zhou
 * @FilePath: \Learn-front-end-from-scratc\Vue全家桶\Gossip\v-model语法糖\demo\src\pages\demo3\components\index.vue
-->
<template>
  <div>
    <table>
      <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
      </tr>
      <tr v-for="(item, index) in array" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.sex }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </table>
    <button @click="handleClick">添加一个人</button>
  </div>
</template>

<script>
export default {
  props: {
    array: {
      type: Array,
      default: null
    }
  },
  model: {
    prop: 'array',
    event: 'change'
  },
  methods: {
    handleClick () {
      let arr = this.array
      arr.push({
        name: '张三',
        sex: '男',
        age: '18'
      })
      this.$emit('change', arr)
    }
  },

}
</script>

<style>
/* 样式省略 */
table {
  width: 500px;
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  height: 40px;
  text-align: center;
  border: 1px solid #c9c9c9;
}
button {
  display: block;
  cursor: pointer;
  background: lightcoral;
  border: 1px solid #dcdfe6;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 24px auto 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>