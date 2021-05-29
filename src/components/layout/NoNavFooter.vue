<template>
  <!-- Footer -->
  <footer class="py-5 bg-dark text-white">
    <div class="text-center mb-5">
      <img src="img/logo/codex_hat_white_small.png" width="70" />
    </div>

    <div class="container">
      <div class="row justify-content-center text-center mt-5 mb-4">
        <div class="col-1">
          <a href="https://facebook.com/codexacademyonline" target="_blank">
            <font-awesome-icon :icon="faFacebookSquare" class="fa-2x" />
          </a>
        </div>
        <div class="col-1">
          <a href="https://twitter.com/Academycodex" target="_blank">
            <font-awesome-icon :icon="faTwitterSquare" class="fa-2x" />
          </a>
        </div>
        <div class="col-1">
          <a
            href="https://www.instagram.com/codexacademyonline/"
            target="_blank"
          >
            <font-awesome-icon :icon="faInstagram" class="fa-2x" />
          </a>
        </div>
        <div class="col-1">
          <a
            href="https://www.youtube.com/channel/UCUKP1GrIaI-dcuV1IlK7x8Q"
            target="_blank"
          >
            <font-awesome-icon :icon="faYoutubeSquare" class="fa-2x" />
          </a>
        </div>
      </div>
      <div class="text-center">
        <p>Copyright &copy; CodeX Academy, LLC 2021</p>
      </div>
    </div>
    <!-- /.container -->
  </footer>
</template>

<script>
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/fontawesome-free-brands";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    faFacebookSquare,
    faInstagram,
    faTwitterSquare,
    faYoutubeSquare,
  }),
  computed: {
    ...mapGetters(["isInternational"]),
  },
  methods: {
    goHome() {
      var home = "/";
      if (this.$router.currentRoute.fullPath === home) return;
      this.$router.push(home);
    },
  },
};
</script>
<style lang="scss" scoped>
footer {
}
.text-white {
  h4 {
    color: white;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: bolder;
  }
  a {
    color: white;
  }
  a:hover {
    text-decoration: none;
    font-weight: bolder;
  }
  hr {
    border: 1px solid white;
  }
}
</style>
