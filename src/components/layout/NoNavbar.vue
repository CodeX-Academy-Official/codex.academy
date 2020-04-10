<template>
  <div class="no-nav-layout">
    <div class="sticky-top">
      <DeadlineAlert />
    </div>
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from "./footer";
import DeadlineAlert from "./DeadlineAlert";

export default {
  components: {
    DeadlineAlert,
    Footer
  }
};
</script>

<style lang="scss">
</style>

