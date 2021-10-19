<!--
 * @Description: 演示v-model在组件中的应用
 * @Author: Zhou
 * @Date: 2021-10-19 21:21
 * @LastEditTime: 2021-10-19 22:44
 * @LastEditors: Zhou
 * @FilePath: \Learn-front-end-from-scratc\Vue全家桶\Gossip\v-model语法糖\demo\src\pages\dome1\components\index.vue
-->
<template>
  <!-- 3. 监听 input 事件的出发 -->
  <div class="input" contenteditable @input="input"></div>
</template>

<script>
export default {
  // 1. 接受父级传递的值
  props: {
    string: {
      type: String,
      default: ''
    }
  },
  // 2. 配置 model 选项
  model: {
    prop: 'string',
    event: 'strChange'
  },
  methods: {
    // 4. 编写 input 事件触发执行的事件处理函数
    input (event) {
      // 5. $emit strChange 事件，并将 event.target.innerText 作为参数
      this.$emit('strChange', event.target.innerText)
    }
  },

}
</script>

<style>
.input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  color: #606266;
  background-color: #fff;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.input:focus {
  border-color: lightskyblue;
}
</style>