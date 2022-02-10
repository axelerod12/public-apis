<template>
  <div class="flex items-center">
    <label
      for="filter"
      class="text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {{ label }}:
    </label>
    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mx-4 my-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      id="filter"
      v-bind="$attrs"
      v-bind:value="value"
      @change="changeHandler"
    >
      <option :value="null">All</option>
      <option
        v-for="category in categories"
        v-bind:value="category"
        :key="category"
      >
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
import getCategories from "@/api/getCategories";

export default {
  name: 'FeldmPublicApisFilter',

  inheritAttrs: false,

  props: {
    // This prop is needed to map the v-model correctly.
    value: {
      type: String,
      required: false,
      default: null,
    },
    /**
     * The label associated with the select element.
     */
    label: {
      type: String,
      required: false,
      default: "Category",
    },
  },

  data() {
    return {
      categories: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      const response = await getCategories();
      this.categories = response.data.categories;
    },

    changeHandler(event) {
      /**
       * Triggered by user interaction.
       *
       * @event input
       * @type {String}
       */
      this.$emit("input", event.target.value);
    },
  },
};
</script>
