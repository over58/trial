export default [
  {
    path: '',
    name: 'Nav',
    component: () => import('../views/Nav.vue')
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    component: () => import('../views/npm/qrcode/Index.vue')
  }
]
