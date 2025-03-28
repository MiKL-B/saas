import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "@/stores/authStore";
import { createI18n } from 'vue-i18n';
import messages from './locales';


const app = createApp(App)
const pinia = createPinia();

const i18n = createI18n({
  locale: 'en', 
  messages,
});

app.use(pinia);
app.use(router);
app.use(i18n);

app.mount('#app')

var jwt = localStorage.getItem("jwt");
if (jwt) {
  let token = jwtDecode(jwt);
  let userData = { pk_userid: token.pk_userid, email: token.email };
  const authStore = useAuthStore();
  authStore.login(userData);
  console.log("from main",authStore)

  // get role, id...
}

// go to /home if connected
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.path === "/home") {
    if (authStore.isLoggedIn) {
      return next();
    } else {
      return next("/");
    }
  } else {
    return next();
  }
});

// go to / if disconnected
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.path === "/") {
    if (authStore.isLoggedIn == false) {
      return next();
    } else {
      return next("/home");
    }
  } else {
    return next();
  }
});