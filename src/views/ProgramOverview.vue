<template>
  <div>
    <Hero unsplashId="XJXWbfSo2f0" height="40vh">
      <h2>Program Overview</h2>
      <h5>Many paths, One Goal</h5>
    </Hero>
    <div class="container mt-5">
      <h2>How will you learn to code?</h2>
      <p>At CodeX Academy, we pride ourselves on how incredibly flexible our certifications are. If you have the motivation to learn to code, we can help you do it no matter your circumstances! Full-time, part-time, one or two hours a week... the goal doesn't change, only the pace!</p>
      <div class="mt-5">
        <PlanCompareTable />
      </div>
    </div>
  </div>
</template>

<script>
import PlanCompareTable from "@/components/PlanCompareTable";
import Hero from "@/components/Hero";

export default {
  components: {
    PlanCompareTable,
    Hero
  }
};
</script>

<style scoped>
.bootcamp-description {
  height: 2rem;
}
</style>
