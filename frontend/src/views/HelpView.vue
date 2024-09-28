<template>
  <NavCompo />
  <main>
    <SectionCompo>
      <template v-slot:content>
        <p>
          Documentation
        </p>
      </template>
    </SectionCompo>
  </main>
  <FooterCompo/>
</template>

<script>
import FooterCompo from "@/components/Layout/FooterCompo.vue";
import NavCompo from "@/components/Layout/NavCompo.vue";
import SectionCompo from "@/components/Reusable/SectionCompo.vue";

export default {
  name: "HelpView",
  components:{
    NavCompo, SectionCompo, FooterCompo
  }
};
</script>
