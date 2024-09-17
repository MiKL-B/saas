<template>
  <div class="content p-4">
    <div class="pb-4">
      <ul uk-tab>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
    </div>
    <!-- content 1 -->
    <div class="flex gap-4 justify-between pb-4">
      <div class="uk-card w-full" v-for="i in 4">
        <div class="uk-card-header">
          <h3 class="uk-card-title">Total revenue</h3>
          <p>$45,231.89</p>
          <p class="uk-margin-xsmall-top uk-text-small text-muted-foreground">
            +20.1% from last month
          </p>
        </div>
      </div>
    </div>
    <!-- content 2 -->
    <div class="grid grid-cols-2 gap-4">
      <div class="uk-card w-full">
        <div class="uk-card-header">
          <h3 class="uk-card-title">Chart</h3>
        </div>
        <div class="uk-card-body flex justify-center"></div>
      </div>
      <!-- dashboard bottom div right -->
      <div class="uk-card w-full">
        <h3 class="uk-card-title pt-4 px-4">Recent Sales</h3>
        <p
          class="uk-margin-xsmall-top uk-text-small text-muted-foreground px-4"
        >
          You made 265 sales this month.
        </p>
        <!-- users -->
        <div class="flex flex-col h-36rem overflow-scroll">
          <div class="flex justify-between pt-2 pb-2 px-4" v-for="i in 10">
            <div class="flex items-center gap-2">
              <AvatarCompo>
                <template v-slot:content>
                  <User />
                </template>
              </AvatarCompo>
              <div class="flex flex-col">
                <span>User</span>
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
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-rows: auto 0.3fr 1fr;
}
</style>
