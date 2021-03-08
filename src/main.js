import Vue from 'vue'
import App from './App.vue'
import Echo from 'laravel-echo'
import router from './router'
import store from './store'
import axios from './http/axios'

axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem('token')}`
}

window.pusher = require('pusher-js')

Vue.prototype.$echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.VUE_APP_PUSHER_KEY,
  cluster: 'mt1',
  wsHost: 'localhost',
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
  authEndpoint: process.env.VUE_APP_BROADCAST_HOST + '/broadcasting/auth',
  auth: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
})

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.filter('at', value => {
  if (!value) return ''
  return `@${value}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
