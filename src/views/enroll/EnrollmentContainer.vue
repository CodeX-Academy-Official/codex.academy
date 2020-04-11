<template>
  <div>
    <Hero unsplashId="gnyA8vd3Otc" height="20vh" backgroundColor="rgba(25, 32, 71,0.7)">
      <h2>Application</h2>
      <h5>Just a few steps</h5>
    </Hero>
    <div class="container mt-5">
      <div class="row">
        <div class="d-none d-md-block col-4">
          <div class="sidebar">
            <p>
              We're happy you have chosen to enroll with CodeX Academy. You're
              just a few steps away from starting a new career!
            </p>
            <h4>Application Steps:</h4>
            <ol class="steps">
              <li :class="{ active: stage === 1 }">
                <router-link to="/enroll">Select/Confirm Program</router-link>
              </li>
              <li :class="{ active: stage === 2 }">
                <router-link to="/enroll/applicant">Enter Applicant Information</router-link>
              </li>
              <li :class="{ active: stage === 3 }">
                <router-link to="/enroll/appfee">Pay Application Fee</router-link>
              </li>
              <li :class="{ active: stage === 4 }">Meet with Admissions</li>
            </ol>
          </div>
        </div>
        <div class="col">
          <router-view @changeStage="changeStage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";

export default {
  components: { Hero },
  data: () => ({
    stage: 1
  }),
  methods: {
    changeStage(newStage) {
      this.stage = newStage;
    }
  }
};
</script>

<style lang="scss">
@import "@/variables";
.sidebar {
  background-color: #f8f9fa;
  padding: 10px;
}
.steps li a {
  text-decoration: none;
  color: inherit;
}
.steps li {
  color: #333;
}
li.active {
  color: $primary;
  font-weight: bold;
}
</style>
