<template>
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
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    hideMenu: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout').then(() => {
        this.$store.commit('loggerOut')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';

aside.menu {
  background: #e7f3f1;
  position: absolute;
  height: calc(100vh - 64px);
  width: 100%;
  grid-area: menu;

  .userLogged {
    height: 32px;
    line-height: 32px;
    background: #299c8d;
  }

  ul li {
    height: 80px;
    line-height: 80px;
    border-bottom: 2px solid #ddd;
  }

  @media (min-width: $media-tablet) {
    position: static;
    display: block;
    background: #45ecd1;
  }
}
</style>
