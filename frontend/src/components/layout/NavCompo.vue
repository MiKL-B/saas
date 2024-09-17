<template>
  <nav class="uk-navbar-container flex sticky-top">
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li><RouterLink to="/">Saas</RouterLink></li>
      </ul>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <RouterLink to="/login"
            ><button class="uk-button uk-button-primary">
              Login
            </button></RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavCompo",
};
</script>

<style scoped>
nav{
  z-index: 3;
}
</style>
