var routes = [
  {
    path: '',
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
  }
]

routes.map(x => {
  x.path = 'trial/' + x.path
  return x
})

export default routes
