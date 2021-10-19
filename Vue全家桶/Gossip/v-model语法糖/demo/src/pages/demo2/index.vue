<!--
 * @Description: demo2
 * @Author: Zhou
 * @Date: 2021-10-19 21:02
 * @LastEditTime: 2021-10-19 23:15
 * @LastEditors: Zhou
 * @FilePath: \Learn-front-end-from-scratc\Vue全家桶\Gossip\v-model语法糖\demo\src\pages\demo2\index.vue
-->
<template>
  <div style="padding-top: 80px">
    <h3 style="text-align: center">{{ "超组件中的值：" + value }}</h3>
    <Parent v-model="value"></Parent>
  </div>
</template>

<script>
import Parent from './components/index.vue'
export default {
  components: {
    Parent
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>
</style>