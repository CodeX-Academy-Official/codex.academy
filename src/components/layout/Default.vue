<template>
  <div>
    <navHeader />
    <div class="under-nav">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import navHeader from "./nav";
import Footer from "./footer";

export default {
  components: {
    navHeader,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.under-nav {
  margin-top: 72px;
}
</style>