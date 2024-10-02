<template>
  <header class="flex justify-between p-4 items-center md:max-w-7xl lg:mx-auto sticky-top backdrop-blur z-3">
    <RouterLink to="/" class="text-danger text-decoration-none">
      <h1>Crispy lobster</h1>
    </RouterLink>
    <nav>
      <ul class="flex gap-2">
        <li>
          <RouterLink to="/login">
            <button class="secondary">Login</button>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/login">
            <button class="danger">Get started</button>
          </RouterLink>
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
