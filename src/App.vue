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

.btn-primary {
  strong {
    color: White;
  }
}

.section-title {
  text-transform: uppercase;
  text-align: center;
}
.section-subtitle {
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 0rem;
}

@import "@/variables";
@import "~bootstrap";
@import "~bootstrap-vue";
</style>
