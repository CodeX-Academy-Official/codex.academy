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
      <div class="col">
        <p>
          Please fill in the form below to start your enrollment. If you’re not
          sure about enrolling now, we suggest you
          <router-link to="call-back">set up a call-back</router-link>&nbsp;so
          you can learn more!
        </p>

        <div v-once id="regForm"></div>
      </div>
      <div class="col-4 d-none d-lg-block">
        <div class="text-center">
          <router-link class="btn btn-secondary btn-wide mb-4" to="/plans"
            >Change Plan</router-link
          >
        </div>
        <PlanCard :plan="selectedPlan" :selectable="false" />
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "@/components/Progress";
import PlanCard from "@/components/PlanCard";

export default {
  components: {
    Progress
  },
  data() {
    return {
      steps: [
        { number: 1, name: "Enrollment Form" },
        { number: 2, name: "Tuition Payment Setup" },
        { number: 3, name: "Orientation" },
        { number: 4, name: "Mentor Matching" },
        { number: 5, name: "Learn to Code" }
      ],
      selectedPlan: false
    };
  },
  components: { PlanCard },
  created() {
    const planId = this.$route.query.planId;
    const plan = this.$store.getters.getPlan(planId);
    this.selectedPlan = { ...plan, primary: true };
    this.$store.dispatch("selectPlan", this.selectedPlan);

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7092117",
          formId: "fe2c39ea-3086-4b7c-ba4b-6bf288544526",
          target: "#regForm"
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables";

.hs-button {
  background-color: $primary;
}
</style>
