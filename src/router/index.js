import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CommodityDetail from '@/components/CommodityDetail/Index'
import Buy from '@/components/buy/Buy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/c-detail/:id',
      name: 'CommodityDetail',
      component: CommodityDetail
    },
    {
      path: '/buy/:id',
      name: 'Buy',
      component: Buy
    }
  ]
})
