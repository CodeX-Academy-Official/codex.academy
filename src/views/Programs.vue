<template>
  <div class="pb-5">
    <Hero unsplashId="y_6rqStQBYQ" height="40vh">
      <h2>Developer Programs</h2>
      <h5>Your New Career Awaits</h5>
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

      <div class="d-none d-lg-block mt-3">
        <CertificationTable
          :certifications="getCertifications"
          :features="getBootcampFeatures"
          @certificationSelected="certificationSelected"
          title="Programs"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CertificationTable from "@/components/CertificationTable";
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";

export default {
  components: {
    CertificationTable,
    Unsplash,
    Hero
  },
  computed: {
    ...mapGetters(["getCertifications", "getBootcampFeatures"])
  },
  methods: {
    certificationSelected(cert) {
      this.$store.dispatch("setCertification", cert);
      this.$router.push("/enroll");
    }
  }
};
</script>
