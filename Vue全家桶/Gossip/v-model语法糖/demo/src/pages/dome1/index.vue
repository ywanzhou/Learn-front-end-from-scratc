<!--
 * @Description: demo1
 * @Author: Zhou
 * @Date: 2021-10-19 21:02
 * @LastEditTime: 2021-10-19 21:32
 * @LastEditors: Zhou
 * @FilePath: \Learn-front-end-from-scratc\Vue全家桶\Gossip\v-model语法糖\demo\src\pages\dome1\index.vue
-->
<template>
  <div class="container">
    <h4>{{ "value的值：" + value }}</h4>
    <!-- 使用组件 -->
    <Parent v-model="value"></Parent>
  </div>
</template>

<script>
// 引入组件
import Parent from './components/index'
export default {
  // 注册组件
  components: {
    Parent
  },
  data () {
    return {
      value: ''
    }
  },
}
</script>

<style>
.container {
  width: 500px;
  margin: 100px auto 0;
}
</style>