<template>
  <div
    class="flex rounded border border-ui-border bg-ui-background"
    style="min-height: 200px"
  >
    <div
      class="flex flex-wrap w-4/6 px-4 overflow-scroll overflow-hidden justify-center items-center"
    >
      <slot></slot>
    </div>
    <div class="flex flex-col border-l px-4 py-6 border-ui-border">
      <span class="text-2xl font-bold mb-2">Props</span>
      <slot name="props"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "playground",
};
</script>

<style>
.scene {
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 5;
  display: flex;
  overflow: scroll;
  overflow: hidden;
}
.props {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  flex: 2;
  border-left: 1px solid #d3dae6;
}
.it-demobox-props > *:not(.it-divider) {
  margin-bottom: 12px;
}
.it-demobox + .table-box {
  margin-top: 30px;
}
@media only screen and (max-width: 600px) {
  .it-demobox {
    flex-direction: column;
  }
  .it-demobox-scene {
    padding: 20px 0px;
  }
  .it-demobox-props {
    border-top: 1px solid #d3dae6;
    border-left: none;
  }
}
</style>
