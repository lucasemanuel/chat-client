<template>
  <main>
    <header>
      <span v-on:click="toggleMenu">menu</span>
      <h1 class="logo">chatSocket</h1>
    </header>
    <Sidebar v-bind:hide-menu="hideMenu" />
    <Conversation />
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Conversation from '@/components/Conversation'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Conversation
  },
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
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';

main {
  height: 100vh;

  header {
    display: flex;
    height: 64px;
    line-height: 64px;
    width: 100%;
    background: #1d7e71;
    grid-area: header;

    h1.logo {
      font-weight: 500;
      font-size: 28px;
      text-align: center;
    }

    span {
      @media (min-width: $media-tablet) {
        display: none;
      }
    }
  }

  @media (min-width: $media-tablet) {
    display: grid;
    grid-template-areas:
      'header header'
      'menu conversation';
    grid-template-columns: 360px auto;
    grid-auto-columns: 100px;
  }
}
</style>
