<template>
  <div class="container">
    <!-- nav mobile -->
    <nav class="p-4 display-mobile sticky-top z-3 border-b-grey backdrop-blur">
      <ul>
        <li
          class="cursor-pointer flex justify-between items-center"
          ref="ignoreButton"
          @click="toggle"
        >
          Menu
          <span class="text-grey">
            <ChevronDown v-if="!isNavOpened" />
            <ChevronUp v-else />
          </span>
          <ul
            class="absolute top-3rem left-0 right-0 bg-white border-b-grey"
            v-if="isNavOpened"
          >
            <li
              v-for="link in links"
              :class="
                currentComponent === link.component
                  ? 'bg-primary'
                  : 'hover:bg-light'
              "
              class="m-2 border-radius-375 cursor-pointer"
              @click="handleNavMobile(link.component)"
            >
              <span class="flex gap-4 p-2">
                <component
                  :is="link.icon"
                  :size="16"
                  :class="
                    currentComponent === link.component
                      ? 'text-white'
                      : 'text-grey'
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
                  ? 'bg-primary'
                  : 'hover:bg-light'
              "
              @click="currentComponent = 'UserCompo'"
              class="m-2 border-radius-375 cursor-pointer"
            >
              <span class="flex gap-4 p-2">
                <Settings
                  :size="16"
                  :class="
                    currentComponent === 'UserCompo'
                      ? 'text-white'
                      : 'text-grey'
                  "
                />
                <span
                  :class="currentComponent === 'UserCompo' ? 'text-white' : ''"
                  >Settings</span
                >
              </span>
            </li>
            <!-- help -->
            <li class="m-2 p-2 hover:bg-light border-radius-375">
              <RouterLink
                to="/help"
                target="_blank"
                class="text-decoration-none"
              >
                <span class="flex gap-4">
                  <CircleHelp :size="16" class="text-grey" />
                  <span>Help</span>
                </span>
              </RouterLink>
            </li>
            <!-- logout -->
            <li class="m-2 p-2 hover:bg-light border-radius-375">
              <RouterLink to="/" class="text-decoration-none">
                <span class="flex gap-4">
                  <LogOut :size="16" class="text-grey" />
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
      <ul class="flex flex-col justify-between h-full border-r-grey py-4 gap-2">
        <li
          v-for="link in links"
          :class="
            currentComponent === link.component
              ? 'bg-primary'
              : 'hover:bg-light'
          "
          class="mx-2 p-2 border-radius-375 cursor-pointer"
          @click="currentComponent = link.component"
        >
          <span class="flex gap-4">
            <component
              :is="link.icon"
              :size="16"
              :class="
                currentComponent === link.component ? 'text-white' : 'text-grey'
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
                  ? 'bg-primary'
                  : 'hover:bg-light'
              "
              class="mx-2 p-2 border-radius-375 cursor-pointer"
              @click="currentComponent = 'UserCompo'"
            >
              <span class="flex gap-4">
                <Settings
                  :size="16"
                  :class="
                    currentComponent === 'UserCompo'
                      ? 'text-white'
                      : 'text-grey'
                  "
                />
                <span
                  :class="currentComponent === 'UserCompo' ? 'text-white' : ''"
                  >Settings</span
                >
              </span>
            </li>
            <!-- help -->
            <li class="mx-2 p-2 hover:bg-light border-radius-375">
              <RouterLink
                to="/help"
                target="_blank"
                class="text-decoration-none"
              >
                <span class="flex gap-4">
                  <CircleHelp :size="16" class="text-grey" />
                  <span>Help</span>
                </span>
              </RouterLink>
            </li>
            <!-- logout -->
            <li class="mx-2 p-2 hover:bg-light border-radius-375">
              <RouterLink to="/" class="text-decoration-none">
                <span class="flex gap-4">
                  <LogOut :size="16" class="text-grey" />
                  <span>Logout</span>
                </span>
              </RouterLink>
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
          label: "Schedule",
          icon: CalendarCheck,
          component: "ScheduleCompo",
        },
        {
          label: "Tasks",
          icon: ListTodo,
          component: "TasksCompo",
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
      console.log("test");
    },
    handleClick(event) {
      if (event.target !== this.$refs.ignoreButton) {
        this.isNavOpened = false;
      }
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
