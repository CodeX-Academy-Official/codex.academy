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
    <div class="row" v-if="selectedPlan">
      <div class="col">
        <h1>Payment Options</h1>

        <div v-if="selectedPlan.paymentTypes.creditCard">
          <hr class="mt-5 mb-5" />
          <h3>Set Up Recurring Credit Card Payment</h3>

          <p>You can set up a monthly subscription using your credit or debit card. For this, we use a service called Stripe. Please click the button below to set up your subscription.</p>
          <p>
            <a :href="selectedPlan.paymentTypes.creditCard" class="btn btn-primary">
              <strong>Set Up Subscription</strong>
            </a>
          </p>
        </div>

        <div v-if="selectedPlan.paymentTypes.financing">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Financing</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div v-if="selectedPlan.paymentTypes.isa">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Income Sharing Agreement</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div v-if="selectedPlan.paymentTypes.callback">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Continue With Admissions</h3>
          <p>In order to continue your enrollment, we need to speak with you. Please fill out the form below to set up a call with an Admissions Counselor to go over your options.</p>
          <HubspotForm formId="e7360a11-ca18-4b36-a73b-b8ccdce4f3e7" />
        </div>
      </div>
      <div class="col-4 d-none d-lg-block">
        <PlanCard :plan="selectedPlan" :selectable="false" />
      </div>
    </div>
  </div>
</template>

<script>
import PlanCard from "@/components/PlanCard";
import { StripeCheckout } from "vue-stripe-checkout";
import HubspotForm from "@/components/HubspotForm";

console.log(process.env.STRIPE_PUBLISHABLE_KEY);

export default {
  components: {
    PlanCard,
    StripeCheckout,
    HubspotForm
  },
  data: () => ({
    loading: false,
    selectedPlan: false,
    publishableKey: "pk_test_X6aBGRLfCVNriOGJWcO7iHGV00OnZpy4KQ",
    items: [{ plan: "plan_GlVXLoyCgmQxjW", quantity: 1 }],
    successUrl: "http://codex.academy/#/enroll/tuition/success",
    cancelUrl: "http://codex.academy/#/enroll/tuition/cancel"
  }),
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  },
  created() {
    if (!this.$store.state.selectedPlan) {
      this.$router.push("/");
    }
    this.selectedPlan = { ...this.$store.state.selectedPlan, primary: true };
  }
};
</script>

<style lang="scss" scoped></style>
