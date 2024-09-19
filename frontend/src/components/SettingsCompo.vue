<template>
  <div class="flex flex-col lg:flex-row justify-between gap-4 p-4">
    <div class="lg:w-96">
      <ul
        class="flex flex-col justify-between uk-nav uk-nav-primary"
        uk-nav
      >
        <li class="uk-active">
          <a href="#">
            <span class="flex gap-4">
              <span>Profile</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="flex gap-4">
              <span>Account</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="flex gap-4">
              <span>Appearance</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="flex gap-4">
              <span>Notifications</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="flex gap-4">
              <span>Display</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <form class="lg:w-full">
      <fieldset class="uk-fieldset">
        <div>
          <h3 class="uk-card-title">Settings</h3>
          <p class="uk-margin-xsmall-top uk-text-small text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <div class="flex flex-col gap-4 lg:w-96">
          <!-- Name -->
          <div class="uk-form-controls">
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
          <div class="uk-form-controls">
            <label class="uk-form-label" for="password">Confirm password</label>
            <input
              class="uk-input mb-4"
              id="confirm"
              type="confirm"
              aria-describedby="pass-help-block"
            />
          </div>
          <!-- Remember me -->
          <div class="uk-form-controls">
            <label>
              <input class="uk-checkbox" type="checkbox" />
              Remember me
            </label>
          </div>
          <button class="flex uk-button uk-button-primary">Update profile</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "SettingsCompo",
};
</script>
