<template>
  <header class="flex justify-between p-4 items-center md:max-w-7xl lg:mx-auto">
    <RouterLink to="/" class="text-danger"><h1>Crispy lobster</h1></RouterLink>
    <nav>
      <ul>
        <li>
          <RouterLink to="/login"><button>Login</button></RouterLink>
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

