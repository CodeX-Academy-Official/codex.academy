<template>
  <div>
    <Hero
      class="pathrise-landing-hero"
      unsplashId="f5pTwLHCsAg"
      height="100vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <Logo color="white" :width="150" class="landing-logo mb-3" />
            <div class>
              <h3 class="text-left action">Turn-key, Co-Branded</h3>
              <h1 class="text-left action">Coding Bootcamps</h1>
              <h3 class="text-left action">as a Service</h3>
            </div>
            <div class="checklist">
              <div class="title">We've got you covered!</div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Flexible Curriculum (Yours/Ours)</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Revenue Sharing</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Financial Aid for Students</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Personal Account Manager</span>
              </div>
            </div>
          </div>

          <div class="col-5 d-none d-lg-block my-auto">
            <div class="start-application-form">
              <h5 class="card-title text-center">Start the Conversation</h5>
              <BaaSInterestForm />
            </div>
          </div>
        </div>
      </div>
    </Hero>
    <div class="container">
      <!-- <div class="mt-5">
        <h2>Intense Intent and Direction</h2>
        <p class>
          Looking for an intense, immersive learning experience? CodeX Academy
          has a few bootcamp options to choose from, depending on how far you
          want to go.
        </p>
        <p>
          Like our
          <router-link to="/selfpaced">self-paced programs</router-link>, our
          bootcamps give you the opportunity to slow down and speed up as
          necessary. But, in a bootcamp, we have a specific goal in mind and we
          will push you to reach it!
        </p>
      </div>-->
    </div>
  </div>
</template>

<script>
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import BaaSInterestForm from "@/components/BaaSInterestForm";

export default {
  components: {
    Unsplash,
    Hero,
    Logo,
    Icon,
    BaaSInterestForm,
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    // certificationSelected(cert) {
    //   this.$store.dispatch(
    //     "setActivePlan",
    //     mapCertificationToPlan(cert, this.getStartDate)
    //   );
    //   this.$router.push("/enroll");
    // }
  },
  mounted() {
    // if (this.isInternational) {
    //   this.$router.push("/programs/international");
    // }
  },
};
</script>
