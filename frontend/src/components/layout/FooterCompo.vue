<template>
  <footer class="bg-light">
    <nav
      class="flex flex-row justify-between py-20 px-4 gap-2 md:max-w-7xl lg:mx-auto"
    >
      <ul>
        <li><h3>Saas</h3></li>
        <li><a href="#" class="link">Features</a></li>
        <li><a href="#" class="link">Pricing</a></li>
      </ul>
      <ul>
        <li><h3>Support</h3></li>
        <li>
          <RouterLink to="/help" target="_blank" class="link"
            >Help docs</RouterLink
          >
        </li>
        <li><a href="#" class="link">Contact us</a></li>
        <li><a href="#" class="link">Changelog</a></li>
        <li><a href="#" class="link">Affiliation</a></li>
      </ul>
      <ul>
        <li><h3>More</h3></li>
        <li><a href="#" class="link">Terms</a></li>
        <li><a href="#" class="link">Privacy</a></li>
        <li><a href="#" class="link">About us</a></li>
        <li><a href="#" class="link">Affiliation</a></li>
      </ul>
    </nav>
  </footer>
</template>
<style scoped>
ul li {
  margin-bottom: 1rem;
}
.link {
  color: var(--grey);
  font-weight: normal;
  text-decoration: none;
}
.link:hover {
  color: var(--primary);
  transition: all 0.3s ease;
}
</style>
