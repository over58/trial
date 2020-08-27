export default [
  {
    path: '',
    name: 'qrcode',
    component: () => import('@views/npm/qrcode/Index.vue')
  },
  {
    path: 'clipboard',
    name: 'clipboard',
    component: () => import('@views/npm/clipboard/Index.vue')
  }
]
