<template>
  <h1>Hello World</h1>
  <div
    style="
      display: flex;
      justify-content: space-between;
      width: 240px;
      margin: 0 auto;
    "
  >
    <router-link to="about">about</router-link>
    <router-link to="user">user</router-link>
  </div>
  <router-view></router-view>
</template>
