<template>
  <div>
    <Tag :size="16" />
    <slot name="content"></slot>
  </div>
</template>

<script>
import { Tag } from "lucide-vue-next";
export default {
  name: "TagCompo",
  components: {
    Tag,
  },
};
</script>

<style scoped>
div {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.875rem;
  padding: 0.2rem 0.5rem;
  background: var(--red);
  color: white;
}
</style>
