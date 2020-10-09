import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/services/:idservicio',
    name: 'ServicesID',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '*', // vue 2.x
    // path: '/:catchAll(.*)', // 3.x
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
