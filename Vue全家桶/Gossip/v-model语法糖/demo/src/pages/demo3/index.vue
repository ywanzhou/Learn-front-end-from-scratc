<!--
 * @Description: demo1
 * @Author: Zhou
 * @Date: 2021-10-19 21:02
 * @LastEditTime: 2021-10-20 00:05
 * @LastEditors: Zhou
 * @FilePath: \Learn-front-end-from-scratc\Vue全家桶\Gossip\v-model语法糖\demo\src\pages\demo3\index.vue
-->
<template>
  <div class="container">
    <h4 style="text-align: center">{{ "总共有" + array.length + "人" }}</h4>
    <!-- 使用组件 -->
    <Parent v-model="array"></Parent>
  </div>
</template>

<script>
import Parent from './components/index'
export default {
  components: {
    Parent
  },
  data () {
    return {
      array: [
        {
          name: '张三',
          sex: '男',
          age: '18'
        }
      ]
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