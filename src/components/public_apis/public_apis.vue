<template>
  <div>
    <section v-if="error" class="text-center">
      <!-- The "error" scoped slot will be used if there is an error -->
      <slot name="error">
        <p>{{ error }}</p>
      </slot>
    </section>

    <section v-else>
      <div v-if="loading" class="text-center">
        <!-- Use the "loading" slot to display a loading message -->
        <slot name="loading">
          <p>Loading...</p>
        </slot>
      </div>

      <div v-else>
        <div class="flex flex-wrap justify-between mx-4 my-8">
          <div>
            <!-- Use the "left" slot to display a custom control on the left -->
            <slot name="left">
              <feldm-public-apis-filter v-model="filters.category" />
            </slot>
          </div>
          <div>
            <!-- Use the "right" slot to display a custom control on the right -->
            <slot name="right">
              <feldm-public-apis-search v-model="filters.title" />
            </slot>
          </div>
        </div>
        <div v-if="apis && apis.length">
          <feldm-public-apis-list :apis="apis" />
        </div>
        <div v-else class="text-center">No data available...</div>
      </div>
    </section>
  </div>
</template>

<script>
import getEntries from "@/api/getEntries";
import FeldmPublicApisFilter from "@/components/public_apis/public_apis_filter.vue";
import FeldmPublicApisSearch from "@/components/public_apis/public_apis_search.vue";
import FeldmPublicApisList from "@/components/public_apis/public_apis_list.vue";

export default {
  name: "FeldmPublicApis",

  components: {
    FeldmPublicApisFilter,
    FeldmPublicApisSearch,
    FeldmPublicApisList,
  },

  data() {
    return {
      apis: [],
      loading: true,
      error: null,
      filters: {
        title: null,
        category: null,
      },
    };
  },

  watch: {
    filters: {
      // Callback handler when the filters are updated.
      handler: function () {
        this.fetchData();
      },
      deep: true,
    },
  },

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const response = await getEntries(this.filters);
        this.apis = response.data.entries;
      } catch (err) {
        this.error = err.toString();
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
