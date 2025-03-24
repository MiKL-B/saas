<template>
  <SectionCompo>
    <template v-slot:content>
      <h1 class="text-center text-red-200">404</h1>
      <h2 class="text-center mb-4">Lobster not found</h2>
      <p class="text-center">
        "Oops! It seems as if this page has flown like a lobster that has
        escaped from its bucket! Go back to the information range before he
        pinches you !"
      </p>
      <img
        src="../assets/image.png"
        alt="A lobster with sunglasses on the beach"
        class="flex m-auto my-4 w-full max-w-96 border-radius-375 object-fit-cover"
      />
      <RouterLink to="/" class="text-underline-none">
        <button class="flex m-auto">Homepage</button>
      </RouterLink>
    </template>
  </SectionCompo>
</template>

<script>
import SectionCompo from "@/components/Reusable/SectionCompo.vue";
export default {
  name: "NotFoundView",
  components: {
    SectionCompo,
  },
};
</script>
