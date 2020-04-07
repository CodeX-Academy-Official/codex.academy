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
    <div
      :class="!isOpen ? 'navbar-closed' : ''"
      class="collapse navbar-collapse"
      id="navbarResponsive"
    >
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>

        <!-- <li class="nav-item">
          <router-link to="/plans" class="nav-link">Plans</router-link>
        </li>-->

        <li class="nav-item dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Programs</a>
          <div class="dropdown-menu">
            <!-- <div class="nav-item">
              <router-link to="/plans" class="nav-link">Compare</router-link>
            </div>
            <div class="dropdown-divider"></div>-->
            <div class="nav-item">
              <router-link to="/selfpaced" class="nav-link">Self-Paced</router-link>
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link to="/bootcamps" class="nav-link">Bootcamps</router-link>
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link to="/community" class="nav-link">Community</router-link>
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link to="/findplan" class="nav-link">Help Me Decide</router-link>
            </div>
          </div>
        </li>

        <!-- <li class="nav-item">
        <separator />
        <li class="nav-item">

          <router-link to="/selfpaced" class="nav-link">Self-Paced</router-link>
        </li>
        <separator />
        <li class="nav-item">
          <router-link to="/bootcamps" class="nav-link">Bootcamps</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/community" class="nav-link">Community</router-link>
        </li>-->
        <!-- <li class="nav-item">
          <router-link to="/method" class="nav-link">Method</router-link>
        </li>-->
        <!-- <li class="nav-item">
          <router-link to="/call-back" class="nav-link">Learn More</router-link>
        </li>-->

        <li class="nav-item dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >How It Works</a>
          <div class="dropdown-menu">
            <div class="nav-item">
              <router-link :to="{path:'/howitworks', hash:'#formula'}" class="nav-link">Six Pillars</router-link>
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link
                :to="{path:'/howitworks', hash:'#curriculum'}"
                class="nav-link"
              >Curriculum</router-link>
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link
                :to="{path:'/howitworks', hash:'#timeline'}"
                class="nav-link"
              >Sample Timeline</router-link>
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link :to="{path:'/howitworks', hash:'#tech'}" class="nav-link">Technologies</router-link>
            </div>
          </div>
        </li>

        <!-- <li class="nav-item">
          <router-link to="/howitworks" class="nav-link"
            >How It Works</router-link
          >
        </li>-->
        <li class="nav-item">
          <router-link to="/financial-aid" class="nav-link">Financial Aid</router-link>
        </li>

        <li class="nav-item dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >About</a>
          <div class="dropdown-menu">
            <div class="nav-item">
              <router-link to="/faqs" class="nav-link">FAQs</router-link>
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link to="/team" class="nav-link">Our Team</router-link>
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link to="/contact" class="nav-link">Contact Us</router-link>
            </div>
          </div>
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

        <li class="nav-item">
          <SelectPlanButton text="Apply" buttonClass="btn btn-primary btn-block nav-link" />
        </li>
      </ul>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
import separator from "@/components/layout/separator";
import SelectPlanButton from "@/components/SelectPlanButton";
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  data: () => ({
    isOpen: false
  }),
  computed: { ...mapGetters(["getBootcamp6"]) },
  components: { SelectPlanButton, separator },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    $route() {
      this.isOpen = false;
    }
  }
};
</script>

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

@media (max-width: 991.98px) {
  .nav-link,
  .dropdown-toggle {
    font-weight: bold !important;
    margin-bottom: 5px !important;
    text-align: center !important;
  }

  .navbar-closed {
    display: none;
  }
}
</style>
