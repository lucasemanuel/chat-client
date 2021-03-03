<template>
  <main>
    <header>
      <span v-on:click="toggleMenu">menu</span>
      <h1 class="logo">chatSocket</h1>
    </header>
    <aside class="menu" v-bind:class="{ none: hideMenu }">
      <p class="userLogged">@lucasemanuel</p>
      <ul>
        <li>@soteldo</li>
        <li>@lucasverissimo</li>
        <li>@marinho</li>
      </ul>
      <footer>
        <a href="#" v-on:click="onLogout">Exit</a>
      </footer>
    </aside>
    <section class="conversation">
      <h3 class="userConversation">@soteldo</h3>
      <div class="messages">
        <p class="message me">
          Opa, como vai?
        </p>
        <p class="message him">
          Bien, e usted?
        </p>
        <p class="message me">
          Bem, mas poderia ta melhor se o santos fosse tetra da liberta.
        </p>
        <p class="message him">
          Não deu, fica para a próxima.
        </p>
      </div>
      <form>
        <input type="text" />
        <button type="submit"></button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      hideMenu: false
    }
  },
  created () {
    this.$http.get('/users')
  },
  methods: {
    toggleMenu () {
      this.hideMenu = !this.hideMenu
    },
    onLogout () {
      this.$store.dispatch('logout').then(() => {
        this.$store.commit('loggerOut')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" src="@/styles/home.scss" />
