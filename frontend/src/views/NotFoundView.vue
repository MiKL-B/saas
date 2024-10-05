<template>
  <SectionCompo>
    <template v-slot:content>
      <h1 class="text-9xl text-center text-red-200">404</h1>
      <h2 class="text-center mb-4">Lobster not found</h2>
      <p class="text-center">
        "Oups ! On dirait que cette page a filé comme un homard échappé de son
        seau ! Retournez à la plage des informations avant qu’il ne vous pince
        !"
      </p>
      <img
        src="../assets/image.png"
        alt=""
        class="flex m-auto my-4 w-full max-w-96"
        style="object-fit: cover; border-radius: 0.375rem;"
      />
      <RouterLink to="/">
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
