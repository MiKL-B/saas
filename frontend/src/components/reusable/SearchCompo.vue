<template>
  <a
    href="#search"
    uk-toggle
    class="uk-button uk-button-default flex justify-start gap-2 text-muted-foreground w-full"
  >
    <Search :size="16" />
    <span>Search</span>
  </a>
  <div id="search" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical pb-4">
      <div class="uk-inline w-full">
        <span class="uk-form-icon uk-form-icon-flip">
          <Search :size="16" />
        </span>
        <input
          class="w-full outline-none px-4 py-2 border-b-grey"
          type="text"
          aria-label="Not clickable icon"
          placeholder="Search"
        />
      </div>
      <!-- content -->
      <div class="h-20rem overflow-scroll">
        <ul class="uk-nav-primary" uk-nav>
          <li>
            <a href="#">
              <slot name="content">Results here...</slot>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Search } from "lucide-vue-next";
export default {
  name: "SearchCompo",
  components: {
    Search,
  },
};
</script>
