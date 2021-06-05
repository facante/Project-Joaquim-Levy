import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '*',
    menu: false,
    component: () => import('../views/home/Home')
  },
  {
    path: '/',
    name: 'Home',
    menu: true,
    component: () => import('../views/home/Home')
  },
  {
    path: '/about',
    name: 'Sobre',
    menu: true,
    component: () => import('../views/about/About')
  },
  {
    path: '/pics',
    name: 'Fotos',
    menu: true,
    component: () => import('../views/pics/Pics')
  },
  {
    path: '/family',
    name: 'Familia',
    menu: true,
    component: () => import('../views/family/Family')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
