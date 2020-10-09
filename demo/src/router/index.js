import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import('../page/index/index.vue'),
      children:[
        {
          path:'home',
          name:'首页',
          component:()=>import('../page/home/home.vue')
        },
        {
          path:'type',
          name:'分类',
          component:()=>import('../page/type/type.vue')
        },
        {
          path:'shopcar',
          name:'购物车',
          component:()=>import('../page/shopcar/shopcar.vue')
        },
        {
          path:'mine',
          name:'我的',
          component:()=>import('../page/mine/mine.vue')
        },
        {
          path:'',
          redirect:'home'
        }
      ]

    }
  ]
})
