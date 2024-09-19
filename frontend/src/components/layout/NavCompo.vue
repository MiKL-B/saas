<template>
  <header
    class="flex justify-between p-4 items-center sticky-top border-b-grey md:max-w-7xl lg:mx-auto"
  >
    <h1>Saas</h1>
    <nav>
      <ul class="flex gap-2 items-center">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li>
          <RouterLink to="/login" class="uk-button uk-button-primary">Login</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavCompo",
};
</script>

<style>
header {
  z-index: 3;
  background: white;
}
</style>
