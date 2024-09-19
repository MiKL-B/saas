<template>
  <div class="content p-4">
    <ul uk-tab>
      <li><a href="#">Tasks</a></li>
      <li><a href="#">Kanban</a></li>
      <li><a href="#">Notes</a></li>
    </ul>
    <div class="uk-switcher">
      <!-- Tasks -->
      <div class="h-full">
        <div class="flex flex-col lg:flex-row gap-2 pt-4">
          <input type="text" class="uk-input lg:w-96" placeholder="Search..." />
          <button class="uk-button uk-button-default">Status</button>
          <button class="uk-button uk-button-default">Priority</button>
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
      <!-- Kanban -->
      <div>
        <p>Kanban</p>
      </div>
      <!-- Notes -->
      <div>
        <div class="notes">
          <!-- content 1 -->
          <div class="flex flex-col gap-4 p-4 border-r-grey h-full">
            <input type="text" class="uk-input" placeholder="Search..." />
            <div class="flex flex-col gap-2 h-48rem overflow-scroll">
              <div class="uk-card uk-card-body uk-card-default" v-for="i in 20">
                <h3 class="uk-card-title">Default {{ i }}</h3>
                <p class="uk-margin">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <!-- content 2 -->
          <div class="p-4 flex flex-col">
            <!--  -->
            <div
              class="flex justify-between items-center gap-4 border-b-grey py-2"
            >
              <div>
                <p class="flex items-center gap-2">
                  <span>Note #1</span>
                </p>
              </div>
              <span class="text-muted-foreground">
                Oct 22, 2023, 9:00:00 AM
              </span>
            </div>
            <!--  -->
            <div class="pt-4 flex flex-col h-full">
              <p class="py-2 h-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur vel excepturi veniam, molestiae aliquam, doloremque
                iste suscipit est culpa molestias quis modi voluptatum inventore
                fugiat! Mollitia perspiciatis impedit explicabo dignissimos
                dolores non, nihil iste reprehenderit placeat ex, sequi suscipit
                deleniti? Iusto odio officia quam quo ipsa aliquam. Repellendus,
                eos tempore!
              </p>
            </div>
          </div>
        </div>
      </div>
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
  display: flex;
  flex-direction: column;
}
.notes{
  display: flex;
  flex-direction: column;
}
/* nav {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
} */
@media screen and (min-width: 1024px) {
  .content {
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .notes {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
  }
}
</style>
