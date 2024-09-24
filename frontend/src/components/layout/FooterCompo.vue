<template>
  <footer
    class="flex flex-row justify-between py-20 px-4 gap-2 md:max-w-7xl lg:mx-auto"
  >
    <ul>
      <li><h3 class="uk-h3">Saas</h3></li>
      <li class="link underline"><a href="#">Features</a></li>
      <li class="link underline"><a href="#">Pricing</a></li>
    </ul>
    <ul>
      <li><h3 class="uk-h3">Support</h3></li>
      <li class="link underline"><RouterLink to="/help" target="_blank">Help docs</RouterLink></li>
      <li class="link underline"><a href="#">Contact us</a></li>
      <li class="link underline"><a href="#">Changelog</a></li>
      <li class="link underline"><a href="#">Affiliation</a></li>
    </ul>
    <ul>
      <li><h3 class="uk-h3">More</h3></li>
      <li class="link underline"><a href="#">Terms</a></li>
      <li class="link underline"><a href="#">Privacy</a></li>
      <li class="link underline"><a href="#">About us</a></li>
      <li class="link underline"><a href="#">Affiliation</a></li>
    </ul>
  </footer>
</template>

<style scoped>
.link{
color:var(--red);
}
</style>
