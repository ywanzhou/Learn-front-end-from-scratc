<template>
  <ul class="parent list-group">
    <li class="list-group-item" v-for="i in poops.list" :key="i">{{ i }}</li>
  </ul>
</template>
<script setup>
import { defineProps } from 'vue'
const poops = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
</script>
<style>
.child-wrap {
  width: 300px;
  margin: 0 auto;
}
</style>
