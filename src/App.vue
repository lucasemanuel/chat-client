<template>
  <router-view />
</template>

<script>
export default {
  created () {
    this.$http.interceptors.response.use(undefined, ({ response: error }) => {
      if (error.status === 401) {
        this.$store.dispatch('logout').then(() => {
          this.$store.commit('loggerOut')
          this.$router.push('/login')
        })
      } else {
        return Promise.reject(error)
      }
    })
  }
}
</script>

<style lang="scss" src="@/styles/index.scss" />
