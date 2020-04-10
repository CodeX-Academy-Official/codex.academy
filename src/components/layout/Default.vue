<template>
  <div class="default-layout">
    <div class="sticky-top">
      <DeadlineAlert />
      <navHeader />
    </div>
    <slot />
    <Footer />
  </div>
</template>

<script>
import navHeader from "./nav";
import Footer from "./footer";
import DeadlineAlert from "./DeadlineAlert";

export default {
  components: {
    DeadlineAlert,
    navHeader,
    Footer,
  },
};
</script>

<style lang="scss">
.default-layout {
  .under-nav {
    margin-top: 72px;
  }
  .landing-logo {
    display: none;
    background-color: red;
  }
}
</style>
