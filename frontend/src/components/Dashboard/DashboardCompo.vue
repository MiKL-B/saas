<template>
  <div class="p-4" v-if="1==0">
    <!-- Overview -->
    <div
      v-if="currentView === 'overview'"
      class="h-full flex flex-col overview gap-4"
    >
      <!-- sales -->
      <div class="card w-full" :class="'sales' + i" v-for="i in 4">
        <div class="card-header flex-col">
          <h3 class="card-title">Total revenue</h3>
          <p>$45,231.89</p>
          <p class="text-small text-grey">+20.1% from last month</p>
        </div>
      </div>
      <!-- graph -->
      <div class="card w-full h-full graph">
        <div class="card-header">
          <h3 class="card-title">Chart</h3>
        </div>
        <div class="card-body flex justify-center">
          <div class="text-center">put graph here</div>
        </div>
      </div>
      <!-- users -->
      <div class="card w-full users">
        <h3 class="card-title pt-4 px-4">Recent Sales</h3>
        <p class="text-small text-grey px-4">You made 265 sales this month.</p>

        <div class="flex flex-col h-40rem overflow-scroll">
          <div class="flex justify-between pt-2 pb-2 px-4" v-for="i in 20">
            <div class="flex gap-2">
              <User class="text-grey" />

              <div class="flex flex-col">
                <span>User {{ i }}</span>
                <span class="text-small text-grey">user@email.com</span>
              </div>
            </div>
            <span>+$1,999.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="p-4">
    <p>Coming soon...</p>
  </div>
</template>

<script>
import { User } from "lucide-vue-next";
export default {
  name: "DashboardCompo",
  components: {
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
