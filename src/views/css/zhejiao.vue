<template>
  <div class="zhejiao-wrapper">
    <div class="box corner-cut1">折角</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box{
  width: 200px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  margin: 100px auto;
  color: #fff;
  background: #58a; /* 优雅降级 */
  position: relative;
  &::after{
    content: ' ';
    position:absolute;
    top: 0;
    right:0;
    width: 50px;
    height: 50px;
    background: linear-gradient(-135deg, #fff 50%, rgba(0,0,0,.4) 0) no-repeat 100% 0,
              linear-gradient(-135deg, transparent 20px, #58a 0);
  }
}

</style>
