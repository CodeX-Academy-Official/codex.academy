<template>
  <div class="home-page">
    <HeroCarousel />
    <div class="container">
      <div class="row">
        <div class="col-2 d-none d-lg-block"></div>
        <div class="col">
          <MethodList />
        </div>
        <div class="col-2 d-none d-lg-block"></div>
      </div>
    <hr />
    <div class="text-center mb-5">
      </div>

      <h3 class="mb-5">What do CodeX Academy Learners say?</h3>
      <TestimonialsCarousel />
      <!-- <hr />
      <internshipPartners />-->
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
  },
  mounted() {
    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT);
    }
  },
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
.home-page {
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
