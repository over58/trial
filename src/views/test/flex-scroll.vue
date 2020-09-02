<template>
<div class="mask">

  <div class="flex-scroll">
    <div class="title" @click="showModal = true">我们的愿望终于实现了</div>
    <button @click="showModal = true" style="height: 50px;">open button</button>
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
      <div class="item">10</div>
      <div class="item">10</div>
      <div class="item">10</div>
      <div class="item">10</div>
      <div class="item">10</div>
    </div>
  </div>

  <div class="modal" v-show="showModal">
    modal
    <button @click="showModal=false">close</button>
  </div>
</div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      showModal: false
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
.mask{
  position: fixed;
  top: 0;
  left:0;
  right:0;
  bottom:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.3);

  .flex-scroll{
    flex: 1;
    width: 100%;
    overflow:auto;
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

  .modal{
    position: fixed;
     top: 0;
      left:0;
      right:0;
      bottom:0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,.3);
  }
}
</style>
