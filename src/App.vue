<template>
  <router-view />
</template>

<script>
export default {
  created () {
    this.$http.interceptors.response.use(undefined, ({ response: error }) => {
      if (error.status === 401) {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({ name: 'Login', params: { auth: false } })
        })
      } else {
        return Promise.reject(error)
      }
    })

    if (this.$store.getters.isAuthenticated) {
      const { getUserLogged: user } = this.$store.getters

      this.$echo.private(`user.${user.id}`).listen('SendMessage', e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="scss" src="@/styles/index.scss" />
