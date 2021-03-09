<template>
  <main>
    <header>
      <span v-on:click="toggleMenu" class="menu">menu</span>
      <h1 class="logo">chatSocket</h1>
    </header>
    <Sidebar v-bind:hide-menu="hideMenu" v-on:update-hide-class="toggleMenu" />
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
  methods: {
    toggleMenu () {
      this.hideMenu = !this.hideMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

main {
  height: 100vh;
  background: $bg-color;

  header {
    display: flex;
    height: 64px;
    line-height: 64px;
    width: 100%;
    background: $primary-color;
    grid-area: header;
    border-bottom: $border;

    .menu span {
      z-index: 1;
    }

    h1.logo {
      font-size: 28px;
      text-align: center;
      width: 100%;
      display: block;
      position: absolute;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: #1e2933;
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
