import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/HelpView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/TestView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 });
    });
  },
});


export default router;
