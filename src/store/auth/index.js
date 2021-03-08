import axios from '@/http/axios'

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
      delete axios.defaults.headers.common.Authorization
      resolve()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
