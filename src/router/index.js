import { createRouter, createWebHashHistory } from 'vue-router'
import authGuard from '../modules/auth/router/auth-guard'

import JournalRouter from '../modules/journal/router'
import AuthRouter from '../modules/auth/router'

const routes = [
  {
    path: '/',
    redirect: 'auth'
  },
  {
    path: '/auth',
    ...AuthRouter
  },
  {
    path: '/journal',
    beforeEnter: [ authGuard ],
    ...JournalRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
