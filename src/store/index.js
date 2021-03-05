import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/http/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: undefined,
    users: [],
    messages: [],
    destination: undefined
  },
  getters: {
    token () {
      return localStorage.getItem('token')
    },
    user () {
      return JSON.parse(localStorage.getItem('user'))
    },
    isAuthenticated (state, getters) {
      return !!getters.token
    }
  },
  mutations: {
    loggerIn (state) {
      state.auth = true
    },
    loggerOut (state) {
      state.auth = false
    },
    setUsers (state, payload) {
      state.users = payload
    },
    updateMessages (state, payload) {
      state.messages = payload
    },
    setDestination (state, payload) {
      if (state.users.length) state.destination = state.users[payload]
    }
  },
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post('/auth/login', user)
          .then(response => {
            const { user, access_token: token } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
            resolve(response)
          })
          .catch(error => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
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
    },
    getUsers ({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/users')
          .then(response => {
            commit('setUsers', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getMessages ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/messages/${user}`)
          .then(response => {
            commit('updateMessages', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    sendMessage ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/messages/', payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  modules: {}
})
