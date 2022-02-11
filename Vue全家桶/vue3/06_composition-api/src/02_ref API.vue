<template>
  <h3>信息展示组件</h3>
  <div style="margin: 24px 0">
    <span>姓名：</span>
    <!-- 在模板中，Vue 会自动帮助我们为 ref 进行解包，所以不需要使用 ref.value 的形式 -->
    <span>{{ name }}</span>
    <br />
    <span>年龄：</span>
    <span>{{ age }}</span>
  </div>
  <button @click="handleEditName">修改姓名</button>
  <br />
  <button @click="handleEditAge">修改年龄</button>
</template>
<script setup>
// 导入 ref
import { ref } from 'vue'
// 创建响应式对象
const name = ref('一碗粥')
const age = ref('18')
const handleEditName = () => {
  // 通过 ref 创造的响应式对象，我们需要通过 ref.value 的方式访问
  name.value = '一碗周'
}
const handleEditAge = () => {
  age.value = '20'
}
</script>
