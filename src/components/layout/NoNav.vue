<template>
  <div class="no-nav-layout">
    <!-- <div class="sticky-top">
      <DeadlineAlert />
    </div> -->
    <slot />
    <NoNavFooter />
  </div>
</template>

<script>
import NoNavFooter from "./NoNavFooter";
import DeadlineAlert from "./DeadlineAlert";

export default {
  components: {
    DeadlineAlert,
    NoNavFooter,
  },
};
</script>

<style lang="scss"></style>
