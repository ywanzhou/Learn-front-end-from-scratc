<template>
  <h1>404</h1>
  <p>{{ params.pathMatch }}</p>
</template>
<script setup>
import { useRoute } from 'vue-router'
const { params } = useRoute()
</script>
