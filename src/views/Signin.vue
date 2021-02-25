<template>
  <SecondaryLayout>
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
      <button type="submit">Login</button>
      <a href="#">Create account</a>
    </form>
  </SecondaryLayout>
</template>

<script>
import SecondaryLayout from '@/components/layouts/Secondary'

export default {
  name: 'Signin',
  components: {
    SecondaryLayout
  }
}
</script>

<style scoped lang="scss">
@import '../styles/form';

form {
  display: flex;
  flex-direction: column;
  width: 420px;
  text-align: center;

  input {
    margin-bottom: 12px;
  }

  button {
    margin-top: 12px;
  }

  a {
    margin-top: 32px;
  }
}
</style>
