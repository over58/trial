<template>
  <div class="effects-wrapper">
    <div class="box green"></div>
    <div class="box orange"></div>
    <div class="box grey"></div>
    <div class="button-group">
        <button @click="play1">play 1</button>
        <button @click="timeline1">timeline 1</button>
        <button @click="timeline2">timeline 2</button>
        <button @click="label1">label 1</button>
        <button @click="t1.seek('label1')">seek(0.8)</button>
        <button @click="t1.progress(0.66)">progress(0.66)</button>
        <button @click="t1.reverse()">reverse</button>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data () {
    return {
      t1: null
    }
  },
  methods: {
    play1 () {
      this.instance = gsap.to('.box', { rotation: 90, x: 500, duration: 1 })
    },
    timeline1 () {
      const t1 = gsap.timeline()
      t1.to('.box', { rotation: 90, x: 500, duration: 1 })
        .to('.box', { rotation: 45, x: 200, duration: 1 })
        // 属性值都是相对于起始点的， 不是相对于上一个 state 的
    },
    timeline2 () {
      const t1 = gsap.timeline()
      t1.to('.box', { rotation: 90, x: 500, duration: 1 })
      t1.to('.box', { rotation: 45, x: 200, duration: 1 }, '+=1')
      // --timeline1----->1s 的延迟---->timeline2--->
    },
    label1 () {
      const t1 = gsap.timeline()
      t1.to('.box', { rotation: 90, x: 500, duration: 1 })

      // 添加一个标记位，方便 seek
      t1.addLabel('label1', 0.8)
      t1.to('.box', { rotation: 45, x: 200, duration: 1 }, '-=0.5')
      this.t1 = t1

      // duration（） 包含了+= -=的时间
      console.log(t1.duration())
    }
  }
}
</script>

<style lang="less" scoped>
.effects-wrapper{

.box {
  display: block;
  height:100px;
  width: 100px;
}

  .green {
    background-color: green;
  }
  .orange{
    background-color: orange;
  }
  .grey{
    background-color: grey;
  }

  .button-group{
    margin-top: 50px;
  }
}
</style>
