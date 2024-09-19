<template>
  <NavCompo />
  <main>
    <SectionCompo>
      <template v-slot:content>
        <form>
          <fieldset>
            <legend class="uk-h2 mb-4">
              {{ isLoginForm ? "Login to your account" : "Create an account" }}
            </legend>
            <!-- name -->
            <div v-if="!isLoginForm" class="mb-2">
              <label for="name">Name</label>
              <input
                class="uk-input"
                id="name"
                type="name"
                aria-describedby="name-help-block"
                placeholder="Name"
              />
            </div>
            <!-- email -->
            <div class="mb-2">
              <label for="email">Email</label>
              <input
                class="uk-input"
                id="email"
                type="email"
                aria-describedby="name-help-block"
                placeholder="name@example.com"
              />
            </div>
            <!-- Password -->
            <div class="mb-2">
              <label for="password">Password</label>
              <input
                class="uk-input"
                id="password"
                type="password"
                aria-describedby="pass-help-block"
              />
            </div>
            <!-- Confirm password -->
            <div v-if="!isLoginForm" class="mb-2">
              <label for="confirm">Confirm password</label>
              <input
                class="uk-input"
                id="confirm"
                type="password"
                aria-describedby="pass-help-block"
              />
            </div>
            <!-- Remember me -->
            <div v-if="isLoginForm" class="flex gap-2 items-center text-center">
              <input id="remember" class="uk-checkbox" type="checkbox" />
              <label for="remember">Remember me</label>
            </div>
            <RouterLink to="/home" class="uk-button uk-button-primary w-full my-4">
              <button>{{ isLoginForm ? "Login" : "Sign up" }}</button>
            </RouterLink>
            <hr class="uk-divider-icon" />
            <p class="uk-link flex justify-center p-4">
              {{ isLoginForm ? "" : "Already have an account ?" }}
              <span
                class="underline cursor-pointer link"
                @click="isLoginForm = !isLoginForm"
                >{{ isLoginForm ? "Create an account here !" : "Login" }}</span
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
import NavCompo from "@/components/layout/NavCompo.vue";
import FooterCompo from "@/components/layout/FooterCompo.vue";
import SectionCompo from "@/components/reusable/SectionCompo.vue";
export default {
  name: "LoginView",
  components: { NavCompo, FooterCompo, SectionCompo },
  data() {
    return {
      isLoginForm: false,
    };
  },
};
</script>
<style>
form{
  height:30rem;
  max-width:30rem;
  margin:auto;
}
</style>
