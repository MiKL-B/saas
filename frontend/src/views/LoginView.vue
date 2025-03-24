<template>
  <NavCompo />
  <main>
    <SectionCompo>
      <template v-slot:content>
        <form v-on:submit.prevent>
          <fieldset>
            <h2 class="mb-4 text-center">Login to your account</h2>
            <!-- Email -->
            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="johndoe@example.com"
                v-model="formData.email"
                :class="formErrors.email != '' ? 'border-red-200' : ''"
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
                <component
                  :is="isEyeOpen ? eyeOpen : eyeClose"
                  @click="toggleEye"
                  class="cursor-pointer text-red-200"
                />
              </div>
              <input
                id="password"
                :type="isEyeOpen ? 'text' : 'password'"
                v-model="formData.password"
                :class="formErrors.password != '' ? 'border-red-200' : ''"
                placeholder="YourPassword"
              />
              <a href="#">Forgot your password?</a>
              <span
                v-if="formErrors.password"
                class="flex items-center gap-2 text-small text-red-200"
              >
                <CircleAlert :size="16" />{{ formErrors.password }}</span
              >
            </div>
            <!-- extra field -->
            <div class="field nickname">
              <label class="nickname" for="nickname"></label>
              <input
                v-model="nickname"
                class="nickname"
                autocomplete="off"
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Your nickname here"
              />
            </div>
            <button class="w-full mb-4">
              Login
            </button>

            <p class="flex justify-center gap-2">
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
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import NavCompo from "@/components/Layout/NavCompo.vue";
import FooterCompo from "@/components/Layout/FooterCompo.vue";
import SectionCompo from "@/components/Reusable/SectionCompo.vue";
import { CircleAlert, Eye, EyeOff } from "lucide-vue-next";
export default {
  name: "LoginView",
  components: { NavCompo, FooterCompo, SectionCompo, CircleAlert, Eye, EyeOff },
  data() {
    return {
      authStore: useAuthStore(),
      eyeOpen: Eye,
      eyeClose: EyeOff,
      isEyeOpen: false,
      token: "",
      formData: {
        email: "",
        password: "",
        remember: false,
      },
      formErrors: {
        email: "",
        password: "",
      },
      // extra field
      nickname: "",
    };
  },
  methods: {
    toggleEye() {
      this.isEyeOpen = !this.isEyeOpen;
    },
    resetFormErrorsFields() {
      this.formErrors.email = "";
      this.formErrors.password = "";
    },
    checkLoginFields() {
      this.resetFormErrorsFields();
      if (this.formData.email.trim() === "") {
        this.formErrors.email = "Empty email!";
        return;
      }
      if (this.formData.password.trim() === "") {
        this.formErrors.password = "Empty password";
        return;
      }
      if (this.nickname.trim() !== "") {
        return;
      }
      if (this.formErrors.email == "" && this.formErrors.password == "") {
        this.sendData();
      }
    },
    sendData() {
      axios
        .post(`http://localhost:3000/api/user/login`, {
          email: this.formData.email,
          password: this.formData.password,
        })
        .then((response) => {
          // console.log(response);
          this.token = response.data.token;
          let jwt = this.token;
          localStorage.setItem("jwt", jwt);

          axios.defaults.headers.common = {
            Authorization: `Bearer ${jwt}`,
          };
          let decodedToken = jwtDecode(jwt);
          let userData = {
            pk_userid: decodedToken.pk_userid,
            email: this.formData.email,
            password: this.formData.password,
          };
          this.authStore.login(userData);
          console.log("from login", this.authStore);
          // modal well logged in
          // setTimeout(window.location.reload(), 2000);
          this.$router.push("/home");
        })
        .catch((err) => {
          let error = err.request.response;
          if (error == "1") {
            this.formErrors.email =
              "Aucun compte associé à cette adresse e-mail. Veuillez créer un compte pour vous connecter.";
          }
          if (error == "2") {
            this.formErrors.password = "Mot de passe incorrect";
          }
        });
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
