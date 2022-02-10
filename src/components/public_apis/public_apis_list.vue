<template>
  <div class="mx-2 overflow-x-auto">
    <table class="shadow-lg bg-white w-full">
      <thead>
        <tr>
          <th class="bg-blue-100 border text-left p-2">API</th>
          <th class="bg-blue-100 border text-left p-2">Auth</th>
          <th class="bg-blue-100 border text-left p-2">Category</th>
          <th class="bg-blue-100 border text-left p-2">Cors</th>
          <th class="bg-blue-100 border text-left p-2">Description</th>
          <th class="bg-blue-100 border text-left p-2">HTTPS</th>
          <th class="bg-blue-100 border text-left p-2">Link</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in apis">
          <feldm-public-apis-item :item="item" :key="item.Link" />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import FeldmPublicApisItem from "@/components/public_apis/public_apis_item.vue";

export default {
  name: 'FeldmPublicApisList',

  components: {
    FeldmPublicApisItem,
  },

  props: {
    /**
     * The collective list of free API's.
     */
    apis: {
      type: Array,
      required: true,
    },
  },
};
</script>
