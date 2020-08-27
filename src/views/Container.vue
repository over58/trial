<template>
<div class="container">
    <Nav></Nav>
    <router-view></router-view>
</div>
</template>

<script>
import Nav from '@com/frameworks/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style>

</style>
