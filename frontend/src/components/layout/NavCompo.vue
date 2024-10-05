<template>
  <header class="flex justify-between py-4 px-6 items-center md:max-w-7xl lg:mx-auto sticky-top backdrop-blur z-3">
    <RouterLink to="/" class="text-red-200 text-underline-none">
      <h1>Crispy lobster</h1>
    </RouterLink>
    <nav class="display-mobile">
      <RouterLink to="/login">
        <Menu/>
      </RouterLink>
    </nav>
    <nav class="display-desktop">
      <ul class="flex gap-2 ">
        <li>
          <RouterLink to="/login">
            <button class="secondary">Login</button>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/signup">
            <button>Get started</button>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { Menu } from 'lucide-vue-next';
export default {
  name: "NavCompo",
  components:{
    Menu
  }
};
</script>
