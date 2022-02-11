<template>
  <h3>信息展示组件</h3>
  <div style="margin: 24px 0">
    <span>姓名：</span>
    <span>{{ data.name }}</span>
    <br />
    <span>年龄：</span>
    <span>{{ data.age }}</span>
  </div>
  <button @click="data.name = '一碗周'">修改姓名</button>
  <br />
  <button @click="data.age = '20'">修改年龄</button>
</template>
<script setup>
// 使用 <script setup> 所有的 API 需要单独引入，除 Vue3.2 自动引入的几个API外。
import { reactive } from 'vue'
// 创建响应式对象
const data = reactive({
  name: '一碗粥',
  age: '18',
})
</script>
