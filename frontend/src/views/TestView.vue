<template>
  <div class="viewport-test flex flex-col gap-4 p-4">
    <button
      v-for="button in buttons"
      class="uk-button uk-button-default"
      :class="
        currentViewportSize === button.viewport ? 'uk-button-secondary' : ''
      "
      @click="currentViewportSize = button.viewport"
    >
      {{ button.viewport }}
    </button>
  </div>
  <div style="height: 100vh">
    <iframe
      title="test"
      src="http://localhost:5173/"
      :style="{ width: currentViewportSize }"
      style="margin: auto; border: 2px dashed red; height: 100vh"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: "TestView",
  data() {
    return {
      currentViewportSize: 340, // Valeur par défaut

      buttons: [
        { viewport: 340 + "px" },
        { viewport: 640 + "px" },
        { viewport: 768 + "px" },
        { viewport: 1024 + "px" },
        { viewport: 1248 + "px" },
      ],
    };
  },
};
</script>

<style>
.viewport-test {
  position: fixed;
  top: 0;
}
</style>
