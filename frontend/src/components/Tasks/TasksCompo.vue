<template>
  <div v-if="1!=0" class="p-4">
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
              <input id="check1" type="checkbox" />
              <label for="check1"></label>
            </th>
            <th>Task</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 13">
            <td>
              <input id="check2" type="checkbox" />
              <label for="check2"></label>
            </td>
            <td>{{ i }}</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </td>
            <td>Done</td>
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
// import SearchCompo from "../Reusable/SearchCompo.vue";
// import ModalCompo from "../Reusable/ModalCompo.vue";
// import PaginationCompo from "../Reusable/PaginationCompo.vue";
import { Filter } from "lucide-vue-next";

export default {
  name: "TasksCompo",
  components: {
    // SearchCompo,
    // ModalCompo,
    // PaginationCompo,

    Filter,
  },
};
</script>
