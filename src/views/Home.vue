<template>
  <div class="home-page">
    <HeroCarousel />
    <div class="container">
      <div class="row">
        <div class="col-2 d-none d-lg-block"></div>
        <div class="col">
          <!-- <h1 class="pb-5">CodeX Academy is...</h1> -->
          <MethodList />
        </div>
        <div class="col-2 d-none d-lg-block"></div>
      </div>
      <a id="plans"></a>
      <hr />

      <!-- <IntroBlock /> -->
      <div class="text-center mb-5">
        <div class="row">
          <div class="col">
            <div class="card">
              <img
                src="https://source.unsplash.com/YK0HPwWDJ1I/348x232"
                class="card-img-top"
                alt="Self-Paced Plans"
              />
              <div class="card-body">
                <h5 class="card-title">Community Plan</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">Only $50/month</li>
                <li class="list-group-item">Self-paced</li>

                <li class="list-group-item">Independent Study</li>
                <li class="list-group-item">No Weekly Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/community" class="card-link btn btn-primary">
                  <strong>See Community Plan</strong>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://source.unsplash.com/kwzWjTnDPLk/348x232"
                class="card-img-top"
                alt="Self-Paced Plans"
              />
              <div class="card-body">
                <h5 class="card-title">Self-Paced Plans</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">$400/mo and up</li>
                <li class="list-group-item">Self-paced</li>

                <li class="list-group-item">Mentor-Driven</li>
                <li class="list-group-item">5 to 40 Hours/Week Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/plans" class="card-link btn btn-primary">
                  <strong>See Self-Paced Plans</strong>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://source.unsplash.com/ABVE1cyT7hk/348x232"
                class="card-img-top"
                alt="Self-Paced Plans"
              />
              <div class="card-body">
                <h5 class="card-title">Immersive Bootcamps</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">$4500 and up</li>
                <li class="list-group-item">Self-Paced with Schedule</li>
                <li class="list-group-item">Mentor-Driven</li>
                <li class="list-group-item">40 to 50 Hours/Week Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/bootcamps" class="card-link btn btn-primary">
                  <strong>See Bootcamps</strong>
                </router-link>
              </div>
            </div>
          </div>
        </div>
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
