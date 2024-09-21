<template>
  <div class="p-4">
    <!-- <ul uk-tab>
      <li><a href="#" @click="currentView = 'overview'">Overview</a></li>
      <li><a href="#" @click="currentView = 'analytics'">Analytics</a></li>
      <li><a href="#" @click="currentView = 'statistics'">Statistics</a></li>
    </ul> -->

    <!-- Overview -->
    <div v-if="currentView === 'overview'" class="h-full flex flex-col overview gap-4">
      <!-- sales -->
      <div class="uk-card w-full" :class="'sales' + i" v-for="i in 4">
        <div class="uk-card-header">
          <h3 class="uk-card-title">Total revenue</h3>
          <p>$45,231.89</p>
          <p class="uk-margin-xsmall-top uk-text-small text-muted-foreground">
            +20.1% from last month
          </p>
        </div>
      </div>
      <!-- graph -->
      <div class="uk-card w-full h-full graph">
        <div class="uk-card-header">
          <h3 class="uk-card-title">Chart</h3>
        </div>
        <div class="uk-card-body flex justify-center">
          <p>put graph here</p>
        </div>
      </div>
      <!-- users -->
      <div class="uk-card w-full users">
        <h3 class="uk-card-title pt-4 px-4">Recent Sales</h3>
        <p
          class="uk-margin-xsmall-top uk-text-small text-muted-foreground px-4"
        >
          You made 265 sales this month.
        </p>

        <div class="flex flex-col h-40rem overflow-scroll">
          <div class="flex justify-between pt-2 pb-2 px-4" v-for="i in 20">
            <div class="flex items-center gap-2">
              <AvatarCompo>
                <template v-slot:content>
                  <User />
                </template>
              </AvatarCompo>
              <div class="flex flex-col">
                <span>User {{ i }}</span>
                <span
                  class="uk-margin-xsmall-top uk-text-small text-muted-foreground"
                  >user@email.com</span
                >
              </div>
            </div>
            <span>+$1,999.00</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Analytics -->
    <!-- <div v-if="currentView === 'analytics'">
        <p>Analytics</p>
      </div> -->
    <!-- Reports -->
    <!-- <div v-if="currentView === 'statistics'">
        <p>Reports</p>
      </div> -->
  </div>
</template>

<script>
import AvatarCompo from "./reusable/AvatarCompo.vue";
import { User } from "lucide-vue-next";
export default {
  name: "DashboardCompo",
  components: {
    AvatarCompo,
    User,
  },
  data() {
    return {
      currentView: "overview",
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .overview {
    display: grid;
    grid-template-areas:
      "sales1 sales2 sales3 sales4"
      "graph graph users users"
      "graph graph users users";
  }
  .sales1 {
    grid-area: sales1;
  }
  .sales2 {
    grid-area: sales2;
  }
  .sales3 {
    grid-area: sales3;
  }
  .sales4 {
    grid-area: sales4;
  }
  .graph {
    grid-area: graph;
  }
  .users {
    grid-area: users;
  }
}
</style>
