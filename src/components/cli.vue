<template lang="html">
<!-- 选中组件 -->
<div class="footer">
  <div class="f-left" @click = "qink">
    删除
  </div>
  <div class="f-bet">
    请选择{{red_xz.length}}
  </div>
  <div class="f-right">
    确定
  </div>
</div>
</template>

<script>
import bus from './bus'
export default {
  mounted(){
    var this_xz = this;
    bus.$on('red',function(data){
      console.log(data);
      this_xz.red_xz = data;
    })
  },
  data(){
    return {
      red_xz :[]
    }
  },
  methods: {
    qink() {
      this.red_xz=[];
      bus.$emit('qk')
    }
  }
}
</script>

<style lang="css">
.footer{
    position: fixed;
    height: 50px;
    line-height: 50px;
    display: flex;
    text-align: center;
    background:#373b47;
    color: #ffffff;
    bottom: 0;
    left: 0;
    right: 0;
}
.footer .f-bet{
      flex:1;
}
.footer .f-right{
    flex:0 0 105px;
    width: 105px;
    background: #f21c0f;

}
</style>
