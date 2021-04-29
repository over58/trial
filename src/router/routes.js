var routes = [
  {
    path: '',
    redirect: 'qrcode'
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
    path: 'gsap/base',
    name: 'gsap-base',
    component: () => import('@views/gsap/base.vue')
  },

  {
    path: 'css/zhejiao',
    name: 'css/zhejiao',
    component: () => import('@views/css/zhejiao.vue')
  },
  {
    path: 'css/flex-basis',
    name: 'css/flex-basis',
    component: () => import('@views/css/flex-basis.vue')
  },
  {
    path: 'css/loading',
    name: 'css/loading',
    component: () => import('@views/css/loading.vue')
  },

  // 测试页面
  {
    path: 'test/vue',
    name: 'test-vue',
    component: () => import('@views/test/vue.vue')
  }
]

export default routes
