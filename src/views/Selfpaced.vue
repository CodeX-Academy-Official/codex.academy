<template>
  <div class="pb-5">
    <Hero unsplashId="IgUR1iX0mqM" height="40vh">
      <h2>{{ this.getProgramTitle ? this.getProgramTitle : "CodeX Academy International" }}</h2>
      <h5>Level up at your own pace</h5>
    </Hero>
    <div v-if="getApplicant" class="text-center bg-periwinkle pt-4 pb-4">
      <h4>Please select a plan</h4>
    </div>

    <div class="container">
      <!-- <div class="mt-5">
        <h2>Learning That Fits Your Needs</h2>

        <p class>
          At CodeX Academy, we believe the WORLD will be a better place if YOU
          are coding! Because of that, we strive to provide the most flexible
          options possible so that you have the best chance to learn.
        </p>
        <p>
          Our Self-Paced Programs provide you the chance to learn coding and
          make it stick ON YOUR TERMS. When you can go faster, you have the
          option to go faster. When you need to take more time, you have the
          freedom to stay with a concept longer. Your mentor will be with you at
          each step!
        </p>
      </div>-->
      <div class="d-block d-md-none mt-5">
        <SelfPacedCards :plans="getInternational" @selected="selected" />
      </div>

      <div class="d-none d-md-block mt-3">
        <MonthlyPlanTable :plans="getInternational" title="Monthly" @selected="selected" />
      </div>
    </div>
  </div>
</template>

<script>
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import SelfPacedCards from "@/components/SelfPacedCards";
import MonthlyPlanTable from "@/components/MonthlyPlanTable";
import { mapToActivePlan } from "@/store/plans";

import { mapGetters } from "vuex";

export default {
  components: {
    SelfPacedCards,
    Unsplash,
    Hero,
    MonthlyPlanTable
  },
  computed: {
    ...mapGetters([
      "getInternational",
      "getStartDate",
      "getApplicant",
      "getProgramTitle"
    ])
  },
  methods: {
    selected(plan) {
      const mappedPlan = mapToActivePlan(plan, this.getStartDate);
      this.$store.dispatch("setActivePlan", mappedPlan);
      this.$router.push("/enroll");
    }
  }
};
</script>

<style lang="scss" scoped></style>
