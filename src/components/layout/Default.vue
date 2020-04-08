<template>
  <div class="default-layout">
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

<style lang="scss" >
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