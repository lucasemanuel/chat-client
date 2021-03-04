<template>
  <section class="conversation" v-if="user !== undefined">
    <h3 class="userConversation">{{ user.username | at }}</h3>
    <Messages />
    <form>
      <input type="text" />
      <button type="submit"></button>
    </form>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import Messages from '@/components/Messages'

export default {
  name: 'Conversation',
  components: {
    Messages
  },
  computed: {
    ...mapState({ user: 'destination' })
  }
}
</script>

<style lang="scss">
.conversation {
  grid-area: conversation;

  .userConversation {
    height: 36px;
    line-height: 36px;
    background: #299c8d;
    font-weight: 500;
    text-align: center;
  }

  form {
    padding: 0 12px;
    height: 52px;
    display: flex;
    align-items: center;
    background: #299c8d;

    input {
      height: 36px;
      padding: 0 16px;
      border-radius: 999px;
      flex: 1;
      margin-right: 8px;
      font-size: 16px;
    }

    button {
      width: 36px;
      height: 36px;
      border-radius: 999px;

      &::after {
        content: '>';
        text-align: center;
      }
    }
  }
}
</style>
