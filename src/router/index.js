import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import Home from '@/views/Home.vue'
import store from '@/store'

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
    to.params.auth !== undefined
      ? to.params.auth
      : store.getters.isAuthenticated

  if (to.matched.some(record => record.meta.requiresAuth)) {
    !auth ? next({ name: 'Login' }) : next()
  } else {
    auth ? next({ name: 'Home' }) : next()
  }
})

export default router
