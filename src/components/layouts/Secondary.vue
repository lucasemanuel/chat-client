<template>
  <div class="content">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
