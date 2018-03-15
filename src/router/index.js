import Vue from 'vue'
import Router from 'vue-router'

// import Recommend from 'component/recommend'
// import Singer from 'component/singer'
// import Rank from 'component/rank'
// import Search from 'component/search'
// import SingerDetail from 'component/singer/detail'
// import Disc from 'component/disc'
// import topList from 'component/top-list'
// import UserCenter from 'component/user-center'

Vue.use(Router);

const Recommend = (resolve) => {
  import('component/recommend').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('component/singer').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('component/rank').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('component/search').then((module) => {
    resolve(module)
  })
}
const SingerDetail = (resolve) => {
  import('component/singer/detail').then((module) => {
    resolve(module)
  })
}
const Disc = (resolve) => {
  import('component/disc').then((module) => {
    resolve(module)
  })
}
const topList = (resolve) => {
  import('component/top-list').then((module) => {
    resolve(module)
  })
}
const UserCenter = (resolve) => {
  import('component/user-center').then((module) => {
    resolve(module)
  })
}

export default new Router({
  // mode: 'history',
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
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
