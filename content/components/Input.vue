<template>
  <label class="block outline-none">
    <div class="relative">
      <span :class="labelClasses">{{ this.label }}</span>
      <input
        :class="inputClasses + typeClasses"
        :placeholder="this.placeholder"
        :value="this.value"
        @input="$emit('input', $event.target.value)"
        style="padding: .4rem .75rem"
        :size="this.size"
      />
      <span :class="helpClasses">{{ this.help }}</span>
    </div>
  </label>
</template>

<script>
export const SHADOW_TYPE = {
  danger: "danger",
  default: "info",
};

export default {
  name: "pInput",
  props: {
    type: {
      required: false,
      type: String,
      default: "default",
    },
    label: {
      required: true,
      type: String,
    },
    help: {
      required: false,
      type: String,
    },
    size: {
      required: false,
      type: String,
      default: "default",
    },
    placeholder: {
      required: false,
      type: String,
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false,
    },
    value: {
      required: false,
    },
  },
  data() {
    return {
      roundedSize: "",
    };
  },
  computed: {
    computeRounded() {
      if (this.size !== "default") {
        return "rounded-" + this.size;
      } else {
        return "rounded";
      }
    },
    computeRounded() {
      if (this.size !== "default") {
        return "rounded-" + this.size;
      } else {
        return "rounded";
      }
    },
    labelClasses() {
      return "text-sm text-default-secondary";
      // return "bg-" + this.type + "-100";
    },
    inputClasses() {
      return (
        "block fluid my-1 sm:text-sm sm:leading-5 shadow-sm outline-none w-full bg-" +
        this.type +
        "-pale border border-" +
        this.type +
        "-tertiary focus:border-" +
        SHADOW_TYPE[this.type] +
        "-tertiary text-" +
        this.type +
        "-primary " +
        this.computeRounded +
        " "
      );
      // return "text-" + this.type + "-800";
    },
    typeClasses() {
      return (
        "text-" +
        this.type +
        "-primary placeholder-" +
        this.type +
        "-tertiary focus:shadow-outline-" +
        SHADOW_TYPE[this.type]
      );
    },
    helpClasses() {
      if (this.type === "default") {
        return "text-sm text-default-tertiary";
      } else {
        return "text-sm text-" + this.type + "-secondary";
      }
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

<style>
.fluid {
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}
.fluid::placeholder {
  text-indent: 0px;
  transition: text-indent 0.27s ease;
}
.fluid:focus::placeholder {
  text-indent: 6px;
  transition: text-indent 0.27s ease;
}
</style>
