<template>
  <tr>
    <td class="border p-2">
      {{ item.API }}
    </td>
    <td class="border p-2">
      {{ item.Auth }}
    </td>
    <td class="border p-2">
      {{ item.Category }}
    </td>
    <td class="border p-2">
      {{ item.Cors }}
    </td>
    <td class="border p-2">
      {{ item.Description }}
    </td>
    <td class="border p-2">
      {{ item.HTTPS }}
    </td>
    <td class="border p-2 underline">
      <a :href="item.Link" target="_blank">
        {{ item.Link }}
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'FeldmPublicApisItem',

  props: {
    /**
     * A single entry from the collection.
     */
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
