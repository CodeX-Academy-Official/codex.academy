<template>
  <div>
    <HeroCarousel />
    <PlansTable />
    <internshipPartners />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import internshipPartners from "@/components/internship-partners";
import HeroCarousel from "@/components/HeroCarousel";
import PlansTable from "@/components/PlanTable";

export default {
  name: "Home",
  components: {
    HelloWorld,
    internshipPartners,
    HeroCarousel,
    PlansTable
  }
};
</script>
