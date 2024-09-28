<template>
  <div class="p-4">
    <form>
      <fieldset>
        <div class="grid md:grid-cols-2 gap-4">
          <!-- left -->
          <div>
            <h3>Account</h3>
            <p class="text-small text-grey mb-4">Manage your account.</p>
            <!-- name -->
            <div class="field mb-4">
              <label for="name">Name</label>
              <input id="name" type="text" placeholder="Name" />
            </div>
            <!-- date -->
            <div class="field mb-4">
              <label for="date">Date of birth</label>
              <input id="date" type="date" />
              <p class="text-small text-grey">
                Your date of birth is used to calculate your age.
              </p>
            </div>
            <!-- email -->
            <div class="field mb-4">
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="name@example.com" />
            </div>
            <!-- password -->
            <div class="field mb-4">
              <label for="password">Password</label>
              <input id="password" type="password" />
            </div>
            <!-- confirm -->
            <div class="field mb-4">
              <label for="confirm">Confirm password</label>
              <input id="confirm" type="password" />
            </div>
            <!-- color -->
            <div class="field">
              <label for="color">Colors</label>
              <div class="flex gap-2">
                <div
                  class="color"
                  v-for="color in colors"
                  :style="{ background: color.text }"
                ></div>
              </div>
            </div>
          </div>
          <!-- right -->
          <div>
            <h3>Preferences</h3>
            <p class="text-small text-grey mb-4">Manage your preferences.</p>
            <div class="mb-4">
              <div class="field">
                <label for="url">Urls</label>
                <p class="text-small text-grey">
                  Add links to your website, blog, or social media profiles.
                </p>
                <input type="text" placeholder="https://www.website.com" />
                <input type="text" placeholder="https://github.com/" />
              </div>
              <button class="secondary">Add URL</button>
            </div>

            <div class="field mb-4">
              <label for="language">Language</label>
              <select name="select" id="select" class="uk-select">
                <option value="Fr">French</option>
                <option value="En">English</option>
                <option value="Sw">Swedish</option>
              </select>
            </div>
            <div class="field mb-4">
              <input type="checkbox" id="check1" />
              <label for="check1"> Remember me </label>
            </div>
            <button>Update profile</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserCompo",
  data() {
    return {
      colors: [
        {
          index: 1,
          text: "#f9daff",
        },
        {
          index: 2,
          text: "#ecdaff",
        },
        {
          index: 3,
          text: "#dae3ff",
        },
        {
          index: 4,
          text: "#e0daff",
        },
        {
          index: 5,
          text: "#daeeff",
        },
        {
          index: 6,
          text: "#dafafe",
        },
        {
          index: 7,
          text: "#dafff7",
        },
        {
          index: 8,
          text: "#daffec",
        },
        {
          index: 9,
          text: "#ecffda",
        },
        {
          index: 10,
          text: "#fff8de",
        },
        {
          index: 11,
          text: "#ffe9e0",
        },
        {
          index: 12,
          text: "#ffe0e0",
        },
        {
          index: 13,
          text: "#ffdae0",
        },
        {
          index: 14,
          text: "#f7f1e0",
        },
      ],
    };
  },
};
</script>

<style scoped>
.color {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
</style>
