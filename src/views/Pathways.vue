<template>
  <div>
    <Hero
      :unsplashIds="['-fGqsewtsJY', 'u_RiRTA_TtY', 'xRDuEeG1TVI']"
      height="40vh"
    >
      <h2>How it Works</h2>
      <h5>What makes CodeX Academy Tick?</h5>
    </Hero>
    <div class="container mt-5 pt-5">
      <h1 class="text-center">Certification Pathways</h1>
      <p class="text-center">
        CodeX Academy learners pass from level to level, accumulating knowledge,
        skills and certifications. Each level builds on the previous and leads
        to the next.
      </p>
      <CurriculumCerts />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import CurriculumCerts from "@/components/CurriculumCerts";

export default {
  components: {
    Hero,
    CurriculumCerts
  },
};
</script>

<style lang="scss" scoped>
.card-text {
  min-height: 7rem;
}
</style>
