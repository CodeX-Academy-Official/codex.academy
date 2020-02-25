<template>
  <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light fixed-top">
    <!-- <div class="container"> -->
    <router-link class="navbar-brand" to="/">
      <img class="logo" src="img/logo/horizontal_logo.png" alt="CodeX Academy Logo" />
    </router-link>
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      @click="toggleMenu"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div v-if="isOpen" class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <separator />
        <li class="nav-item">
          <router-link to="/plans" class="nav-link">Self-Paced</router-link>
        </li>
        <separator />
        <li class="nav-item">
          <router-link to="/bootcamps" class="nav-link">Bootcamps</router-link>
        </li>
        <separator />
        <!-- <li class="nav-item">
          <router-link to="/community" class="nav-link">Community</router-link>
        </li>-->
        <!-- <li class="nav-item">
          <router-link to="/method" class="nav-link">Method</router-link>
        </li>-->
        <li class="nav-item">
          <router-link to="/call-back" class="nav-link">Learn More</router-link>
        </li>
        <separator />
        <li class="nav-item">
          <router-link to="/faq" class="nav-link">FAQ</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/testimonials" class="nav-link"
            >Testimonials</router-link
          >
        </li>-->
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>-->
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>-->
        <!-- <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>-->
      </ul>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
import separator from '@/components/layout/separator';
export default {
  name: 'NavBar',
  data() {
    return {
      isOpen: false
    }
  },
  components: {
    separator
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    '$route' () {
      this.isOpen = false;
    }
  }
}
</script>>

<style lang="scss" scoped>
@import "@/variables";

#nav {
  z-index: 200000;
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.navbar {
  height: 4.5rem;
}
.navbar img.logo {
  height: 3.1rem;
}

.navbar-nav {
  background-color: $lightGray;
}

.nav-link {
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}
</style>
