<template>
  <p class="message" v-bind:class="classMessage">
    {{ content }}
  </p>
</template>

<script>
export default {
  name: 'Message',
  props: {
    typeUser: Boolean,
    content: String
  },
  computed: {
    classMessage () {
      return {
        me: this.typeUser,
        him: !this.typeUser
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  border-radius: 16px;
  width: fit-content;
  padding: 12px;
  background: #ddd;
  word-break: break-word;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &.me {
    border-bottom-right-radius: 2px;
    text-align: right;
    align-self: flex-end;
    margin-left: 12%;
    background: #8fc2f1;
    color: #151d24;
  }

  &.him {
    border-top-left-radius: 2px;
    background: #e0e0e0;
    color: #2e2e2e;
  }
}
</style>
