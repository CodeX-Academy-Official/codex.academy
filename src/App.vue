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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
