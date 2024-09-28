<template>
  <div id="modal-sections" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close-default secondary" uk-close></button>
      <div class="uk-modal-header">
        <h2 class="uk-modal-title">Modal Title</h2>
      </div>
      <div class="uk-modal-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button class="secondary">Print</button>
      </div>
      <div class="uk-modal-footer flex justify-end gap-2">
        <button class="uk-modal-close secondarys">Cancel</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCompo",
};
</script>
