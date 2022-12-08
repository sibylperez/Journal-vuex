import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import JournalRouter from '../modules/journal/router'
import AuthRouter from '../modules/auth/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth',
    ...AuthRouter
  },
  {
    path: '/journal',
    ...JournalRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
