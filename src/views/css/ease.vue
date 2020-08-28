<template>
  <div>
    <select
      v-model="aniFn"
      name=""
      @change="loadAnim"
    >
      <option
        v-for="item in animationFnList"
        :key="item.key"
        :value="item.fn"
      >
        {{ item.key }}
      </option>
    </select>

    <div
      ref="panel"
      style="width:100px;height:100px;background:#ff0000;margin: 20px;"
    />
  </div>
</template>

<script>
import { Notification } from 'element-ui'

import animationFns from '@/utils/ease'
export default {
  data () {
    return {
      aniFn: animationFns.easeInQuad,
      timerId: 0
    }
  },
  computed: {
    animationFnList () {
      return Object.keys(animationFns).map(x => {
        return { key: x, fn: animationFns[x] }
      })
    }
  },
  watch: {
    aniFn () {
      var element = this.$refs.panel
      if (element) {
        element.style.width = '100px'
        this.loadAnim()
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.loadAnim()
    })
  },
  methods: {
    loadAnim (endValue = 200, duration = 2000) {
      var element = this.$refs.panel
      var startTime = new Date()
      var startValue = parseInt(element.style.width)
      var fn = this.aniFn
      if (fn) {
        clearInterval(this.timerId)
        this.timerId = setInterval(() => {
          var percentage = (new Date() - startTime) / duration
          var stepValue = startValue + (endValue - startValue) * fn(percentage) // 这里是关键
          element.style.width = stepValue + 'px'
          console.log('动画进行中')
          if (percentage >= 1) {
            Notification.success('动画结束')
            clearInterval(this.timerId)
            element.innerHTML = new Date() - startTime
          }
        }, 13)
      }
    }
  }
}
</script>

<style>

</style>
