<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Financial Aid Setup</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Application</li>
      <li class="breadcrumb-item active">Financial Aid</li>
    </ol>

    <div class="row" v-if="selectedPlan && selectedPlan.paymentTypes">
      <div class="col">Stuff</div>
      <div class="col-4 d-none d-lg-block">
        <PlanCard :plan="selectedPlan" :selectable="false" />
      </div>
    </div>
  </div>
</template>

<script>
import PlanCard from "@/components/PlanCard";
import HubspotForm from "@/components/HubspotForm";
import CreditCard from "@/components/paymentTypes/creditCard";
import CallBack from "@/components/paymentTypes/callback";
import Climb from "@/components/paymentTypes/climb";

export default {
  components: {
    PlanCard,
    HubspotForm,
    CreditCard,
    CallBack,
    Climb
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

<style lang="scss" scoped></style>
