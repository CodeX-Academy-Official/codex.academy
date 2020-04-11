<template>
  <div>
    <Hero unsplashId="IgUR1iX0mqM" height="40vh">
      <h2>Self-Paced Programs</h2>
      <h5>Learn at your own pace</h5>
    </Hero>
    <div class="container">
      <div class="mt-5">
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
      </div>

      <div class="d-block d-md-none mt-5">
        <SelfPacedTable />
      </div>

      <div class="d-none d-md-block mt-3">
        <ProgramTable :programs="getSelfPaced" title="Self-Paced" />
      </div>
    </div>
  </div>
</template>

<script>
import SelfPacedTable from "@/components/SelfPacedTable";
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import ProgramTable from "@/components/ProgramTable";

import { mapGetters } from "vuex";

export default {
  components: {
    SelfPacedTable,
    Unsplash,
    Hero,
    ProgramTable
  },
  computed: {
    ...mapGetters(["getSelfPaced"])
  }
};
</script>

<style lang="scss" scoped></style>
