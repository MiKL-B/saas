<template>
  <div class="p-4">
    <div class="h-full flex flex-col justify-between">
      <div class="flex justify-between">
        <button class="uk-button uk-button-default">Filter</button>
        <div class="flex gap-2">
          <button class="uk-button uk-button-primary">Add</button>
          <button class="uk-button uk-button-default">Edit</button>
          <button class="uk-button uk-button-default">Delete</button>
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
  name: "ContactsCompo",
};
</script>

