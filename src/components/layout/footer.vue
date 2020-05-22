<template>
  <!-- Footer -->
  <footer class="py-5 bg-dark text-white">
    <div class="text-center mb-5">
      <img src="img/logo/codex_hat_white_small.png" width="70" />
    </div>
    <div class="container">
      <div class="row justify-content-md-center text-center">
        <div class="col-12 col-md-2 mb-5">
          <h4>CODEX Academy</h4>
          <p>
            <router-link to="/">Home</router-link>
          </p>

          <p>
            <router-link to="/team">Team</router-link>
          </p>
          <p>
            <router-link to="/faqs">FAQs</router-link>
          </p>
          <p>
            <router-link to="/contact">Contact Us</router-link>
          </p>
        </div>

        <div class="col-12 col-md-2 mb-5">
          <h4>Programs</h4>
          <p v-if="!isInternational">
            <router-link to="/programs">Overview</router-link>
          </p>
          <p v-if="!isInternational">
            <router-link to="/programs/front-end-developer" disabled>Front-End Developer</router-link>
          </p>
          <p v-if="!isInternational">
            <router-link to="/programs/full-stack-developer" disabled>Full-Stack Developer</router-link>
          </p>
          <p v-if="!isInternational">
            <router-link to="/programs/full-stack-engineer" disabled>Full-Stack Engineer</router-link>
          </p>
          <p v-if="isInternational">
            <router-link to="/programs/international">Monthly Plans</router-link>
          </p>
          <p v-if="isInternational">
            <router-link to="/programs/international">Light-Support</router-link>
          </p>
          <p v-if="isInternational">
            <router-link to="/programs/international">Medium-Support</router-link>
          </p>
          <p v-if="isInternational">
            <router-link to="/programs/international">High-Support</router-link>
          </p>
        </div>

        <div class="col-12 col-md-2 mb-5" v-if="isInternational">
          <h4>Financial Aid</h4>
          <p>
            <router-link to="/financing/codex" class="nav-link">Student Loans</router-link>
          </p>
        </div>

        <div class="col-12 col-md-2 mb-5" v-if="!isInternational">
          <h4>Financial Aid</h4>
          <p>
            <router-link to="/financial-aid">Financing</router-link>
          </p>
          <p>
            <router-link to="/isa">ISAs</router-link>
          </p>
        </div>
        <div class="col-12 col-md-2 mb-5">
          <h4>About Us</h4>
          <p>
            <router-link to="/howitworks">How It Works</router-link>
          </p>
          <p>
            <router-link to="/howitworks#curriculum">Curriculum</router-link>
          </p>
          <p>
            <router-link to="/howitworks#timeline">Timeline</router-link>
          </p>
          <p>
            <router-link to="/howitworks#tech">Our Technologies</router-link>
          </p>
          <p>
            <router-link :to="{ path: '/howitworks', hash: '#internships' }">Internships</router-link>
          </p>
        </div>

        <div class="col col-md-2 mb-5">
          <h4>Legal</h4>
          <p>
            <router-link to="/policy/privacy">Privacy</router-link>
          </p>
          <!-- <p>
            <router-link to="/terms-of-use">Terms of Use</router-link>
          </p>-->
        </div>
      </div>
    </div>
    <hr />

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
          <a href="https://www.instagram.com/codexacademyonline/" target="_blank">
            <font-awesome-icon :icon="faInstagram" class="fa-2x" />
          </a>
        </div>
        <div class="col-1">
          <a href="https://www.youtube.com/channel/UCUKP1GrIaI-dcuV1IlK7x8Q" target="_blank">
            <font-awesome-icon :icon="faYoutubeSquare" class="fa-2x" />
          </a>
        </div>
      </div>
      <div class="text-center">
        <p>Copyright &copy; CodeX Academy, LLC 2020</p>
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
  faYoutubeSquare
} from "@fortawesome/fontawesome-free-brands";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    faFacebookSquare,
    faInstagram,
    faTwitterSquare,
    faYoutubeSquare
  }),
  computed: {
    ...mapGetters(["isInternational"])
  }
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
