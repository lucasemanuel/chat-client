<template>
  <router-view />
</template>

<script>
export default {
  created () {
    this.$http.interceptors.response.use(undefined, error => {
      const { response } = error
      if (response === undefined || response.status === 401) {
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
  }
}
</script>

<style lang="scss" src="@/styles/index.scss" />
