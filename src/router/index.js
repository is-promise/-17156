import Vue from 'vue'
import Router from 'vue-router'//跳转路由
import Home from '@/pages/home/home'
import Oneday from '@/pages/oneday/oneday'
import City from '@/pages/city/city'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'Home',
      component: Home
//      children:[{path:"/home/home",component:home},{path:"/index/index/a",component:ds}]//嵌套路由写法
    },
    {
      path: '/oneday',
      name: 'oneday',
      component: Oneday
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
