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
      name: 'home',
      component: Container,
      children: [
        ...routes
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
