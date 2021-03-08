<template>
  <aside class="menu" v-bind:class="{ none: hideMenu }">
    <p class="userLogged">{{ user.username | at }}</p>
    <ul>
      <li
        v-for="(user, index) in listUsers"
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
import { SET_USER_DESTINATION } from '@/store/chat/mutation-types'

export default {
  name: 'Sidebar',
  props: {
    hideMenu: {
      type: Boolean,
      require: true
    }
  },
  created () {
    this.$store.dispatch('fetchUsers')
  },
  computed: {
    ...mapState({
      listUsers: state => state.chat.listUsers,
      destination: state => state.chat.conversation.userDestination
    }),
    ...mapGetters({ user: 'getUserLogged' })
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'Login', params: { auth: false } })
      })
    },
    selectUser (index) {
      this.$store.commit(SET_USER_DESTINATION, index)
      if (this.destination) {
        this.$store.dispatch('fetchMessages', this.destination.id)
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
