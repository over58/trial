import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
import Container from '../views/Container.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home/qrcode'
    },
    {
      path: '/home',
      name: 'home',
      component: Container,
      children: [
        ...routes
      ]
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: () => import('../views/npm/qrcode/Index.vue')
    }
  ]
})
