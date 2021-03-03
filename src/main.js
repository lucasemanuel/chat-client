import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './http/axios'

axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem('token')}`
}

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
