<template>
  <div>
      <p>{{count}}</p>
      <button @click="add">Add</button>
      <button @click="teardownWatcher">teardown wather</button>
      <!--
        1. array 的 splice，unshift, shift，push 方法调用时候 notify
         defineReactive 中的 set 也会调用 notify

        2. notify 会调用 this.subs[i].update(), this.subs存储了所有订阅者 wathers
        3.
       -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      firstName: 'a',
      lastName: 'b'
    }
  },
  computed: {
    fullName (that) {
      console.log('=====')
      // 不要在这里应用自己，ps：that.fullName, 很简单就死循环了
      console.log(that._data)
      return this.firstName + '_' + this.lastName
    }
  },
  methods: {
    add () {
      this.count++
    },
    teardownWatcher () {
      this.closeWatcher()
    }
  },
  created () {
    this.closeWatcher = this.$watch('count', function (val) {
      console.log('count change', val)
    }, {
      before () {
        console.log('before', this.value, this)
      }
    })

    console.log(this)
  }
}

</script>

<style>

</style>
