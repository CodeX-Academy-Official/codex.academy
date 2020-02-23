<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Tuition Payment Setup</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Enrollment</li>
      <li class="breadcrumb-item active">Tuition</li>
    </ol>

    <!-- <Progress :steps="steps" active="1" /> -->
    <p></p>
    <div class="row" v-if="selectedPlan && selectedPlan.paymentTypes">
      <div class="col">
        <div v-if="selectedPlan.paymentTypes.length > 0">
          <h1>Payment Options</h1>
          <div
            v-for="(paymentType, index) in selectedPlan.paymentTypes"
            :key="paymentType.type"
          >
            <hr class="mt-5 mb-5" />
            <CreditCard
              v-if="paymentType.type === 'creditCard'"
              :url="paymentType.url"
              :number="index + 1"
              css="paymentType ml-4"
            />
            <CallBack
              v-if="paymentType.type === 'callBack'"
              :number="index + 1"
              css="paymentType ml-4"
            />
          </div>
        </div>
        <!-- <div v-if="selectedPlan.paymentTypes.financing">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Financing</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>-->

        <!-- <div v-if="selectedPlan.paymentTypes.isa">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Income Sharing Agreement</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>-->

        <!-- <div v-if="selectedPlan.paymentTypes.callback">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Continue With Admissions</h3>
          <p>In order to continue your enrollment, we need to speak with you. Please fill out the form below to set up a call with an Admissions Counselor to go over your options.</p>
          <HubspotForm formId="e7360a11-ca18-4b36-a73b-b8ccdce4f3e7" />
        </div>-->
      </div>
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

export default {
  components: {
    PlanCard,
    HubspotForm,
    CreditCard,
    CallBack
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
