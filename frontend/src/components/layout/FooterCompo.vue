<template>
  <footer class="bg-light py-20">
    <div
      class="flex flex-col md:grid md:grid-cols-2 items-center md:max-w-7xl lg:mx-auto py-20"
    >
      <div>
        <h1 class="text-danger items-center mb-6">Crispy lobster</h1>
        <h2 class="mb-4">The newsletter</h2>
        <p class="mb-4 text-grey">
          Sign up for tips about working in Saas, news about our apps, and more.
        </p>
        <div class="flex flex-wrap gap-4 mb-4">
          <input
            type="email"
            placeholder="Your email address"
            class="w-96 bg-white"
          />
          <button>Subscribe</button>
        </div>
        <p class="text-small text-grey mb-2">
          By subscribing, you consent to receive updates from our
        </p>
        <p class="text-small text-grey">company and agree to our Privacy Policy.</p>
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
    <hr />
    <div class="flex justify-between text-center md:max-w-7xl lg:mx-auto">
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
