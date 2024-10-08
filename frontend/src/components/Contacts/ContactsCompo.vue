<template>
  <div class="p-4" v-if="1 != 0">
    <div class="h-full flex flex-col justify-between">
      <div class="flex flex-col gap-2">
        <!-- <SearchCompo /> -->
        <div class="flex justify-between">
          <button class="secondary gap-2">
            <Filter :size="16" class="text-grey" />
            <span>Filter</span>
          </button>
          <div class="flex gap-2">
            <button>Add</button>
            <button class="secondary">Edit</button>
            <button class="secondary">Delete</button>
          </div>
          <!-- <ModalCompo /> -->
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>N°</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 13">
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#">#{{ i }}</a>
            </td>
            <td>John</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <PaginationCompo /> -->
    </div>
  </div>
  <div v-else class="p-4">
    <p>Coming soon...</p>
  </div>
</template>

<script>
import SearchCompo from "../Reusable/SearchCompo.vue";
import ModalCompo from "../Reusable/ModalCompo.vue";
import PaginationCompo from "../Reusable/PaginationCompo.vue";
import { Filter } from "lucide-vue-next";
export default {
  name: "ContactsCompo",
  components: {
    SearchCompo,
    ModalCompo,
    PaginationCompo,
    Filter,
  },
};
</script>
