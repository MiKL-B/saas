<template>
  <SectionCompo>
    <template v-slot:content>
      <h1 class="text-9xl text-center">404</h1>
      <h2 class="uk-h2 text-center mb-4">Page not found</h2>
      <RouterLink to="/"
        ><button class="uk-button uk-button-primary flex m-auto">
          Homepage
        </button></RouterLink
      >
    </template>
  </SectionCompo>
</template>

<script>
import SectionCompo from "@/components/reusable/SectionCompo.vue";
export default {
  name: "NotFoundView",
  components: {
    SectionCompo,
  },
};
</script>
