<template>
  <SecondaryLayout>
    <h1>Login</h1>
    <form v-on:submit.prevent="onSubmit">
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
    onSubmit () {
      this.$http
        .post('/auth/login', this.form)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/sign';
</style>
