<template>
  <div class="content p-4">
    <div class="pb-4">
      <ul uk-tab>
        <li><a class="px-4 pb-3 pt-2" href="#">Tasks</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Kanban</a></li>
        <li><a class="px-4 pb-3 pt-2" href="#">Notes</a></li>
      </ul>
    </div>
    <div class="flex gap-2">
      <input type="text" class="uk-input w-96" placeholder="Search..." />
      <button class="uk-button uk-button-default">Status</button>
      <button class="uk-button uk-button-default">Priority</button>
    </div>
    <div class="uk-overflow-auto">
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
            <th class="uk-table-expand">Title</th>
            <th class="uk-table-expand">Status</th>
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
            <td class="uk-text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </td>
            <td class="uk-text-nowrap">Done</td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Pagination">
        <ul class="uk-flex-right uk-pagination" uk-margin>
          <li>
            <a href="#"><span uk-pagination-previous></span></a>
          </li>
          <li><a href="#">1</a></li>
          <li class="uk-disabled"><span>…</span></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
          <li class="uk-active"><span aria-current="page">7</span></li>
          <li><a href="#">8</a></li>
          <li>
            <a href="#"><span uk-pagination-next></span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "TasksCompo",
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-rows: 0.3fr 1fr;
}
</style>
