<template>
  <div>
    <input v-model="textContent">
    <button @click="copy($event)">
      复制
    </button>
  </div>
</template>

<script>
import handleClipboard from '@/utils/clipboard'
export default {
  data () {
    return {
      textContent: '这是测试的内容...'
    }
  },
  mounted () {},
  methods: {
    copy (e) {
      handleClipboard(this.textContent, e)
    }
  }
}
</script>

<style></style>
