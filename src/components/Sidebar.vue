<template>
  <aside class="menu" v-bind:class="{ none: hideMenu }">
    <ul>
      <li
        v-for="(user, index) in listUsers"
        v-bind:key="user.id"
        v-on:click="selectUser(index)"
      >
        <Avatar v-bind:name="user.username" />
        <span>
          {{ user.username | at }}
        </span>
      </li>
    </ul>
    <footer>
      <p>{{ user.username | at }}</p>
      <a href="#" v-on:click="onLogout">Logout</a>
    </footer>
  </aside>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { SET_USER_DESTINATION } from '@/store/chat/mutation-types'
import Avatar from '@/components/Avatar'

export default {
  name: 'Sidebar',
  props: {
    hideMenu: {
      type: Boolean,
      require: true
    }
  },
  components: {
    Avatar
  },
  computed: {
    ...mapState({
      listUsers: state => state.chat.listUsers,
      destination: state => state.chat.conversation.userDestination
    }),
    ...mapGetters({ user: 'getUserLogged' })
  },
  created () {
    this.$store.dispatch('fetchUsers')
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'Login', params: { auth: false } })
      })
    },
    selectUser (index) {
      this.$store.commit(SET_USER_DESTINATION, index)
      this.$emit('update-hide-class')
      if (this.destination) {
        this.$store.dispatch('fetchMessages', this.destination.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

aside.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: calc(100vh - 64px - 2px);
  width: 100%;
  grid-area: menu;
  background: #f0f0f0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  .userLogged {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    color: $font-color;
    border-bottom: $border;

    .fa-user-circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 8px;
    }

    span {
      font-weight: 500;
      font-size: 32px;
      color: $font-color;
    }
  }

  ul {
    flex: 1;
    overflow-y: auto;

    li {
      display: flex;
      align-items: center;
      height: 80px;
      padding: 0 16px;
      background: #fff;
      border-bottom: $border;
      border-width: 1px;
      margin-bottom: 8px;
      cursor: pointer;

      &:first-of-type {
        margin-top: 8px;
      }

      span {
        font-size: 18px;
        margin-left: 8px;
      }
    }
  }

  footer {
    height: 96px;
    background: $font-color;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-top: $border;

    p {
      font-size: 24px;
      color: #fff;
    }

    a {
      margin-top: 2px;
      font-size: 18px;
      font-weight: 700;
      color: $secondary-color;
    }
  }

  @media (min-width: $media-tablet) {
    position: static;
    border-right: $border;
    display: flex !important;
  }
}
</style>
