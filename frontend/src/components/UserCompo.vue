<template>
  <div class="p-4">
    <form>
      <fieldset class="uk-fieldset">
        <div class="grid md:grid-cols-2 gap-4">
          <!-- left -->
          <div>
            <h3 class="uk-h3">Account</h3>
            <p
              class="uk-margin-xsmall-top uk-text-small text-muted-foreground mb-4"
            >
              Manage your account.
            </p>
            <div class="uk-form-controls mb-4">
              <label class="uk-form-label" for="name">Name</label>
              <input
                class="uk-input"
                id="name"
                type="text"
                aria-describedby="name-help-block"
                placeholder="Name"
              />
            </div>
            <div class="uk-form-controls mb-4">
              <label class="uk-form-label" for="date">Date of birth</label>
              <input
                class="uk-input"
                id="date"
                type="date"
                aria-describedby="name-help-block"
              />
              <p
                class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
              >
                Your date of birth is used to calculate your age.
              </p>
            </div>
            <div class="uk-form-controls mb-4">
              <label class="uk-form-label" for="email">Email</label>
              <input
                class="uk-input"
                id="email"
                type="email"
                aria-describedby="name-help-block"
                placeholder="name@example.com"
              />
            </div>

            <div class="uk-form-controls mb-4">
              <label class="uk-form-label" for="password">Password</label>
              <input
                class="uk-input"
                id="password"
                type="password"
                aria-describedby="pass-help-block"
              />
            </div>

            <div class="uk-form-controls mb-4">
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
          </div>
          <!-- right -->
          <div>
            <h3 class="uk-h3">Preferences</h3>
            <p
              class="uk-margin-xsmall-top uk-text-small text-muted-foreground mb-4"
            >
              Manage your preferences.
            </p>
            <div class="uk-form-controls mb-4">
              <label class="uk-form-label" for="url">URLs</label>
              <p
                class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
              >
                Add links to your website, blog, or social media profiles.
              </p>
              <input
                class="uk-input mb-2"
                id="url"
                type="text"
                aria-describedby="pass-help-block"
                placeholder="https://www.website.com"
              />
              <input
                class="uk-input mb-2"
                id="url"
                type="text"
                aria-describedby="pass-help-block"
                placeholder="https://github.com/"
              />
              <button class="uk-button uk-button-default">Add URL</button>
            </div>

            <div class="uk-form-controls mb-4">
              <label class="uk-form-label" for="language">Language</label>
              <select name="select" id="select" class="uk-select">
                <option value="Fr">French</option>
                <option value="En">English</option>
                <option value="Sw">Swedish</option>
              </select>
            </div>
            <div class="uk-form-controls mb-4">
              <label>
                <input class="uk-checkbox" type="checkbox" />
                Remember me
              </label>
            </div>
            <button class="flex uk-button uk-button-primary">
              Update profile
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>

</template>

<script>

</script>


<style>

</style>