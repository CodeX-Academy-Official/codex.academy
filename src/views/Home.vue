<template>
  <div>
    <HeroCarousel />
    <div class="container">
      <IntroBlock />
      <PlansTable />
      <hr />
      <expectations />
      <hr />
      <technologies />
      <hr />
      <TestimonialsCarousel />
      <hr />
      <internshipPartners />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import internshipPartners from "@/components/internship-partners";
import HeroCarousel from "@/components/HeroCarousel";
import PlansTable from "@/components/PlanTable";
import IntroBlock from "@/components/IntroBlock";
import expectations from "@/components/FAQ/expectations";
import technologies from "@/components/FAQ/technologies";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default {
  name: "Home",
  components: {
    HelloWorld,
    internshipPartners,
    HeroCarousel,
    PlansTable,
    IntroBlock,
    technologies,
    expectations,
    TestimonialsCarousel
  }
};
</script>
