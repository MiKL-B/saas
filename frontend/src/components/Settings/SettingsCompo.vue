<template>
  <div class="p-4">
    <ul uk-tab>
      <li v-for="view in views">
        <a href="#" @click="currentView = view.link">{{ view.label }}</a>
      </li>
    </ul>
    <component v-bind:is="currentView" class="pt-4"></component>
  </div>
</template>

<script>
import DashboardSettingsCompo from "../Dashboard/DashboardSettingsCompo.vue";
import MailsSettingsCompo from "../Mails/MailsSettingsCompo.vue";
import ScheduleSettingsCompo from "../Schedule/ScheduleSettingsCompo.vue";
import TasksSettingsCompo from "../Tasks/TasksSettingsCompo.vue";
import ContactsSettingsCompo from "../Contacts/ContactsSettingsCompo.vue";
import FinancialSettingsCompo from "../Financial/FinancialSettingsCompo.vue";
export default {
  name: "SettingsCompo",
  components: {
    DashboardSettingsCompo,
    MailsSettingsCompo,
    ScheduleSettingsCompo,
    TasksSettingsCompo,
    ContactsSettingsCompo,
    FinancialSettingsCompo,
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
      ],
    };
  },
};
</script>
