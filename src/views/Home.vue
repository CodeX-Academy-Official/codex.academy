<template>
  <div>
    <HeroCarousel />
    <div class="container">
      <IntroBlock />

      <div class="text-center mb-5">
        <div class="row">
          <div class="col">
            <div class="card">
              <img
                src="img/photos/kelly-sikkema-YK0HPwWDJ1I-unsplash.jpg"
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
                <li class="list-group-item">Start Anytime</li>
                <li class="list-group-item">Independent Study</li>
                <li class="list-group-item">No Weekly Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/community" class="card-link">See Community Plan</router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="img/photos/nesa-by-makers-kwzWjTnDPLk-unsplash.jpg"
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
                <li class="list-group-item">Start Anytime</li>
                <li class="list-group-item">Mentor-Driven</li>
                <li class="list-group-item">5-40 hours/week Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/plans" class="card-link">See Self-Paced Plans</router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="img/photos/camylla-battani-ABVE1cyT7hk-unsplash.jpg"
                class="card-img-top"
                alt="Self-Paced Plans"
              />
              <div class="card-body">
                <h5 class="card-title">Immersive Bootcamps</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">$4500 and up</li>
                <li class="list-group-item">Intense Pace</li>
                <li class="list-group-item">Intense Pace</li>
                <li class="list-group-item">Mentor-Driven</li>
                <li class="list-group-item">40 hour/week Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/bootcamps" class="card-link">See Bootcamps</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-2 d-none d-lg-block"></div>
        <div class="col">
          <h1 class="pb-5">CodeX Academy is...</h1>
          <MethodList />
        </div>
        <div class="col-2 d-none d-lg-block"></div>
      </div>
      <hr />
      <h3 class="mb-5">What do CodeX Academy Learners say?</h3>
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

<style lang="scss">
ul.list-group {
  li.price {
    color: black;
    font-weight: bolder;
  }
}
</style>