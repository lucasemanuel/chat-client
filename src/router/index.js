import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signin',
    component: Signin
  }
]

const router = new VueRouter({
  routes
})

export default router
