<template>
  <Playground>
    <p-input
      :label="inputLabel"
      :placeholder="inputPlaceholder"
      :help="inputHelp"
      type="danger"
      v-model="inputText"
    />
    <template slot="props">
      <p-input label="Input Value" v-model="inputText" />
      <p-input
        class="mt-2"
        label="Input Placeholder"
        v-model="inputPlaceholder"
      />
      <p-input class="mt-2" label="Input Help" v-model="inputHelp" />
    </template>
  </Playground>
</template>

<script>
import pInput from "../components/Input.vue";
import Playground from "~/components/Playground.vue";

export default {
  components: {
    pInput,
    Playground,
  },
  data() {
    return {
      inputLabel: "Username",
      inputText: "",
      inputPlaceholder: "Your username",
      inputHelp: "Make sure your username is unique",
    };
  },
};
</script>
