<template>
  <div id="app">
    <navHeader />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import navHeader from "./components/layout/nav";
import Footer from "./components/layout/footer";

export default {
  beforeCreate() {
    if (this.$route.query.p) {
      this.$router.push(this.$route.query.p);
    }
  },
  components: {
    navHeader,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import "@/variables";
@import "bootstrap";
</style>
