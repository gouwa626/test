<template>
<div id="app">
  <router-link :to="{ path: '/Test'}">测试页</router-link>
  <router-view name="test"></router-view>
  <router-link :to="{ name: 'HelloWorld', params: {} }"></router-link>
  <router-view></router-view>
  <div> chang  two</div>
  <p></p>
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
