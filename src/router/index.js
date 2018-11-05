import Vue from 'vue'
import Router from 'vue-router'


//模版的默认样式
import Layout from '../views/layout/Layout'

Vue.use(Router)

//静态路由的配置参数在这里面
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path:'/form',
    component:Layout,
    children:[
      {
        path:'index',
        name:'Form',
        component:()=>import('@/views/form/index'),
        meta:{title:'测试表单',icon:'form'}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode:'history', //后端支持可以开启
  scrollBehavior:()=>({y:0}),
  routes:constantRouterMap
})
