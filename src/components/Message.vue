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

<style lang="scss">
.message {
  display: flex;
  border-radius: 16px;
  width: fit-content;
  padding: 12px;
  background: #ddd;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  &.me {
    background: #ddd;
    border-bottom-right-radius: 0;
    text-align: right;
    align-self: flex-end;
    margin-left: 12%;
  }

  &.him {
    background: royalblue;
    border-top-left-radius: 0;
  }
}
</style>
