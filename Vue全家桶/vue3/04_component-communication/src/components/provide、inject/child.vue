<template>
  <ul class="parent list-group">
    <li class="list-group-item" v-for="i in list" :key="i">{{ i }}</li>
  </ul>
</template>
<script setup>
import { inject } from 'vue'
const list = inject('list')
</script>
<style>
.child-wrap {
  width: 300px;
  margin: 0 auto;
}
</style>
