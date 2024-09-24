<template>
  <header
    class="flex justify-between p-4 items-center sticky-top md:max-w-7xl lg:mx-auto"
  >
    <RouterLink to="/">Saas</RouterLink>
    <nav>
      <ul>
        <li>
          <RouterLink to="/login" class="uk-button uk-button-primary"
            >Login</RouterLink
          >
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
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
</style>
