<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>

import Nav from './views/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="less">
#app{
  color: #000;
}
</style>
