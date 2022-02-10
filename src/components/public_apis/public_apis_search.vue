<template>
  <div class="flex items-center">
    <label
      for="search"
      class="text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {{ label }}:
    </label>
    <input
      type="text"
      class="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full mx-4 my-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      id="search"
      v-bind="$attrs"
      v-bind:value="value"
      :placeholder="placeholder"
      @input="changeHandler"
    />
  </div>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  name: 'FeldmPublicApisSearch',

  inheritAttrs: false,

  props: {
    // This prop is needed to map the v-model correctly.
    value: {
      type: String,
      required: false,
      default: null,
    },
    /**
     * The label associated with the input element.
     */
    label: {
      type: String,
      required: false,
      default: "Search",
    },
    /**
     * The placeholder attribute for the input element.
     */
    placeholder: {
      type: String,
      required: false,
      default: "Search by name...",
    },
  },

  methods: {
    // Debouncing with Lodash.
    changeHandler: debounce(function (event) {
      /**
       * Triggered by user interaction.
       *
       * @event input
       * @type {String}
       */
      this.$emit("input", event.target.value);
    }, 500),
  },
};
</script>
