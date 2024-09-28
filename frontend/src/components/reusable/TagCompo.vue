<template>
  <span>
    <slot name="content"></slot>
  </span>
</template>

<script>

export default {
  name: "TagCompo",
  components: {

  },
};
</script>

<style scoped>
span {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.875rem;
  padding: 0.05rem 0.5rem;
  background: var(--red);
  color: white;
}
</style>
