<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import navHeader from "./components/layout/nav";
import Footer from "./components/layout/footer";

const default_layout = "default";

export default {
  beforeCreate() {
    if (this.$route.query.p) {
      this.$router.push(this.$route.query.p);
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style lang="scss">
@import "app";
</style>
