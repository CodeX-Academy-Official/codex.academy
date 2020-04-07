<template>
  <div>
    <Hero unsplashId="4hbJ-eymZ1o" height="20vh">
      <h2 v-if="!getApplicant">Help Me Decide</h2>
      <h2 v-if="getApplicant">Select a Program</h2>

      <!-- <h5>Just a few questions away</h5> -->
    </Hero>
    <div class="container mt-5">
      <PlanFinder />
    </div>
  </div>
</template>

<script>
import PlanFinder from "@/components/PlanFinder";
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";

export default {
  components: { PlanFinder, Hero },
  computed: {
    ...mapGetters(["getApplicant"])
  }
};
</script>

<style lang="scss" scoped></style>
