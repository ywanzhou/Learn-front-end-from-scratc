<template>
  <input type="text" v-model="myName" />
</template>
<script setup>
// 引入需要的方法
import { defineProps, defineEmits, computed } from 'vue'
// 定义 props
const props = defineProps({
  name: String,
})
// v-model 规定写法 update:name name->需要v-model的名称
const emit = defineEmits(['update:name'])
// 定义计算属性
const myName = computed({
  get() {
    return props.name
  },
  set(val) {
    emit('update:name', val)
  },
})
</script>
