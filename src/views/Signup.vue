<template>
  <SecondaryLayout>
    <h1>Criar Conta</h1>
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
      <input
        type="password"
        id="frepeatpassword"
        name="frepeatpassword"
        placeholder="Repita o Password"
        v-model="repeatPassword"
      />
      <button type="submit">Criar</button>
    </form>
    <router-link to="/login">Entrar</router-link>
  </SecondaryLayout>
</template>

<script>
import SecondaryLayout from '@/components/layouts/Secondary'

export default {
  name: 'Signup',
  components: {
    SecondaryLayout
  },
  data () {
    return {
      username: '',
      password: '',
      repeatPassword: ''
    }
  },
  computed: {
    form () {
      return {
        username: this.username,
        password: this.password,
        password_confirmation: this.repeatPassword
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('/users', this.form).then(response => {
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/sign';
</style>
