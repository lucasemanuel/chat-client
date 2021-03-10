import axios from '@/http/axios'
import {
  SET_LIST_USERS,
  SET_USER_DESTINATION,
  SET_MESSAGES,
  ADD_MESSAGE,
  SET_NOTIFICATION
} from './mutation-types'

const state = {
  listUsers: [],
  conversation: {
    userDestination: {
      id: 0,
      name: ''
    },
    messages: []
  }
}

const getters = {}

const mutations = {
  [SET_LIST_USERS] (state, payload) {
    state.listUsers = payload
  },
  [SET_MESSAGES] (state, payload) {
    state.conversation.messages = payload
  },
  [ADD_MESSAGE] (state, payload) {
    state.conversation.messages = [...state.conversation.messages, payload]
  },
  [SET_USER_DESTINATION] (state, payload) {
    state.conversation.userDestination = state.listUsers[payload]
  },
  [SET_NOTIFICATION] (state, { index, notification }) {
    state.listUsers[index].notification = notification
  }
}

const actions = {
  fetchUsers ({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/users')
        .then(response => {
          let users = response.data
          users = users.map(obj => ({ ...obj, notification: false }))
          commit(SET_LIST_USERS, users)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  fetchMessages ({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/messages/${user}`)
        .then(response => {
          commit(SET_MESSAGES, response.data)
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
          commit(ADD_MESSAGE, response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
