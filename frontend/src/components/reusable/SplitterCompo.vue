<template>
  <div class="container">
    <div class="pane left-pane" :style="{ flexBasis: leftPaneWidth + 'px' }" >
      <slot name="left"></slot>
    </div>
    <div class="splitter display-desktop" @mousedown="startDrag">
      <span class="splitter-btn"></span>
    </div>
    <div class="pane right-pane display-desktop" style="min-width: 600px;">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitterCompo",
  data() {
    return {
      isDragging: false,
      leftPaneWidth: 500, // Largeur initiale en pixels
    };
  },
  methods: {
    startDrag() {
      this.isDragging = true;
      document.body.style.userSelect = "none";

      document.addEventListener("mousemove", this.drag);
      document.addEventListener("mouseup", this.stopDrag);
    },
    drag(event) {
      if (!this.isDragging) return;

      const containerRect = this.$el.getBoundingClientRect();
      const newWidth = event.clientX - containerRect.left;

      // Limites pour la largeur du panneau gauche
      if (newWidth > 100 && newWidth < containerRect.width - 100) {
        this.leftPaneWidth = newWidth;
      }
    },
    stopDrag() {
      this.isDragging = false;
      document.body.style.userSelect = "auto";
      document.removeEventListener("mousemove", this.drag);
      document.removeEventListener("mouseup", this.stopDrag);
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .container {
    display: flex;
    overflow: hidden;
    width:100%;
    box-sizing: border-box;
    height:100vh;
  }
  .left-pane{
    min-width: 350px;
  }
  .right-pane {
    flex: 1;
  }

  .splitter {
    cursor: ew-resize;
    width: 1px;
    border: var(--border-grey-100);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .splitter-btn {
    width: 8px;
    height: 50px;
    background: var(--grey-100);
    border-radius: var(--radius);
  }
}
</style>
