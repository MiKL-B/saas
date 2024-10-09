<template>
  <div class="container">
    <!-- nav mobile -->
    <nav
      class="p-4 display-mobile sticky-top z-3 border-b-grey backdrop-blur bg-white"
    >
      <ul>
        <span @click="toggle">
          <Menu
            class="text-grey-200 cursor-pointer hover:text-primary"
            ref="ignoreButton"
          />
        </span>
        <li class="cursor-pointer">
          <ul
            class="absolute top-3rem left-0 right-0 bg-white border-b-grey"
            v-if="isNavOpened"
          >
            <li
              v-for="link in links"
              :class="
                currentComponent === link.component
                  ? 'bg-red-200'
                  : 'hover:bg-grey-100'
              "
              class="m-2 p-2 border-radius-375 cursor-pointer"
              @click="handleNavMobile(link.component)"
            >
              <span class="flex gap-4 items-center">
                <component
                  :is="link.icon"
                  :size="16"
                  :class="
                    currentComponent === link.component
                      ? 'text-white'
                      : 'text-grey-200'
                  "
                />
                <span
                  :class="
                    currentComponent === link.component ? 'text-white' : ''
                  "
                  >{{ link.label }}</span
                >
              </span>
            </li>
            <hr />
            <!-- user -->
            <li class="m-2">User</li>
            <!-- user settings -->
            <li
              :class="
                currentComponent === 'UserCompo'
                  ? 'bg-red-200'
                  : 'hover:bg-grey-100'
              "
              @click="currentComponent = 'UserCompo'"
              class="m-2 p-2 border-radius-375 cursor-pointer"
            >
              <span class="flex gap-4 items-center">
                <Settings
                  :size="16"
                  :class="
                    currentComponent === 'UserCompo'
                      ? 'text-white'
                      : 'text-grey-200'
                  "
                />
                <span
                  :class="currentComponent === 'UserCompo' ? 'text-white' : ''"
                  >Settings</span
                >
              </span>
            </li>
            <!-- help -->
            <li class="m-2 p-2 hover:bg-grey-100 border-radius-375">
              <RouterLink
                to="/help"
                target="_blank"
                class="text-underline-none"
              >
                <span class="flex gap-4 items-center">
                  <CircleHelp :size="16" class="text-grey-200" />
                  <span>Help</span>
                </span>
              </RouterLink>
            </li>
            <!-- logout -->
            <li class="m-2 p-2 hover:bg-grey-100 border-radius-375">
              <RouterLink to="/" class="text-underline-none">
                <span class="flex gap-4 items-center">
                  <LogOut :size="16" class="text-grey-200" />
                  <span>Logout</span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- nav desktop -->
    <nav class="display-desktop w-16rem">
      <ul
        class="flex flex-col  h-full border-r-grey py-4 gap-2 bg-light"
      >
        <li
          v-for="link in links"
          :class="
            currentComponent === link.component
              ? 'bg-red-200'
              : 'hover:bg-grey-100'
          "
          class="mx-2 p-2 border-radius-375 cursor-pointer "
          @click="currentComponent = link.component"
        >
          <span class="flex gap-4 items-center">
            <component
              :is="link.icon"
              :size="24"
              :class="
                currentComponent === link.component
                  ? 'text-white'
                  : 'text-grey-200'
              "
            />
            <span
              :class="currentComponent === link.component ? 'text-white' : ''"
              >{{ link.label }}</span
            >
          </span>
        </li>
        <!-- user -->
        <div class="mt-auto">
          <hr />
          <ul class="flex flex-col gap-2">
            <!-- user -->
            <li class="mx-2 p-2">User</li>
            <!-- user settings -->
            <li
              :class="
                currentComponent === 'UserCompo'
                  ? 'bg-red-200'
                  : 'hover:bg-grey-100'
              "
              class="mx-2 p-2 border-radius-375 cursor-pointer"
              @click="currentComponent = 'UserCompo'"
            >
              <span class="flex gap-4 items-center">
                <Settings
                  :size="24"
                  :class="
                    currentComponent === 'UserCompo'
                      ? 'text-white'
                      : 'text-grey-200'
                  "
                />
                <span
                  :class="currentComponent === 'UserCompo' ? 'text-white' : ''"
                  >{{ $t("settings") }}</span
                >
              </span>
            </li>
            <!-- help -->
            <li class="mx-2 p-2 hover:bg-grey-100 border-radius-375">
              <RouterLink
                to="/help"
                target="_blank"
                class="text-underline-none"
              >
                <span class="flex gap-4 items-center">
                  <CircleHelp :size="24" class="text-grey-200" />
                  <span>Help</span>
                </span>
              </RouterLink>
            </li>
            <!-- logout -->
            <li
              class="mx-2 p-2 hover:bg-grey-100 border-radius-375 cursor-pointer"
              @click="logout"
            >
              <span class="flex gap-4 items-center">
                <LogOut :size="24" class="text-grey-200" />
                <span>Logout</span>
              </span>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
    <!-- content -->
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import DashboardCompo from "@/components/Dashboard/DashboardCompo.vue";
import MailsCompo from "@/components/Mails/MailsCompo.vue";
import ScheduleCompo from "@/components/Schedule/ScheduleCompo.vue";
import TasksCompo from "@/components/Tasks/TasksCompo.vue";
import ContactsCompo from "@/components/Contacts/ContactsCompo.vue";
import FinancialCompo from "@/components/Financial/FinancialCompo.vue";
import ReportsCompo from "@/components/Reports/ReportsCompo.vue";
import SettingsCompo from "@/components/Settings/SettingsCompo.vue";
import UserCompo from "@/components/User/UserCompo.vue";
import {
  Menu,
  User,
  Search,
  X,
  Trash2,
  LogOut,
  Mails,
  Inbox,
  PencilLine,
  Send,
  ArchiveX,
  LayoutDashboard,
  Contact,
  ChartSpline,
  Folder,
  CalendarCheck,
  ListTodo,
  HandCoins,
  Settings,
  CircleHelp,
  ChevronDown,
  ChevronUp,
} from "lucide-vue-next";

export default {
  name: "HomeView",
  components: {
    Menu,
    User,
    Search,
    X,
    Trash2,
    LogOut,
    Mails,
    Inbox,
    PencilLine,
    Send,
    ArchiveX,
    LayoutDashboard,
    Contact,
    ChartSpline,
    Folder,
    CalendarCheck,
    ListTodo,
    HandCoins,
    Settings,
    CircleHelp,
    ChevronDown,
    ChevronUp,
    Menu,
    DashboardCompo,
    MailsCompo,
    ScheduleCompo,
    TasksCompo,
    ContactsCompo,
    ReportsCompo,
    FinancialCompo,
    SettingsCompo,
    UserCompo,
  },
  data() {
    return {
      authStore: useAuthStore(),
      isNavOpened: false,
      currentComponent: "DashboardCompo",
      links: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          component: "DashboardCompo",
        },
        {
          label: "Mails",
          icon: Mails,
          component: "MailsCompo",
        },
        {
          label: "Tasks",
          icon: ListTodo,
          component: "TasksCompo",
        },
        {
          label: "Schedule",
          icon: CalendarCheck,
          component: "ScheduleCompo",
        },
        {
          label: "Contacts",
          icon: Contact,
          component: "ContactsCompo",
        },
        {
          label: "Financial",
          icon: HandCoins,
          component: "FinancialCompo",
        },
        {
          label: "Reports",
          icon: ChartSpline,
          component: "ReportsCompo",
        },
        {
          label: "Settings",
          icon: Settings,
          component: "SettingsCompo",
        },
      ],
    };
  },
  methods: {
    handleNavMobile(link) {
      this.currentComponent = link;
      this.isNavOpened = false;
    },
    toggle() {
      this.isNavOpened = !this.isNavOpened;
    },
    handleClick(event) {
      if (event.target !== this.$refs.ignoreButton) {
        this.isNavOpened = false;
      }
    },
    logout() {
      this.authStore.logout();
      localStorage.removeItem("jwt");
      delete axios.defaults.headers.common["Authorization"];
      window.location.reload();
    },
  },
  mounted() {
    // Ajouter un écouteur d'événements au document
    document.addEventListener("click", this.handleClick);
  },
  beforeDestroy() {
    // Retirer l'écouteur d'événements lorsque le composant est détruit
    document.removeEventListener("click", this.handleClick);
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100vh;
  }
}
</style>
