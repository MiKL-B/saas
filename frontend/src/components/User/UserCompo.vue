<template>
  <div class="p-4">
    <ul class="flex gap-4 border-b-grey mb-4">
      <li
        v-for="tab in tabs"
        :key="tab.name"
        @click="selectTab(tab.name)"
        :class="selectedTab === tab.name ? 'border-b-red-200' : 'text-grey-200'"
        class="cursor-pointer pb-2 px-2"
      >
        {{ tab.name }}
      </li>
    </ul>
    <form>
      <fieldset>
        <!-- tab account -->
        <div v-show="selectedTab === 'Account'">
          <h3>Account</h3>
          <p class="text-small text-grey-200 mb-4">Manage your account.</p>
          <!-- first name -->
          <div class="field mb-4">
            <label for="firstname">First name</label>
            <input
              id="firstname"
              type="text"
              placeholder="First name"
              readonly
              v-model="user.firstname"
            />
          </div>
          <!-- last name -->
          <div class="field mb-4">
            <label for="lastname">Last name</label>
            <input
              id="lastname"
              type="text"
              placeholder="Last name"
              readonly
              v-model="user.lastname"
            />
          </div>
          <!-- date -->
          <!-- <div class="field mb-4">
            <label for="date">Date of birth</label>
            <input id="date" type="date" />
            <p class="text-small text-grey">
              Your date of birth is used to calculate your age.
            </p>
          </div> -->
          <!-- email -->
          <div class="field mb-4">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              readonly
              v-model="user.email"
            />
          </div>
          <!-- password -->
          <!-- <div class="field mb-4">
            <label for="password">Password</label>
            <input id="password" type="password" />
          </div> -->
          <!-- confirm -->
          <!-- <div class="field mb-4">
            <label for="confirm">Confirm password</label>
            <input id="confirm" type="password" />
          </div> -->
        </div>
        <!-- tab preferences -->
        <div v-show="selectedTab === 'Preferences'">
          <h3>Preferences</h3>
          <p class="text-small text-grey-200 mb-4">Manage your preferences.</p>
          <div class="field mb-4">
            <label for="language">Language</label>
            <div class="select">
              <select
                name="select"
                id="select"
                v-model="currentLocale"
                @change="changeLanguage"
              >
                <option value="fr">{{ $t("french") }}</option>
                <option value="en">{{ $t("english") }}</option>
              </select>
            </div>
          </div>
          <!-- <h3>Preferences</h3>
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
            <div class="select">
              <select name="select" id="select">
                <option value="Fr">French</option>
                <option value="En">English</option>
                <option value="Sw">Swedish</option>
              </select>
            </div>
          </div>
          <div class="field mb-4">
            <input type="checkbox" id="check1" />
            <label for="check1"> Remember me </label>
          </div> -->
        </div>
        <!-- tab appearance -->
        <div v-show="selectedTab === 'Appearance'">
          <!-- <h3>Appearance</h3>
          <p class="text-small text-grey mb-4">
            Customize the appearance of the app. Automatically switch between
            day and night themes.
          </p>
          <div class="field mb-4">
            <label for="font">Font family</label>
            <p class="text-small text-grey">
              Set the font you want to use in the dashboard.
            </p>
            <div class="select">
              <select name="font" id="font">
                <option value="roboto">Roboto</option>
                <option value="inter">Inter</option>
                <option value="grotesk">Grotesk</option>
                <option value="geist">Geist</option>
              </select>
            </div>
          </div>

          <div class="field mb-4">
            <label for="theme">Theme</label>
            <p class="text-small text-grey">
              Select the theme for the dashboard.
            </p>
            <div class="flex gap-4 themes mt-2">
              <div class="cursor-pointer"></div>
              <div class=" cursor-pointer"></div>
            </div>
          </div>

 *
          <div class="field mb-4">
            <label for="color">Colors</label>
            <div class="colors">
              <div
                class="color"
                v-for="color in colors"
                :style="{ background: color.text }"
              ></div>
            </div>
          </div> -->
          <p>Coming soon...</p>
        </div>
        <button class="mt-4" disabled>Update settings</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
export default {
  name: "UserCompo",
  data() {
    return {
      currentLocale: this.$i18n.locale,
      user: {},
      authStore: useAuthStore(),
      selectedTab: "Account",
      tabs: [
        { name: "Account" },
        { name: "Preferences" },
        { name: "Appearance" },
      ],
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.currentLocale;
    },
    selectTab(tabName) {
      this.selectedTab = tabName;
    },
    getUser() {
      const PK_UserID = this.authStore.user.pk_userid;
      console.log(PK_UserID);
      if (!PK_UserID) {
        console.error(
          "PK_UserID est indéfini. L'utilisateur n'est pas connecté."
        );
        return;
      }
      axios
        .get(`http://127.0.0.1:3000/api/user/${PK_UserID}`)
        .then((response) => {
          this.user = response.data[0];
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données:", error);
        });
    },
  },
};
</script>

<style scoped>
.colors {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
}
.color {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
}
.themes div {
  border: 1px solid var(--secondary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  height: 100px;
  width: 100%;
  max-width: 12rem;
}
</style>
