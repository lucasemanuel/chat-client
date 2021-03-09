<template>
  <div class="avatar">
    <span class="initials">{{ initials }}</span>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    name: String
  },
  computed: {
    initials () {
      return `${this.name[0]}${this.name[1]}`
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';

.avatar {
  display: flex;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: $secondary-color;
  align-items: center;
  justify-content: center;

  .initials {
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
