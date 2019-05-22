import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CommodityDetail from '@/components/CommodityDetail/Index'
import Buy from '@/components/buy/Buy'
import Vault from '@/components/vault/Index'
import Team from '@/components/Team/Index'
import Withdraw from '@/components/vault/Withdraw'
import TeamShare from '@/components/team/TeamShare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/:userId',
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
    },
    {
      path: '/vault',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/team-share',
      name: 'TeamShare',
      component: TeamShare
    }
  ]
})
