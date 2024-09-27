<template>
  <div class="p-4">
    <div class="h-full flex flex-col justify-between">
      <div class="flex flex-col gap-2">
        <SearchCompo />
        <div class="flex justify-between">
          <button class="uk-button uk-button-default gap-2">
            <Filter :size="16" class="text-muted-foreground"/>
            <span>Filter</span>
          </button>
          <div class="flex gap-2">
            <a
              class="uk-button uk-button-primary"
              href="#modal-sections"
              uk-toggle
              >Add</a
            >
            <a
              class="uk-button uk-button-default"
              href="#modal-sections"
              uk-toggle
              >Edit</a
            >
            <a
              class="uk-button uk-button-default"
              href="#modal-sections"
              uk-toggle
              >Delete</a
            >
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
            <th class="uk-table-shrink">N°</th>
            <th class="uk-table-shrink">Name</th>
            <th class="uk-table-shrink">Address</th>
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

            <td class="">
              <a class="uk-link-reset" href="#">#{{ i }}</a>
            </td>
            <td class="uk-text-nowrap">John</td>
            <td class="uk-text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </td>
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
  name: "ContactsCompo",
  components: {
    SearchCompo,
    ModalCompo,
    PaginationCompo,
    Filter
  },
};
</script>
