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

  background: linear-gradient(
    180deg,
    rgba(65, 181, 186, 1) 0%,
    rgba(12, 139, 187, 1) 100%
  );
}
</style>
