var routes = [
  {
    path: '',
    redirect: 'qrcode',
    component: () => import('@views/npm/qrcode/Index.vue')
  },
  {
    path: 'qrcode',
    name: 'qrcode',
    component: () => import('@views/npm/qrcode/Index.vue')
  },
  {
    path: 'clipboard',
    name: 'clipboard',
    component: () => import('@views/npm/clipboard/Index.vue')
  },
  // css
  {
    path: 'vertical-align',
    name: 'vertical-align',
    component: () => import('@views/css/vertical-align.vue')
  },
  {
    path: 'sector',
    name: 'sector',
    component: () => import('@views/css/sector.vue')
  },
  {
    path: 'ease',
    name: 'ease',
    component: () => import('@views/css/ease.vue')
  },
  {
    path: 'testvue',
    name: 'testvue',
    component: () => import('@views/testvue.vue')
  },
  {
    path: 'flex-scroll',
    name: 'flex-scroll',
    component: () => import('@views/css/flex-scroll.vue')
  }
]

export default routes
