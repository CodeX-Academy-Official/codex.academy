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
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <!-- <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/selfpaced" class="nav-link">Self-Paced</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/bootcamps" class="nav-link">Bootcamps</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/community" class="nav-link">Community</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/method" class="nav-link">Method</router-link>
        </li>-->
        <!-- <li class="nav-item">
          <router-link to="/call-back" class="nav-link">Learn More</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/faq" class="nav-link">FAQs</router-link>
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

<style lang="scss" scoped>
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
</style>
