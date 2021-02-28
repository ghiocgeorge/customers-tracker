import Vue from 'vue'
import VueRouter from 'vue-router'
import AllContacts from '../views/AllContacts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllContacts',
    component: AllContacts
  },
  {
    path: '/segment/:id',
    name: 'Segment',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Segment" */ '../views/Segment.vue')
  },
  {
    path: '/addsegment',
    name: 'AddSegment',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddSegment" */ '../views/AddSegment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
