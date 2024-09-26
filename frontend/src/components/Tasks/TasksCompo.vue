<template>
  <div class="p-4">
    <div class="h-full flex flex-col justify-between">
      <div class="flex flex-col md:flex-row justify-between flew-wrap gap-2">
        <div class="flex gap-2">
          <SearchCompo />
          <button class="uk-button uk-button-default">Status</button>
          <button class="uk-button uk-button-default">Priority</button>
        </div>
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
export default {
  name: "TasksCompo",
  components: {
    SearchCompo,
    ModalCompo,
    PaginationCompo,
  },
};
</script>
