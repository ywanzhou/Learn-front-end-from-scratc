<!--
 * @Description: v-model语法糖入口文件
 * @Author: Zhou
 * @Date: 2021-10-19 20:45
 * @LastEditTime: 2021-10-19 23:48
 * @LastEditors: Zhou
 * @FilePath: \Learn-front-end-from-scratc\Vue全家桶\Gossip\v-model语法糖\demo\src\pages\index\index.vue
-->
<template>
  <div>
    <div class="nav">
      <router-link class="nav-item" to="/demo1">demo1</router-link>

      <router-link class="nav-item" to="/demo2">demo2</router-link>
      <router-link class="nav-item" to="/demo3">demo3</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav {
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin: 100px auto;
}
</style>