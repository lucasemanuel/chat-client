import axios from '@/http/axios'
import { CLEAR_STATE } from '@/store/chat/mutation-types'

const state = {}

const getters = {
  isAuthenticated (state, getters) {
    return !!getters.getTokenUserLogged
  },
  getTokenUserLogged () {
    return localStorage.getItem('token')
  },
  getUserLogged () {
    return JSON.parse(localStorage.getItem('user'))
  }
}

const mutations = {}

const actions = {
  login ({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/login', user)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      axios.post('/auth/logout')
      delete axios.defaults.headers.common.Authorization
      commit(CLEAR_STATE)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
