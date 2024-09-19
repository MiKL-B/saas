<template>
  <div class="container">
    <nav uk-dropnav="mode: click" class="p-4 mobile">
      <ul class="uk-subnav">
        <li>
          <a href="#">Menu <span uk-drop-parent-icon></span></a>
          <div class="uk-drop uk-dropdown w-full">
            <ul class="uk-dropdown-nav uk-nav">
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
              <li class="uk-nav-divider"></li>
              <div class="flex justify-between p-2 pr-2 items-center">
                <li class="flex items-center gap-2">
                  <AvatarCompo>
                    <template v-slot:content>
                      <User />
                    </template>
                  </AvatarCompo>
                  <span>User</span>
                </li>
                <RouterLink
                  to="/"
                  class="uk-button uk-button-default"
                  uk-tooltip="Log out"
                >
                  <button>
                    <LogOut />
                  </button>
                </RouterLink>
              </div>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <div class="nav-desktop border-r-grey desktop">
      <ul
        class="flex flex-col justify-between h-full uk-nav uk-nav-primary py-4"
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
        <li>
          <a href="/">
            <span class="flex gap-4">
              <CircleHelp :size="20" class="text-muted-foreground" />
              <span>Help</span>
            </span>
          </a>
        </li>
        <div class="mt-auto pl-2">
          <li class="uk-nav-divider"></li>
          <div class="flex justify-between pt-2 pr-2 items-center">
            <li class="flex items-center gap-2">
              <AvatarCompo>
                <template v-slot:content>
                  <User />
                </template>
              </AvatarCompo>
              <span>User</span>
            </li>
            <RouterLink
              to="/"
              class="uk-button uk-button-default"
              uk-tooltip="Log out"
            >
              <button>
                <LogOut />
              </button>
            </RouterLink>
          </div>
        </div>
      </ul>
    </div>
    <!-- content -->
    <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import DashboardCompo from "@/components/DashboardCompo.vue";
import MailsCompo from "@/components/MailsCompo.vue";
import FinancialCompo from "@/components/FinancialCompo.vue";
import ScheduleCompo from "@/components/ScheduleCompo.vue";
import SettingsCompo from "@/components/SettingsCompo.vue";
import TasksCompo from "@/components/TasksCompo.vue";
import ContactsCompo from "@/components/ContactsCompo.vue";
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
  FileText,
  Settings,
  CircleHelp,
} from "lucide-vue-next";
import AvatarCompo from "@/components/reusable/AvatarCompo.vue";
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
    FileText,
    Settings,
    CircleHelp,
    AvatarCompo,
    DashboardCompo,
    MailsCompo,
    FinancialCompo,
    ScheduleCompo,
    SettingsCompo,
    TasksCompo,
    ContactsCompo,
  },
  data() {
    return {
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
          icon: FileText,
          component: "FinancialCompo",
        },
        {
          label: "Settings",
          icon: Settings,
          component: "SettingsCompo",
        },
      ],
    };
  },
};
</script>
<style scoped>
.nav-desktop {
  background: #f9fbfd;
}
.container {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    height: 100vh;
  }
}

</style>
