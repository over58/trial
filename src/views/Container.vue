<template>
  <div class="container">
    <el-container style="height:100%;">
      <el-aside
        width="200px"
        style="background-color:#eee"
      >
        <el-menu
          :default-active="activeRoute"
          @select="selectMenuItem"
        >
          <el-menu-item
            v-for="item in filteredRoutes"
            :key="item.name"
            :index="item.name"
          >
            {{ (item.meta && item.meta.label) || item.name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import routes from '../router/routes.js'
export default {
  name: 'Index',
  data () {
    return {
      routes: routes
    }
  },
  computed: {
    activeRoute () {
      return this.$route.name
    },
    filteredRoutes () {
      return routes.filter(item => item.name || item.path)
    }
  },
  created () {},
  methods: {
    selectMenuItem (index) {
      this.$router.push({
        name: index
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
}
</style>
