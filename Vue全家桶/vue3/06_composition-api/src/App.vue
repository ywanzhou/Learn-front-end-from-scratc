<template>
  <pre>{{ user }}</pre>
</template>
<script setup>
// 引入 computed 方法
import { ref, computed } from 'vue'
const name = ref('一碗周')
const age = ref('18')
// 定义计算属性
const user = computed(() => {
  return `姓名：${name.value}\n年龄：${age.value}`
})
</script>
