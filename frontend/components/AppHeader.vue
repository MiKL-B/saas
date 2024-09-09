<template>
  <header>
    <nav class="xl:max-w-7xl xl:mx-auto">
      <NuxtLink to="/">Saas</NuxtLink>
      <NuxtLink to="/login"><Button>Login</Button></NuxtLink>
    </nav>
  </header>
</template>

<style>
header {
  position: sticky;
  top: 0;
  background: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
}
nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
nav a {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
