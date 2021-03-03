<template>
  <router-view />
</template>

<script>
export default {
  created () {
    this.$http.interceptors.response.use(undefined, error => {
      if (error.status === 401) this.$store.dispatch('logout')

      return Promise.reject(error)
    })
  }
}
</script>

<style lang="scss" src="@/styles/index.scss" />
