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
          destination_id: this.destination.id
        })
        .then(() => {
          this.message = ''
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.conversation {
  grid-area: conversation;
  background: #f0f0f0;

  .userConversation {
    height: 42px;
    line-height: 42px;
    background: $secondary-color;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    border-bottom: $border;
  }

  form {
    display: flex;
    align-items: center;
    background: $secondary-color;
    padding: 0 12px;
    height: 52px;
    border-top: $border;

    input {
      flex: 1;
      height: 36px;
      padding: 0 16px;
      border-radius: 999px;
      margin-right: 8px;
      font-size: 16px;
    }

    button {
      width: 36px;
      height: 36px;
      border-radius: 999px;
      font-weight: 700;
      line-height: 36px;

      &::after {
        content: '>';
        text-align: center;
      }
    }
  }
}
</style>
