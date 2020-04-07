<template>
  <div>
    <Hero :unsplashIds="['-fGqsewtsJY','u_RiRTA_TtY','xRDuEeG1TVI']" height="40vh">
      <h2>How it Works</h2>
      <h5>What makes CodeX Academy Tick?</h5>
    </Hero>
    <div class="container mt-5 pt-5">
      <!-- Page Heading/Breadcrumbs -->

      <Pillars id="pillars" :pillars="getMethods" />
      <!-- <h2 id="formula" class="section-title mt-5 mb-5">The CodeX Academy Formula</h2>
      <Formula />-->

      <h2 id="curriculum" class="section-title mt-5 mb-5">The CodeX Academy Curriculum</h2>
      <CurriculumTable />

      <h2 id="timeline" class="section-title mt-5 mb-5">Start Strong, Finish Stronger</h2>
      <Timeline />

      <h2 id="tech" class="section-title mt-5 mb-5">Our Technologies and Tools</h2>
      <Technologies />
    </div>
  </div>
</template>

<script>
import Technologies from "@/components/Technologies";
import Unsplash from "@/components/Unsplash";
import MethodCardList from "@/components/MethodCardList";
import Timeline from "@/components/Timeline";
import Formula from "@/components/Formula";
import CurriculumTable from "@/components/CurriculumTable";
import Pillars from "@/components/Pillars";
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";

export default {
  computed: { ...mapGetters(["getMethods"]) },
  components: {
    Technologies,
    Unsplash,
    MethodCardList,
    Timeline,
    Formula,
    CurriculumTable,
    Pillars,
    Hero
  }
};
</script>

<style lang="scss">
.badge-primary {
  color: white;
}
</style>
