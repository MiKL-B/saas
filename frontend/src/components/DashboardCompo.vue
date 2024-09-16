<template>
  <div class=" p-4">
    <div class="pb-4">
      <ul uk-tab>
        <li><a class="px-4 pb-3 pt-2" href="#">Overview</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Analytics</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Reports</a></li>
      </ul>
    </div>
    <!-- dashboard div top -->
    <div class="flex gap-4 justify-between">
      <div class="uk-card w-full" v-for="i in 4">
        <div class="uk-card-header">
          <h3 class="uk-card-title">Total revenue</h3>
          <p>$45,231.89</p>
          <p class="uk-margin-xsmall-top uk-text-small text-muted-foreground">
            +20.1% from last month
          </p>
        </div>
        <div class="uk-card-body"></div>
        <div class="uk-card-footer"></div>
      </div>
    </div>
    <!-- dashboard div bottom -->
    <div class="flex gap-4 pt-4">
      <div class="uk-card w-full">
        <div class="uk-card-header">
          <h3 class="uk-card-title">Chart</h3>
        </div>
        <div class="uk-card-body flex justify-center"></div>
      </div>
      <!--  -->
      <div class="uk-card w-full">
        <h3 class="uk-card-title pt-4 px-4">Recent Sales</h3>
        <p
          class="uk-margin-xsmall-top uk-text-small text-muted-foreground px-4"
        >
          You made 265 sales this month.
        </p>
        <!-- user -->

        <div class="flex justify-between pt-2 pb-2 px-4" v-for="i in 9">
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
