<template>
  <aside class="menu" v-bind:class="{ none: hideMenu }">
    <p class="userLogged">{{ user.username | at }}</p>
    <ul>
      <li
        v-for="(user, index) in users"
        v-bind:key="user.id"
        v-on:click="selectUser(index)"
      >
        {{ user.username | at }}
      </li>
    </ul>
    <footer>
      <a href="#" v-on:click="onLogout">Exit</a>
    </footer>
  </aside>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Sidebar',
  props: {
    hideMenu: {
      type: Boolean,
      require: true
    }
  },
  computed: {
    ...mapState(['users', 'destination']),
    ...mapGetters(['user'])
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout').then(() => {
        this.$store.commit('loggerOut')
        this.$router.push('/login')
      })
    },
    selectUser (index) {
      this.$store.commit('setDestination', index)
      if (this.destination) {
        this.$store.dispatch('getMessages', this.destination.id)
      }
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
