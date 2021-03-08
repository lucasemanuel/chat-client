<template>
  <section class="conversation" v-if="destination.id">
    <h3 class="userConversation">{{ destination.username | at }}</h3>
    <Messages />
    <form v-on:submit.prevent="onSubmit">
      <input type="text" v-model="message" />
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
  data () {
    return {
      message: ''
    }
  },
  computed: {
    ...mapState({
      destination: state => state.chat.conversation.userDestination
    })
  },
  methods: {
    onSubmit () {
      this.$store
        .dispatch('sendMessage', {
          body: this.message,
          destination_id: this.user.id
        })
        .then(() => {
          this.message = ''
        })
    }
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
