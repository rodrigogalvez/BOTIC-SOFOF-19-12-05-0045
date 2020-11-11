import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    component: () => import(/* webpackChunkName: "inscripcionview" */ '../views/InscripcionView.vue')
  },
  {
    path: '/solicitudes',
    name: 'Solicitudes',
    component: () => import(/* webpackChunkName: "solicitudesview" */ '../views/SolicitudesView.vue')
  },
  {
    path: '/devolver',
    name: 'Devolver',
    component: () => import(/* webpackChunkName: "devolverview" */ '../views/DevolverView.vue')
  },
  {
    path: '/tomar',
    name: 'Tomar',
    component: () => import(/* webpackChunkName: "tomarview" */ '../views/TomarView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
