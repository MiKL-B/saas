<template>
  <div v-if="1==0" class="p-4">
    <ul>
      <li v-for="view in views">
        <a href="#" @click="currentView = view.link">{{ view.label }}</a>
      </li>
    </ul>
    <component v-bind:is="currentView" class="pt-4"></component>
  </div>
  <div v-else class="p-4">
    <p>Coming soon...</p>
  </div>
</template>

<script>
import DashboardSettingsCompo from "../Dashboard/DashboardSettingsCompo.vue";
import MailsSettingsCompo from "../Mails/MailsSettingsCompo.vue";
import ScheduleSettingsCompo from "../Schedule/ScheduleSettingsCompo.vue";
import TasksSettingsCompo from "../Tasks/TasksSettingsCompo.vue";
import ContactsSettingsCompo from "../Contacts/ContactsSettingsCompo.vue";
import FinancialSettingsCompo from "../Financial/FinancialSettingsCompo.vue";
import ReportsSettingsCompo from "../Reports/ReportsSettingsCompo.vue";
export default {
  name: "SettingsCompo",
  components: {
    DashboardSettingsCompo,
    MailsSettingsCompo,
    ScheduleSettingsCompo,
    TasksSettingsCompo,
    ContactsSettingsCompo,
    FinancialSettingsCompo,
    ReportsSettingsCompo,
  },
  data() {
    return {
      currentView: "DashboardSettingsCompo",
      views: [
        {
          label: "Dashboard",
          link: "DashboardSettingsCompo",
        },
        {
          label: "Mails",
          link: "MailsSettingsCompo",
        },
        {
          label: "Schedule",
          link: "ScheduleSettingsCompo",
        },
        {
          label: "Tasks",
          link: "TasksSettingsCompo",
        },
        {
          label: "Contacts",
          link: "ContactsSettingsCompo",
        },
        {
          label: "Financial",
          link: "FinancialSettingsCompo",
        },
        {
          label: "Reports",
          link: "ReportsSettingsCompo",
        },
      ],
    };
  },
};
</script>
