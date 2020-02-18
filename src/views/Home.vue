<template>
  <div>
    <HeroCarousel />
    <div class="container">
      <IntroBlock />
      <PlansTable />
      <hr />
      <div class="row">
        <div class="col-2 d-none d-lg-block"></div>
        <div class="col">
          <h1 class="pb-5">CodeX Academy is...</h1>
          <MethodList />
        </div>
        <div class="col-2 d-none d-lg-block"></div>
      </div>
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
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MethodList from "@/components/MethodList";

export default {
  name: "Home",
  components: {
    HelloWorld,
    internshipPartners,
    HeroCarousel,
    PlansTable,
    IntroBlock,
    TestimonialsCarousel,
    MethodList
  }
};
</script>
