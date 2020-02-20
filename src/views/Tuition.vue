<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Tuition</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Enrollment</li>
      <li class="breadcrumb-item active">Tuition</li>
    </ol>

    <!-- <Progress :steps="steps" active="1" /> -->
    <p></p>
    <div class="row">
      <div class="col">
        <h1>Payment Methods</h1>

        <h3>Credit Card Payment</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <stripe-checkout
          ref="checkoutRef"
          :pk="publishableKey"
          :items="items"
          :successUrl="successUrl"
          :cancelUrl="cancelUrl"
        >
          <template slot="checkout-button">
            <button @click="checkout">Checkout</button>
          </template>
        </stripe-checkout>

        <hr class="mt-5 mb-5" />
        <h3>Financing</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <hr class="mt-5 mb-5" />
        <h3>Income Sharing Agreement</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

console.log(process.env.STRIPE_PUBLISHABLE_KEY);

export default {
  computed: {
    selectedPlan() {
      return { ...this.$store.state.selectedPlan, primary: true };
    }
  },
  components: {
    PlanCard,
    StripeCheckout
  },
  data: () => ({
    loading: false,
    publishableKey: "pk_test_X6aBGRLfCVNriOGJWcO7iHGV00OnZpy4KQ",
    items: [{ plan: "plan_GlVXLoyCgmQxjW", quantity: 1 }],
    successUrl: "http://codex.academy/#/enroll/tuition/success",
    cancelUrl: "http://codex.academy/#/enroll/tuition/cancel"
  }),
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  }
};
</script>

<style lang="scss" scoped></style>
