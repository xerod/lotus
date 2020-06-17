<template>
  <div class="card flex flex-row p-5 rounded-lg" :class="bgColor">
    <heroicon
      :name="iconName"
      width="30"
      class="mr-3 mt-1 fill-current"
      :class="textColor"
    />
    <div>
      <p class="font-bold mb-1" :class="textColor">
        {{ title }}
      </p>
      <p class="m-0" :class="textColor">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "pAlert",
  props: {
    type: {
      required: true,
      type: String,
      default: "info",
    },
    title: {
      required: true,
      type: String,
    },
    body: {
      required: true,
      type: String,
    },
  },
  computed: {
    bgColor() {
      return "bg-" + this.type + "-100";
    },
    textColor() {
      return "text-" + this.type + "-800";
    },
    iconName() {
      if (this.type == "warning") {
        return "exclamation";
      }
      if (this.type == "success") {
        return "check-circle";
      }
      if (this.type == "danger") {
        return "x-circle";
      }
      if (this.type == "info") {
        return "information";
      }
    },
  },
};
</script>

<style></style>
