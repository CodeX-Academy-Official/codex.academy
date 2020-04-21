<template>
  <div>
    <Hero :unsplashIds="['-fGqsewtsJY', 'u_RiRTA_TtY', 'xRDuEeG1TVI']" height="40vh">
      <h2>How it Works</h2>
      <h5>What makes CodeX Academy Tick?</h5>
    </Hero>
    <div class="container mt-5 pt-5">
      <!-- Page Heading/Breadcrumbs -->

      <h1 class="text-center">Our 6 Pillars of Success</h1>
      <h5 id="curriculum" class="section-title mb-5">A direct path for learning to code</h5>
      <Pillars id="pillars" :pillars="getMethods" />
      <!-- <h2 id="formula" class="section-title mt-5 mb-5">The CodeX Academy Formula</h2>
      <Formula />-->

      <h1 id="curriculum" class="text-center mt-5">The CodeX Academy Curriculum</h1>
      <h5 id="curriculum" class="section-title mb-5">What you can expect, Month to Month</h5>
      <CurriculumTable />

      <h1 id="timeline" class="text-center mt-5">Start Strong, Finish Stronger</h1>
      <h5 id="curriculum" class="section-title mb-5">A Typical Learner Timeline</h5>
      <Timeline />

      <h1 id="tech" class="text-center mt-5">Our Technologies and Tools</h1>
      <h5 id="curriculum" class="section-title mb-5">Only the most popular</h5>
      <Technologies />

      <h1 id="internships" class="text-center mt-5">Meet Our Internship Partners</h1>
      <h5 id="curriculum" class="section-title mb-5">Start your career strong</h5>
      <InternshipPartners />
      <!-- <p class="pl-4 pr-4 text-center">
        Our Biz Dev team works daily to find more and more internship partners.
      </p>-->
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
import InternshipPartners from "@/components/InternshipPartners";
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
    Hero,
    InternshipPartners
  }
};
</script>

<style lang="scss">
.badge-primary {
  color: white;
}
</style>
