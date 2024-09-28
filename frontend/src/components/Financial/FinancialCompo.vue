<template>
  <div class="p-4">
    <div class="h-full flex flex-col justify-between">
      <div class="flex flex-col gap-2">
        <SearchCompo />
        <div class="flex justify-between">
          <button class="secondary gap-2">
            <Filter :size="16" class="text-grey" />
            <span>Filter</span>
          </button>
          <div class="flex gap-2">
            <a href="#modal-sections" uk-toggle>
              <button>Add</button>
            </a>
            <a href="#modal-sections" uk-toggle>
              <button class="secondary">Edit</button>
            </a>
            <a href="#modal-sections" uk-toggle>
              <button class="secondary">Delete</button>
            </a>
          </div>
          <ModalCompo />
        </div>
      </div>
      <table class="uk-table uk-table-middle uk-table-divider uk-table-hover">
        <thead>
          <tr>
            <th class="uk-table-shrink">
              <input
                class="uk-checkbox"
                type="checkbox"
                aria-label="Checkbox"
              />
            </th>
            <th class="uk-table-shrink">Task</th>
            <th class="uk-table-shrink">Title</th>
            <th class="uk-table-shrink">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 13">
            <td>
              <input
                class="uk-checkbox"
                type="checkbox"
                aria-label="Checkbox"
              />
            </td>
            <td>
              <a class="uk-link-reset" href="#">#{{ i }}</a>
            </td>
            <td class="uk-text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </td>
            <td class="uk-text-nowrap">Done</td>
          </tr>
        </tbody>
      </table>
      <PaginationCompo />
    </div>
  </div>
</template>

<script>
import SearchCompo from "../Reusable/SearchCompo.vue";
import ModalCompo from "../Reusable/ModalCompo.vue";
import PaginationCompo from "../Reusable/PaginationCompo.vue";
import { Filter } from "lucide-vue-next";
export default {
  name: "FinancialCompo",
  components: {
    SearchCompo,
    ModalCompo,
    PaginationCompo,
    Filter,
  },
};
</script>
