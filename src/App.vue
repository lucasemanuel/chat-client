<template>
  <router-view />
</template>

<script>
import { ADD_MESSAGE, SET_NOTIFICATION } from '@/store/chat/mutation-types'
import sound from './assets/sounds/sms-alert-1-daniel_simon.mp3'

export default {
  created () {
    this.$http.interceptors.response.use(undefined, error => {
      const { response } = error
      if (response.status === 401) {
        if (!response.config.url.match(/(logout)/g)) {
          this.$store.dispatch('logout')
        }
        this.$router.push({ name: 'Login', params: { auth: false } })
      } else if (response.status === 422) {
        const key = Object.keys(response.data.errors)[0]
        this.$toasted.show(response.data.errors[key][0])
      }
      return Promise.reject(error)
    })

    if (this.$store.getters.isAuthenticated) {
      const { getUserLogged: user } = this.$store.getters
      const { conversation } = this.$store.state.chat

      this.$echo.private(`user.${user.id}`).listen('SendMessage', e => {
        if (e.message.source_id === conversation.userDestination.id) {
          this.$store.commit(ADD_MESSAGE, e.message)
        } else {
          const { listUsers } = this.$store.state.chat
          const index = listUsers.findIndex((el, index) => {
            return el.id === e.message.source_id
          })
          const audio = new Audio(sound)
          audio.play()
          this.$store.commit(SET_NOTIFICATION, { index, notification: true })
        }
      })
    }
  }
}
</script>

<style lang="scss" src="@/styles/index.scss" />
