<template>
  <NavCompo />
  <main>
    <SectionCompo>
      <template v-slot:content>
        <form v-on:submit.prevent>
          <fieldset>
            <h2 class="mb-4 text-center">Login to your account</h2>
            <!-- <section>
              <p>First name: {{ firstname }}</p>
              <p>Last name: {{ lastname }}</p>
              <p>Email: {{ email }}</p>
              <p>Password: {{ password }}</p>
              <p>Confirm: {{ confirm }}</p>
              <p>Remember: {{ remember }}</p>
              <hr />
            </section> -->

            <!-- Email -->
            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="name@example.com"
                v-model="formData.email"
                :class="formErrors.email != '' ? 'border-danger' : ''"
              />
              <span
                v-if="formErrors.email"
                class="flex items-center gap-2 text-small text-red-200"
              >
                <CircleAlert :size="16" />{{ formErrors.email }}</span
              >
            </div>
            <!-- Password -->
            <div class="field">
              <div class="flex justify-between items-center">
                <label for="password">Password</label>
                <Eye
                  @click="toggleEye"
                  v-if="isEyeOpen"
                  class="cursor-pointer text-grey-200"
                />
                <EyeOff
                  @click="toggleEye"
                  v-else
                  class="cursor-pointer text-grey-200"
                />
              </div>
              <input
                id="password"
                :type="isEyeOpen ? 'text' : 'password'"
                v-model="formData.password"
                :class="formErrors.password != '' ? 'border-danger' : ''"
              />
              <a href="#">Forgot your password?</a>
              <span
                v-if="formErrors.password"
                class="flex items-center gap-2 text-small text-red-200"
              >
                <CircleAlert :size="16" />{{ formErrors.password }}</span
              >
            </div>

            <!-- Remember me -->
            <div class="field">
              <input id="remember" type="checkbox" v-model="formData.remember" />
              <label for="remember">Remember me</label>
            </div>
            <button type="submit" class="w-full my-4" @click="login">
              Login
            </button>
            <p class="flex justify-center p-4 gap-2">
              <RouterLink to="/signup" class="cursor-pointer"
                >Create an account here !</RouterLink
              >
            </p>
          </fieldset>
        </form>
      </template>
    </SectionCompo>
  </main>
  <FooterCompo />
</template>

<script>
import NavCompo from "@/components/Layout/NavCompo.vue";
import FooterCompo from "@/components/Layout/FooterCompo.vue";
import SectionCompo from "@/components/Reusable/SectionCompo.vue";
import { CircleAlert, Eye, EyeOff } from "lucide-vue-next";
export default {
  name: "LoginView",
  components: { NavCompo, FooterCompo, SectionCompo, CircleAlert, Eye, EyeOff },
  data() {
    return {
      isEyeOpen: false,
      formData: {
        email: "",
        password: "",
        remember:false,
      },
      formErrors: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      this.formErrors.email = "";
      this.formErrors.password = "";

      if (this.formData.email.trim() === "") {
        this.formErrors.email = "Empty email!";
        return;
      }
      if (this.formData.password.trim() === "") {
        this.formErrors.password = "Empty password";
        return;
      }
      if (this.formErrors.email == "" && this.formErrors.password == "") {
        this.$router.push("/home");
      }
    },
    toggleEye() {
      this.isEyeOpen = !this.isEyeOpen;
    },
  },
};
</script>
<style scoped>
form {
  height: 30rem;
  max-width: 30rem;
  margin: auto;
}
</style>
