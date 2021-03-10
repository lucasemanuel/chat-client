<template>
  <div class="messages">
    <Message
      v-for="message in messages"
      v-bind:content="message.body"
      v-bind:key="message.id"
      v-bind:type-user="message.source_id == user.id"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import Message from '@/components/Message'
export default {
  name: 'Messages',
  components: {
    Message
  },
  computed: {
    ...mapState({
      destination: state => state.chat.conversation.userDestination,
      messages: state => state.chat.conversation.messages
    }),
    ...mapGetters({ user: 'getUserLogged' })
  },
  updated () {
    const el = document.querySelector('.message:last-child')
    if (el) el.scrollIntoView()
  }
}
</script>

<style lang="scss" scoped>
.messages {
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  height: calc(100vh - 66px - 44px - 54px - 16px);
  overflow: auto;
  padding: 0 12px;
}
</style>
