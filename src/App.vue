<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
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
  },
  mounted() {
    if (this.$route.query.coupon) {
      this.$store.dispatch("applyCoupon", this.$route.query.coupon);
    }
  }
};
</script>

<style lang="scss">
@import "app";
</style>
