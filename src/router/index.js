import Vue from 'vue'
import Router from 'vue-router'
import Container from '../views/Container.vue'
import routes from './routes.js'
Vue.use(Router)

export default new Router({
  mode: 'hash',
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
