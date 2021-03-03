<template>
  <SecondaryLayout>
    <h1>Login</h1>
    <form v-on:submit.prevent="onSubmit(form)">
      <input
        type="text"
        id="fusername"
        name="fusername"
        placeholder="Username"
        v-model="username"
      />
      <input
        type="password"
        id="fpassword"
        name="fpassword"
        placeholder="Password"
        v-model="password"
      />
      <button type="submit">Entrar</button>
    </form>
    <router-link to="/signup">Criar Conta</router-link>
  </SecondaryLayout>
</template>

<script>
import SecondaryLayout from '@/components/layouts/Secondary'
// import { mapActions } from 'vuex'

export default {
  name: 'Signin',
  components: {
    SecondaryLayout
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    form () {
      return { username: this.username, password: this.password }
    }
  },
  methods: {
    onSubmit (form) {
      this.$store.dispatch('login', form).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/sign';
</style>
