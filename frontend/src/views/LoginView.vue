<template>
    <NavCompo />
    <main>
      <form class="uk-width-1-2@m uk-card m-auto">
        <fieldset class="uk-fieldset">
          <div class="uk-card-header">
            <h3 class="uk-card-title">
              {{ isLoginForm ? "Log in to your account" : "Create an account" }}
            </h3>
            <p class="uk-margin-xsmall-top uk-text-small text-muted-foreground">
              To continue to Saas
            </p>
          </div>
          <div class="uk-card-body flex flex-col gap-4">
            <!-- Name -->
            <div class="uk-form-controls" v-if="!isLoginForm">
              <label class="uk-form-label" for="email">Name</label>
              <input
                class="uk-input"
                id="name"
                type="name"
                aria-describedby="name-help-block"
                placeholder="Name"
              />
            </div>
            <!-- Email -->
            <div class="uk-form-controls">
              <label class="uk-form-label" for="email">Email</label>
              <input
                class="uk-input"
                id="email"
                type="email"
                aria-describedby="name-help-block"
                placeholder="name@example.com"
              />
            </div>
            <!-- Password -->
            <div class="uk-form-controls">
              <label class="uk-form-label" for="password">Password</label>
              <input
                class="uk-input"
                id="password"
                type="password"
                aria-describedby="pass-help-block"
              />
            </div>
            <!-- Confirm password -->
            <div class="uk-form-controls" v-if="!isLoginForm">
              <label class="uk-form-label" for="password"
                >Confirm password</label
              >
              <input
                class="uk-input mb-4"
                id="confirm"
                type="confirm"
                aria-describedby="pass-help-block"
              />
            </div>
            <!-- Remember me -->
            <div v-if="isLoginForm" class="uk-form-controls">
              <label>
                <input class="uk-checkbox" type="checkbox" />
                Remember me
              </label>
            </div>
          </div>
          <div class="uk-card-footer uk-flex">
            <RouterLink
              to="/home"
              class="uk-button uk-button-primary uk-width-1-1"
            >
              <button>{{ isLoginForm ? "Login" : "Sign up" }}</button>
            </RouterLink>
          </div>
          <hr class="uk-divider-icon" />
          <p class="uk-link flex justify-center p-4">
            {{ isLoginForm ? "" : "Already have an account ?" }}
            <span
              class="underline cursor-pointer link"
              @click="isLoginForm = !isLoginForm"
              >{{ isLoginForm ? "Create an account here !" : "Login" }}</span
            >
          </p>
          <hr class="uk-divider-icon" />
          <!-- Agree terms -->
          <p v-if="!isLoginForm" class="text-center my-4">
            By clicking continue, you agree to our
            <a href="#" class="underline link">Terms of Service</a> and
            <a href="#" class="underline link">Privacy Policy</a>.
          </p>
          <!-- A problem to connect (forgot password, email, name etc) -->
          <a v-else href="#" class="underline link flex justify-center my-4">
            A problem to connect ?
          </a>
        </fieldset>
      </form>
    </main>
    <FooterCompo />
</template>

<script>
import NavCompo from "@/components/layout/NavCompo.vue";
import FooterCompo from "@/components/layout/FooterCompo.vue";
export default {
  name: "LoginView",
  components: { NavCompo, FooterCompo },
  data() {
    return {
      isLoginForm: false,
    };
  },
};
</script>
