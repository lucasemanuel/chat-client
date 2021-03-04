<template>
  <div class="messages">
    <Message
      v-for="m in messages"
      v-bind:content="m.body"
      v-bind:key="m.id"
      v-bind:type-user="m.source_id == user.id"
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
    ...mapState(['destination', 'messages']),
    ...mapGetters(['user'])
  }
}
</script>

<style lang="scss">
.messages {
  display: flex;
  flex-direction: column;
  margin: 18px 0;
  height: calc(100vh - 64px - 36px - 36px - 52px);
  overflow: auto;
  padding: 0 12px;
}
</style>
