<template>
  <div class="container">
    <!-- nav mobile -->
    <nav
      uk-dropnav="mode: click"
      class="p-4 display-mobile sticky-top z-3 border-b-grey backdrop-blur"
    >
      <ul>
        <li class="flex">
          <a href="#" class="flex" @click="toggle" ref="ignoreButton"
            >Menu
            <span v-if="isNavOpened"><ChevronUp /></span>
            <span v-else><ChevronDown /></span>
          </a>
          <ul
            class="uk-dropdown-nav uk-nav uk-nav-primary absolute top-3rem left-0 right-0 bg-primary-foreground border-b-grey"
            v-if="isNavOpened"
          >
            <li
              v-for="link in links"
              :class="currentComponent === link.component ? 'uk-active' : ''"
            >
              <a href="#" @click="handleNavMobile(link.component)">
                <span class="flex gap-4">
                  <component
                    :is="link.icon"
                    :size="20"
                    :class="
                      currentComponent === link.component
                        ? ''
                        : 'text-muted-foreground'
                    "
                  />
                  <span>{{ link.label }}</span>
                </span>
              </a>
            </li>
            <hr>
            <!-- user -->
            <li class="uk-nav-header">User</li>
            <!-- user settings -->
            <li :class="currentComponent === 'UserCompo' ? 'uk-active' : ''">
              <a href="#" @click="currentComponent = 'UserCompo'" class="gap-4">
                <span>
                  <Settings :size="20" :class="currentComponent === 'UserCompo' ? '': 'text-muted-foreground'" />
                </span>
                <span>Settings</span>
              </a>
            </li>
            <!-- help -->
            <li>
              <RouterLink to="/help" target="_blank" class="gap-4">
                <span>
                  <CircleHelp :size="20" class="text-muted-foreground" />
                </span>
                <span>Help</span>
              </RouterLink>
            </li>
            <!-- logout -->
            <li>
              <RouterLink to="/" class="gap-4">
                <span>
                  <LogOut :size="20" class="text-muted-foreground" />
                </span>
                <span>Logout</span>
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- nav desktop -->
    <nav class="display-desktop w-16rem">
      <ul
      class="flex flex-col justify-between h-full border-r-grey uk-nav uk-nav-primary py-4 bg-primary-foreground"
      uk-nav
      >
        <li
          v-for="link in links"
          :class="currentComponent === link.component ? 'uk-active' : ''"
        >
          <a href="#" @click="currentComponent = link.component">
            <span class="flex gap-4">
              <component
                :is="link.icon"
                :size="20"
                :class="
                  currentComponent === link.component
                    ? ''
                    : 'text-muted-foreground'
                "
              />
              <span>{{ link.label }}</span>
            </span>
          </a>
        </li>
        <!-- user -->
        <div class="mt-auto">
          <hr>
          <ul class="uk-dropdown-nav uk-nav uk-nav-primary">
            <!-- user -->
            <li class="uk-nav-header">User</li>
            <!-- user settings -->
            <li :class="currentComponent === 'UserCompo' ? 'uk-active' : ''">
              <a href="#" @click="currentComponent = 'UserCompo'" class="gap-4">
                <span>
                  <Settings :size="20" :class="currentComponent === 'UserCompo' ? '': 'text-muted-foreground'" />
                </span>
                <span>Settings</span>
              </a>
            </li>
            <!-- help -->
            <li>
              <RouterLink to="/help" target="_blank" class="gap-4">
                <span>
                  <CircleHelp :size="20" class="text-muted-foreground" />
                </span>
                <span>Help</span>
              </RouterLink>
            </li>
            <!-- logout -->
            <li>
              <RouterLink to="/" class="gap-4">
                <span>
                  <LogOut :size="20" class="text-muted-foreground" />
                </span>
                <span>Logout</span>
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
