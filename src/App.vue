<template>
<div id="app">
  <router-link :to="{ path: '/Test'}">测试页</router-link>
  <router-view name="test"></router-view>
  <router-link :to="{ name: 'HelloWorld', params: {} }"></router-link>
  <router-view></router-view>
<<<<<<< HEAD
  <div>one添加修改</div>
  <div>one添加修改</div>
=======
  <div> chang  two</div>
  <p></p>
>>>>>>> f2ea387eb20d01dda8c211562706f7b958d8ad8f
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
