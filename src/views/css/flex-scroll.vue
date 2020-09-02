<template>
  <div class="flex-scroll">
    <div class="title">我们的愿望终于实现了</div>
    <div class="content">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
      <div class="item">10</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.flex-scroll{
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  .title{
    height: 50px;
    line-height:50px;
  }
  .content{
    flex: 1;
    .item{
      height: 100px;
      width: 100px;
      background:red;
    }
  }
}
</style>
