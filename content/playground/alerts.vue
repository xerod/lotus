<template>
  <Playground>
    <p-alert :title="alertTitle" :body="alertBody" :type="alertType" />
    <template slot="props">
      <label class="block mt-2">
        <span class="text-xs text-gray-500 font-medium">Alert Type</span>
        <select
          placeholder="Select type"
          labelTop="Alert type"
          v-model="alertType"
          class="text-sm mt-1 px-2 py-1 block w-full"
        >
          <option :key="type" v-for="type in types" :value="type"
            >{{ type }}
          </option>
        </select>
      </label>
      <label class="block mt-2">
        <span class="text-xs text-gray-500 font-medium">Title</span>
        <input
          class="text-sm mt-1 px-2 py-1 block w-full"
          v-model="alertTitle"
        />
      </label>
      <label class="block mt-2">
        <span class="text-xs text-gray-500 font-medium">Description</span>
        <input
          class="text-sm mt-1 px-2 py-1 block w-full"
          v-model="alertBody"
        />
      </label>
    </template>
  </Playground>
</template>

<script>
import pAlert from "../components/Alert.vue";
import Playground from "~/components/Playground.vue";

export default {
  components: {
    pAlert,
    Playground,
  },
  data() {
    return {
      alertTitle: "Alert title",
      alertBody: "Alert Description ",
      alertType: "info",
      types: ["success", "warning", "danger", "info"],
    };
  },
};
</script>
