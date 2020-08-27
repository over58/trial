<template>
  <ul class="nav-container">
    <li class="title">导航栏</li>
    <li class="nav-item" v-for="route in routes" :key="route.name" @click="handleRoute(route)">{{route.name}}</li>
  </ul>
</template>

<script>
import routes from '../router/routes'

export default {
  data () {
    return {
      routes
    }
  },
  methods: {
    handleRoute (route) {
      this.$router.push({ name: route.name })
    }
  }
}
</script>

<style lang="less" scoped>
.nav-container{
  .title{
    font-size: 30px;
    font-weight: 600;
  }
  .nav-item{
    text-decoration: underline;
    color:cadetblue;
    line-height: 30px;
  }
}
</style>
