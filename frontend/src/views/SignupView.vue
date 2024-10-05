<template>
  <NavCompo />
  <main>
    <SectionCompo>
      <template v-slot:content>
        <form v-on:submit.prevent>
          <fieldset>
            <h2 class="mb-4 text-center">Create an account</h2>
            <!-- Name -->
            <div class="flex flex-col md:flex-row md:justify-between md:gap-2">
              <div class="field md:w-full">
                <label for="firstname">First name</label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  v-model="formData.firstname"
                  :class="formErrors.firstname != '' ? 'border-red-200' : ''"
                  required
                />
                <span
                  v-if="formErrors.firstname"
                  class="flex items-center gap-2 text-small text-red-200"
                >
                  <CircleAlert :size="16" />{{ formErrors.firstname }}</span
                >
              </div>
              <div class="field md:w-full">
                <label for="lastname">Last name</label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  v-model="formData.lastname"
                  :class="formErrors.lastname != '' ? 'border-red-200' : ''"
                  required
                />
                <span
                  v-if="formErrors.lastname"
                  class="flex items-center gap-2 text-small text-red-200"
                >
                  <CircleAlert :size="16" />{{ formErrors.lastname }}</span
                >
              </div>
            </div>
            <!-- Email -->
            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                v-model="formData.email"
                :class="formErrors.email != '' ? 'border-red-200' : ''"
                required
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
                :class="formErrors.password != '' ? 'border-red-200' : ''"
                required
              />
              <span
                v-if="formErrors.password"
                class="flex items-center gap-2 text-small text-red-200"
              >
                <CircleAlert :size="16" />{{ formErrors.password }}</span
              >
            </div>
            <!-- Confirm password -->
            <div class="field">
              <label for="confirm">Confirm</label>
              <input
                id="confirm"
                :type="isEyeOpen ? 'text' : 'password'"
                v-model="formData.confirm"
                :class="formErrors.confirm != '' ? 'border-red-200' : ''"
                required
              />
              <span
                v-if="formErrors.confirm"
                class="flex items-center gap-2 text-small text-red-200"
              >
                <CircleAlert :size="16" />{{ formErrors.confirm }}</span
              >
            </div>
            <button type="submit" class="w-full my-4" @click="signup">
              Signup
            </button>
            <p class="flex justify-center p-4 gap-2">
              Already have an account ?
              <RouterLink to="/login" class="cursor-pointer">Login</RouterLink>
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
import SectionCompo from "@/components/Reusable/SectionCompo.vue";
import FooterCompo from "@/components/Layout/FooterCompo.vue";
import { CircleAlert, Eye, EyeOff } from "lucide-vue-next";
export default {
  name: "SignupView",
  components: {
    NavCompo,
    SectionCompo,
    FooterCompo,
    CircleAlert,
    Eye,
    EyeOff,
  },
  data() {
    return {
      isEyeOpen: false,
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm: "",
      },
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm: "",
      },
    };
  },
  methods: {
    signup() {
      this.formErrors.firstname = "";
      this.formErrors.lastname = "";
      this.formErrors.email = "";
      this.formErrors.password = "";
      this.formErrors.confirm = "";

      if (this.formData.firstname.trim() === "") {
        this.formErrors.firstname = "Empty first name";
        return;
      }
      if (this.formData.lastname.trim() === "") {
        this.formErrors.lastname = "Empty last name";
        return;
      }
      if (this.formData.email.trim() === "") {
        this.formErrors.email = "Empty email!";
        return;
      }
      if (!this.validEmail(this.formData.email)) {
        this.formErrors.email = "Valid email required";
        return;
      }
      if (this.formData.password.trim() === "") {
        this.formErrors.password = "Empty password";
        return;
      }
      if (!this.validPassword(this.formData.password)) {
        this.formErrors.password =
          "Valid password required (8 characters, 1 uppercase, 1 number)";
        return;
      }
      if (this.formData.confirm.trim() === "") {
        this.formErrors.confirm = "Empty confirm";
        return;
      }
      if (this.formData.password !== this.formData.confirm) {
        this.formErrors.confirm = "Password not equal to confirm";
        return;
      }
      if (
        this.formErrors.firstname == "" &&
        this.formErrors.lastname == "" &&
        this.formErrors.email == "" &&
        this.formErrors.password == "" &&
        this.formErrors.confirm == ""
      ) {
        this.$router.push("/home");
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword: function (password) {
      var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      return re.test(password);
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
