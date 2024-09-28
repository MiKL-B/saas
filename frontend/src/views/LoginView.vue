<template>
  <NavCompo />
  <main>
    <SectionCompo>
      <template v-slot:content>
        <form>
          <fieldset>
            <h2 class="mb-4">
              {{ isLoginForm ? "Login to your account" : "Create an account" }}
            </h2>
            <!-- Name -->
            <div class="field" v-if="!isLoginForm">
              <label for="name">Name</label>
              <input id="name" type="text" placeholder="Name" />
            </div>
            <!-- Email -->
            <div class="field">
              <label for="email">Email</label>
              <input id="email" type="text" placeholder="name@example.com" />
            </div>
            <!-- Password -->
            <div class="field">
              <label for="password">Password</label>
              <input id="password" type="password" />
            </div>
            <!-- Confirm password -->
            <div v-if="!isLoginForm" class="field">
              <label for="confirm">Confirm</label>
              <input id="confirm" type="password" />
            </div>
            <!-- Remember me -->
            <div v-if="isLoginForm" class="field">
              <input id="remember" type="checkbox" />
              <label for="remember">Remember me</label>
            </div>
            <RouterLink to="/home">
              <button class="w-full my-4">
                {{ isLoginForm ? "Login" : "Sign up" }}
              </button>
            </RouterLink>
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
    };
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
