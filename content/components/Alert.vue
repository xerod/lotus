<template>
  <div :class="baseClasses">
    <heroicon
      :name="iconName"
      width="40"
      class="fill-current"
      :class="iconClasses"
    />
    <div class="flex flex-col" :class="textClasses">
      <span :class="titleClasses">
        {{ title }}
      </span>
      <span :class="bodyClasses">
        {{ body }}
      </span>
    </div>
  </div>
</template>

<script>
import AlertTheme from "../themes/default/PAlert";

const { baseClass, titleClass, bodyClass, iconClass } = AlertTheme;

export default {
  name: "PAlert",
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
    baseClass: {
      type: [String, Object, Array],
      default: baseClass,
    },
    titleClass: {
      type: [String, Object, Array],
      default: titleClass,
    },
    bodyClass: {
      type: [String, Object, Array],
      default: bodyClass,
    },
    iconClass: {
      type: [String, Object, Array],
      default: iconClass,
    },
  },
  computed: {
    textClasses() {
      return " text-" + this.type + "-secondary flex flex-row ";
    },
    baseClasses() {
      let classes = [baseClass];
      let styleClasses = [this.textClasses, "bg-" + this.type + "-pale"];

      return classes.concat(styleClasses);
    },
    titleClasses() {
      return titleClass;
    },
    bodyClasses() {
      if (!!this.body) {
        return bodyClass + " mt-1";
      } else {
        return bodyClass;
      }
    },
    iconName() {
      switch (this.type) {
        case "success":
          return "check-circle";
          break;
        case "warning":
          return "exclamation";
          break;
        case "danger":
          return "x-circle";
          break;
        default:
          return "information";
      }
    },
    iconClasses() {
      if (!!this.body) {
        return iconClass + " mt-1 mr-3";
      } else {
        return iconClass + " mr-1";
      }
    },
  },
};
</script>
