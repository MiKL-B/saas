<template>
  <footer class="bg-light py-20">
    <div
      class="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:max-w-7xl lg:mx-auto py-20 px-6"
    >
      <div>
        <h1 class="text-danger items-center mb-6 text-center md:text-left">Crispy lobster</h1>
        <h2 class="mb-4 text-center md:text-left">The newsletter</h2>
        <p class="mb-4 text-grey text-center md:text-left">
          Sign up for tips about working in Saas, news about our apps, and more.
        </p>
        <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
          <input
            type="email"
            placeholder="Your email address"
            class="w-12rem bg-white"
          />
          <button>Subscribe</button>
        </div>
      </div>
      <nav class="flex flex-row justify-between px-4 gap-4">
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
    </div>
    <div class="flex justify-between text-center md:max-w-7xl lg:mx-auto px-6">
      <span>© 2028 Blocs Master. All rights reserved.</span>
      <div class="flex gap-4">
        <a href="#">Privacy Policy </a>
        <a href="#">Terms and Conditions</a>
      </div>
    </div>
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
