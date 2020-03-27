<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Enrollment</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Enrollment</li>
    </ol>

    <!-- <Progress :steps="steps" active="1" /> -->

    <div class="row">
      <div class="d-none d-md-block col-4">
        <div class="sidebar">
          <p>
            We're happy you have chosen to enroll with CodeX Academy. You're
            just a few steps away from starting a new career!
          </p>
          <h4>Enrollment Steps:</h4>
          <ol class="steps">
            <li :class="{ active: stage === 1 }">
              <router-link to="/enroll">Select/Confirm Program</router-link>
            </li>
            <li :class="{ active: stage === 2 }">
              <router-link to="/enroll/applicant"
                >Enter Applicant Information</router-link
              >
            </li>
            <li :class="{ active: stage === 3 }">
              <router-link to="/enroll/payment"
                >Arrange Payment Information</router-link
              >
            </li>
            <li :class="{ active: stage === 4 }">Start Orientation</li>
          </ol>
        </div>
      </div>
      <div class="col">
        <router-view @changeStage="changeStage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
