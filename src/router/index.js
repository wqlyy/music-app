import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'component/recommend'
import Singer from 'component/singer'
import Rank from 'component/rank'
import Search from 'component/search'
// import Tab from 'component/tab'

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
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
