<template>
  <div class="message" v-bind:class="classMessage">
    <p class="body">
      {{ content }}
    </p>
    <span class="date">{{ date | date }}</span>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    typeUser: Boolean,
    content: String,
    date: String
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
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  .body {
    border-radius: 16px;
    width: fit-content;
    padding: 12px;
    background: #ddd;
    word-break: break-word;
  }

  &.me {
    text-align: right;

    p {
      border-bottom-right-radius: 2px;
      align-self: flex-end;
      margin-left: 12%;
      background: #8fc2f1;
      color: #151d24;
    }
  }

  &.him {
    p {
      background: #e0e0e0;
      color: #2e2e2e;
      border-top-left-radius: 2px;
    }
  }

  .date {
    margin-top: 4px;
    font-size: 14px;
    color: #aaaaaa;
    // font-weight: 500;
  }
}
</style>
