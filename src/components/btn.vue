<template lang="html">
  <button type="button" @click="oncli">{{text}}</button>
</template>

<script>
export default {
  data(){
    return{
      text:'点'
    }
  }
}
</script>

<style lang="stylus" scoped>
button
  width 100px
</style>
