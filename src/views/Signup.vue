<template>
  <SecondaryLayout>
    <h1>Criar Conta</h1>
    <form>
      <input
        type="text"
        id="fusername"
        name="fusername"
        placeholder="Username"
      />
      <input
        type="text"
        id="fpassword"
        name="fpassword"
        placeholder="Password"
      />
      <input
        type="text"
        id="frepeatpassword"
        name="frepeatpassword"
        placeholder="Repita o Password"
      />
      <button type="submit">Criar</button>
      <a href="#">Entrar</a>
    </form>
  </SecondaryLayout>
</template>

<script>
import SecondaryLayout from '@/components/layouts/Secondary'

export default {
  name: 'Signup',
  components: {
    SecondaryLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/sign';
</style>
