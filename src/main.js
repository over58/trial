import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

console.log(vm)
