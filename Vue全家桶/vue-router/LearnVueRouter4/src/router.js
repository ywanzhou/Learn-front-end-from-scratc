import RootComponent from './components/root.vue'
export default [{
    path: '/',
    // 引入组件
    component: RootComponent,
  },
  {
    path: '/hello',
    // 路由懒加载引入组件
    component: () => import('./components/HelloWorld.vue'),
    children: [{
      path: '/about',
      component: () => import()
    },{
      path: '/user',
      component: () => import()
    },]
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('./components/Page404.vue'),
  },
]