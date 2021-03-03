import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const auth =
    store.state.auth !== undefined
      ? store.state.auth
      : store.getters.isAuthenticated

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    if (auth) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
})

export default router
