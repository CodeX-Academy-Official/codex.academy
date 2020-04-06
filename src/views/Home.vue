<template>
  <div class="home-page">
    <HeroCarousel />
    <div class="container">
      <Stats />
    </div>
    <div class="bg-lilac pb-5 pt-5">
      <div class="container">
        <h1 class="section-title">Success is the ONLY option</h1>
        <h4 class="section-subtitle text-muted mb-5">CodeX Academy's Six Pillars of Learning</h4>
        <Pillars :pillars="getMethods" />
      </div>
    </div>
    <!-- <div class="container">
      <div class="text-center mb-5">
        <h1 class="heading">CodeX Academy Has Flexible Programs</h1>
        <PlanCompareTable />
      </div>
    </div>-->
    <div class>
      <CommercialSection :maxWidth="600">
        <h1>Check this out</h1>
        <h4>Welcome to our full-service software development school!</h4>
      </CommercialSection>
    </div>
    <div class="container">
      <div class="text-center pt-5 pb-5">
        <h1 class="heading">CodeX Academy Is a Great Experience</h1>
        <TestimonialsCarousel />
      </div>
    </div>
  </div>
</template>

<script>
import internshipPartners from "@/components/internship-partners";
import HeroCarousel from "@/components/HeroCarousel";
import IntroBlock from "@/components/IntroBlock";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PlanCompareTable from "@/components/PlanCompareTable";
import Pillars from "@/components/Pillars";
import { mapGetters } from "vuex";
import Stats from "@/components/Stats";
import CommercialSection from "@/components/CommercialSection";

export default {
  name: "Home",
  components: {
    internshipPartners,
    HeroCarousel,
    IntroBlock,
    TestimonialsCarousel,
    PlanCompareTable,
    Pillars,
    Stats,
    CommercialSection
  },
  mounted() {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT);
    }
  },
  computed: { ...mapGetters(["getMethods"]) },
  methods: {
    scrollTo: function(hashtag) {
      setTimeout(() => {
        location.href = hashtag;
      }, TIMEOUT);
    }
  }
};
</script>

<style lang="scss">
@import "@/variables";

.home-page {
  .heading {
    text-transform: uppercase;
    margin-bottom: 4rem;
    text-align: center;
    color: #555;
  }

  ul.list-group {
    li.price {
      color: black;
      font-weight: bolder;
      font-size: 1.3rem;
    }
  }
  .card-title {
    font-size: 1.5rem;
  }
  hr {
    margin: 2rem 0;
  }
}
</style>
