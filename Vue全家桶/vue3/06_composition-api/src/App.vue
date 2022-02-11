<template>
  <h3>信息展示组件</h3>
  <div style="margin: 24px 0">
    <span>姓名：</span>
    <!-- 在模板中，Vue 会自动帮助我们为 ref 进行解包，所以不需要使用 ref.value 的形式 -->
    <span>{{ user.name }}</span>
    <br />
    <span>年龄：</span>
    <span>{{ user.age }}</span>
  </div>
  <button @click="handleEditName">修改姓名</button>
  <br />
  <button @click="handleEditAge">修改年龄</button>
</template>
<script setup>
import { toRefs, reactive } from 'vue'
const user = reactive({ name: '一碗粥', age: '18' })
// user 下的属性通过 toRefs 与解构后的数据建立了链接，任何一个修改都会引起另一个的变化
const { name, age } = toRefs(user)
const handleEditName = () => {
  name.value = '一碗周'
}
const handleEditAge = () => {
  age.value = '20'
}
</script>
