<template>
  <header
    class="flex justify-between p-4 items-center md:max-w-7xl lg:mx-auto" 
  >
    <RouterLink to="/" class="text-danger uk-h1">Crispy lobster</RouterLink>
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

</style>
