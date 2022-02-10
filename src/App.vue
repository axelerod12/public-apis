<template>
  <div id="app">
    <feldm-header />
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import FeldmHeader from "@/components/header/header.vue";

export default {
  components: {
    FeldmHeader,
  },
};
</script>
