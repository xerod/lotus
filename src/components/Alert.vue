<template>
  <div class="flex flex-row p-5 rounded" :class="bgColor">
    <heroicon
      :name="iconName"
      width="50"
      class="mr-3 fill-current"
      :class="textColor"
    />
    <div>
      <p class="font-bold mb-2" :class="textColor">
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
      return {
        " bg-yellow-200 ": this.type == "warning",
        " bg-green-200 ": this.type == "success",
        " bg-red-200 ": this.type == "danger",
        " bg-blue-200 ": this.type == "info",
      };
    },
    textColor() {
      return {
        " text-yellow-900 ": this.type == "warning",
        " text-green-900 ": this.type == "success",
        " text-red-900 ": this.type == "danger",
        " text-blue-900 ": this.type == "info",
      };
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
