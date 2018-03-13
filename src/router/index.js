import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'component/recommend'
import Singer from 'component/singer'
import Rank from 'component/rank'
import Search from 'component/search'
import SingerDetail from 'component/singer/detail'
import Disc from 'component/disc'
import topList from 'component/top-list'

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: topList
        }
      ]
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
