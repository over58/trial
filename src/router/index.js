import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import Conttaienr from '../App.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/trial',
      component: Conttaienr,
      children: [...routes]
    }
  ]
})
