<template>
  <div class="pb-5">
    <Hero unsplashId="y_6rqStQBYQ" height="40vh">
      <h2>Developer Programs</h2>
      <h5>Your New Career Awaits</h5>
    </Hero>
    <div v-if="getApplicant" class="text-center bg-periwinkle pt-4 pb-4">
      <h4>Please select a program</h4>
    </div>
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
      <div class="mt-5 d-lg-none">
        <CertificationCard
          class="mb-5"
          v-for="c in getCertifications"
          :key="c.name"
          :features="getBootcampFeatures"
          :certification="c"
          @certificationSelected="certificationSelected"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CertificationTable from "@/components/CertificationTable";
import CertificationCard from "@/components/CertificationCard";
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";

export default {
  components: {
    CertificationTable,
    Unsplash,
    Hero,
    CertificationCard
  },
  computed: {
    ...mapGetters(["getCertifications", "getBootcampFeatures", "getApplicant"])
  },
  methods: {
    certificationSelected(cert) {
      this.$store.dispatch("setCertification", cert);
      this.$router.push("/enroll");
    }
  }
};
</script>
