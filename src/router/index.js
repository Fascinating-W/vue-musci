import Vue from 'vue'
import Router from 'vue-router'
const Rank = () => import('components/rank/rank')
const Recommend = () => import('components/recommend/recommend')
const Search = () => import('components/search/search')
const Singer = () => import('components/singer/singer')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
  ]
})