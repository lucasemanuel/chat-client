<template>
  <main>
    <header>
      <span v-on:click="toggleMenu" class="menu">
        <font-awesome-icon :icon="faBars" />
      </span>
      <h1 class="logo">chatSocket</h1>
    </header>
    <Sidebar v-bind:hide-menu="hideMenu" v-on:update-hide-class="toggleMenu" />
    <Conversation />
  </main>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '@/components/Sidebar'
import Conversation from '@/components/Conversation'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Conversation,
    FontAwesomeIcon
  },
  data () {
    return {
      hideMenu: false,
      faBars: faBars
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
    width: 100%;
    background: $primary-color;
    grid-area: header;
    border-bottom: $border;
    align-items: center;
    justify-content: space-between;

    .menu {
      z-index: 1;
      color: $font-color;
      font-size: 28px;
      margin-left: 16px;
      cursor: pointer;
    }

    h1.logo {
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: $font-color;
      margin-right: 16px;
    }

    @media (min-width: 400px) {
      justify-content: initial;

      h1.logo {
        width: 100%;
        display: block;
        position: absolute;
        text-align: center;
      }
      //   h1 {
      //     display: inline;
      //     position: relative;
      //     width: auto;
      //   }
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
