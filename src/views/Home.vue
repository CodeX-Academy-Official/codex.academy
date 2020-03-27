<template>
  <div class="home-page">
    <HeroCarousel />
    <div class="container">
      <div class="row text-center">
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col stat">
          <h1>76%</h1>
          <p>
            of people think mentors are important, but only 37% have a mentor.
          </p>
          <p>
            <a
              href="https://www.forbes.com/sites/christinecomaford/2019/07/03/new-study-76-of-people-think-mentors-are-important-but-only-37-have-one/#4faa11cc4329"
              target="_blank"
              >Learn More</a
            >
          </p>
        </div>
        <div class="col stat">
          <h1>9</h1>
          <p>
            out of 10 workers who have a career mentor say they are happy in
            their jobs.
          </p>
          <p>
            <a
              href="https://www.cnbc.com/2019/07/16/nine-in-10-workers-who-have-a-mentor-say-they-are-happy-in-their-jobs.html"
              target="_blank"
              >Learn More</a
            >
          </p>
        </div>
        <div class="col stat">
          <h1>65%</h1>
          <p>of paid interns get a job offer.</p>
          <p>
            <a
              href="https://universe.byu.edu/2017/02/22/interns-more-likely-to-be-hired-as-full-time-employees/"
              target="_blank"
              >Learn More</a
            >
          </p>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
      </div>

      <hr class="mb-5" />

      <div class="row">
        <div class="col-2 d-none d-lg-block"></div>
        <div class="col">
          <h1 class="heading">CodeX Academy Is Different</h1>
          <MethodList />
        </div>
        <div class="col-2 d-none d-lg-block"></div>
      </div>

      <div class="text-center mb-5"></div>
      <h1 class="heading">CodeX Academy Has Flexible Programs</h1>
      <PlanCompareTable />

      <div class="text-center mb-5"></div>
      <h1 class="heading">CodeX Academy Is a Great Experience</h1>
      <TestimonialsCarousel />
      <!-- <hr />
      <internshipPartners />-->
    </div>
  </div>
</template>

<script>
import internshipPartners from "@/components/internship-partners";
import HeroCarousel from "@/components/HeroCarousel";
import IntroBlock from "@/components/IntroBlock";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MethodList from "@/components/MethodList";
import PlanCompareTable from "@/components/PlanCompareTable";

export default {
  name: "Home",
  components: {
    internshipPartners,
    HeroCarousel,
    IntroBlock,
    TestimonialsCarousel,
    MethodList,
    PlanCompareTable
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

  .stat {
    background-color: #eee;
    border: #bbb solid 1px;
    padding: 2rem;
    margin: 2rem;
    color: #333;

    h1 {
      color: #333;
      font-size: 4rem;
      font-weight: bolder;
    }
  }
}
</style>
