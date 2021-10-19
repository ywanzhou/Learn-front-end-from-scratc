<!--
 * @Description: 中间层组件
 * @Author: Zhou
 * @Date: 2021-10-19 22:55
 * @LastEditTime: 2021-10-19 23:34
 * @LastEditors: Zhou
 * @FilePath: \Learn-front-end-from-scratc\Vue全家桶\Gossip\v-model语法糖\demo\src\pages\demo2\components\index.vue
-->
<template>
  <div class="container">
    <h4>{{ "父组件value的值：" + value }}</h4>
    <!-- 使用计算属性作为传递的属性 -->
    <Parent v-model="newValue"></Parent>
  </div>
</template>

<script>
import Parent from './child/index'
export default {
  components: {
    Parent
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 定义一个过渡的计算属性
    newValue: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>

<style>
.container {
  width: 500px;
  margin: 50px auto 0;
}
</style>