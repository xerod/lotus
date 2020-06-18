<template>
  <div class="card flex flex-row p-5 rounded-lg" :class="bgColor">
    <heroicon
      :name="iconName"
      width="40"
      class="fill-current"
      :class="iconClass"
    />
    <div>
      <p class="font-medium leading-6" :class="titleColor">
        {{ title }}
      </p>
      <p class="m-0 leading-5 text-sm" :class="bodyColor">
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
      return "bg-" + this.type + "-50 ";
    },
    titleColor() {
      if (!!this.body) {
        return "text-" + this.type + "-700 mb-1";
      } else {
        return "text-" + this.type + "-700 m-0";
      }
    },
    bodyColor() {
      return "text-" + this.type + "-700";
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
    iconClass() {
      if (!!this.body) {
        return "flex-shrink-0 text-" + this.type + "-500 mr-3 mt-1";
      } else {
        return "flex-shrink-0 text-" + this.type + "-500 mr-2";
      }
    },
  },
};
</script>

<style></style>
