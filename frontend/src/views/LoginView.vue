<template>
  <NavCompo />
  <main>
    <SectionCompo>
      <template v-slot:content>
        <form v-on:submit.prevent>
          <fieldset>
            <h2 class="mb-4">
              {{ isLoginForm ? "Login to your account" : "Create an account" }}
            </h2>
            <section>
              <p>Name: {{ name }}</p>
              <p>Email: {{ email }}</p>
              <p>Password: {{ password }}</p>
              <p>Confirm: {{ confirm }}</p>
              <p>Remember: {{ remember }}</p>
              <hr />
            </section>
            <!-- Name -->
            <div class="field" v-if="!isLoginForm">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                v-model="name"
                :class="formErrors.name != '' ? 'border-danger' : ''"
              />
              <span v-if="formErrors.name" class="text-small text-danger">{{
                formErrors.name
              }}</span>
            </div>
            <!-- Email -->
            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="name@example.com"
                v-model="email"
                :class="formErrors.email != '' ? 'border-danger' : ''"
              />
              <span v-if="formErrors.email" class="text-small text-danger">{{
                formErrors.email
              }}</span>
            </div>
            <!-- Password -->
            <div class="field">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                v-model="password"
                :class="formErrors.password != '' ? 'border-danger' : ''"
              />
              <span v-if="formErrors.password" class="text-small text-danger">{{
                formErrors.password
              }}</span>
            </div>
            <!-- Confirm password -->
            <div v-if="!isLoginForm" class="field">
              <label for="confirm">Confirm</label>
              <input
                id="confirm"
                type="password"
                v-model="confirm"
                :class="formErrors.confirm != '' ? 'border-danger' : ''"
              />
              <span v-if="formErrors.confirm" class="text-small text-danger">{{
                formErrors.confirm
              }}</span>
            </div>
            <!-- Remember me -->
            <div v-if="isLoginForm" class="field">
              <input id="remember" type="checkbox" v-model="remember" />
              <label for="remember">Remember me</label>
            </div>

            <button class="w-full my-4" @click="onSubmit">
              {{ isLoginForm ? "Login" : "Sign up" }}
            </button>

            <hr />
            <p class="flex justify-center p-4 gap-2">
              {{ isLoginForm ? "" : "Already have an account ?" }}
              <a
                href="#"
                class="cursor-pointer"
                @click="isLoginForm = !isLoginForm"
                >{{ isLoginForm ? "Create an account here !" : "Login" }}</a
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

export default {
  name: "LoginView",
  components: { NavCompo, FooterCompo, SectionCompo },
  data() {
    return {
      isLoginForm: false,
      name: "",
      email: "",
      password: "",
      confirm: "",
      remember: false,
      user: {
        name: "John",
        email: "john@mail.com",
        password: "doe",
      },
      formData:{
        name:"",
        email:"",
        password:"",
        confirm:"",
      },
      formErrors: {
        name: "",
        email: "",
        password: "",
        confirm: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.isLoginForm) {
        this.login();
      } else {
        this.signup();
      }
      if (
        this.formErrors.name == "" &&
        this.formErrors.email == "" &&
        this.formErrors.password == "" &&
        this.formErrors.confirm == ""
      ) {
        this.$router.push("/home");
      }
    },
    login() {
      console.log("login");
    },
    signup() {
      this.formErrors.name = "";
      this.formErrors.email = "";
      this.formErrors.password = "";
      this.formErrors.confirm = "";

      if (this.name.trim() === "") {
        this.formErrors.name = "Empty name!";
        return;
      }
      if (this.email.trim() === "") {
        this.formErrors.email = "Empty email!";
        return;
      }
      if (this.password.trim() === "") {
        this.formErrors.password = "Empty password";
        return;
      }
      if (this.confirm.trim() === "") {
        this.formErrors.confirm = "Empty confirm";
        return;
      }
      // check password != confirm -> return
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
