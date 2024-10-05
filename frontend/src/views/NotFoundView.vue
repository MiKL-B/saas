<template>
  <SectionCompo>
    <template v-slot:content>
      <h1 class="text-center text-red-200">404</h1>
      <h2 class="text-center mb-4">Lobster not found</h2>
      <p class="text-center">
        "Oups ! On dirait que cette page a filé comme un homard échappé de son
        seau ! Retournez à la plage des informations avant qu’il ne vous pince
        !"
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
