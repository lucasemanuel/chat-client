import Vue from 'vue'
import Echo from 'laravel-echo'
import Toasted from 'vue-toasted'
import moment from 'moment'

import axios from './http/axios'
import store from './store'
import router from './router'
import App from './App.vue'

moment.locale('pt-BR')

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`
  }
}

window.pusher = require('pusher-js')

Vue.prototype.$echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.VUE_APP_PUSHER_KEY,
  cluster: 'mt1',
  wsHost: process.env.VUE_APP_WS_SOCKET,
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
Vue.use(Toasted, {
  theme: 'bubble',
  duration: 3000
})

Vue.filter('at', value => {
  if (!value) return ''
  return `@${value}`
})

Vue.filter('date', value => {
  if (value) return moment(value).format('DD/MM/YYYY HH:mm')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
