<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Enrollment</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Enrollment</li>
      <li class="breadcrumb-item active">Ready!</li>
    </ol>

    <div class="row">
      <div class="col">
        <h3>Thanks!</h3>
        <p>We have received your enrollment. Please check your email for next steps.</p>
      </div>
      <!-- <div class="col-4 d-none d-lg-block">
        <PlanCard :plan="selectedPlan" :selectable="false" />
      </div>-->
    </div>
  </div>
</template>

<script>
import PlanCard from "@/components/PlanCard";

export default {
  components: {
    PlanCard
  },
  data: () => ({
    selectedPlan: false
  }),
  created() {
    if (!this.$store.state.selectedPlan) {
      this.$router.push("/");
    }
    this.selectedPlan = { ...this.$store.state.selectedPlan, primary: true };
  }
};
</script>
