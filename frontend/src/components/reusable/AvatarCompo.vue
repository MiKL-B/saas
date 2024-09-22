<template>
  <div class="avatar flex justify-center items-center">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "AvatarCompo",
};
</script>

<style>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* background:#F1F5F9; */
  cursor: pointer;
}
</style>
