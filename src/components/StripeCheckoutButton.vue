<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      :pk="publishableKey"
      :items="items"
      :customerEmail="applicant.email"
      :clientReferenceId="applicant.id"
      :successUrl="successUrl"
      :cancelUrl="cancelUrl"
      @loading="loading = $event"
    >
      <template slot="checkout-button">
        <button
          @click="checkout"
          class="btn btn-primary btn-block"
          :disabled="loading"
        >
          <slot>Pay</slot>
        </button>
      </template>
    </stripe-checkout>
  </div>
</template>

<script>
import { StripeCheckout } from "vue-stripe-checkout";

const STRIPE_PK_LIVE = "pk_live_xvkqBqkXopjLV7pNaIrhD5mt00gewNRWaX";
const STRIPE_PK_TEST = "pk_test_X6aBGRLfCVNriOGJWcO7iHGV00OnZpy4KQ";

export default {
  props: {
    applicant: Object,
    paymentType: Object,
  },
  components: { StripeCheckout },
  data: () => ({
    loading: false,
  }),
  computed: {
    successUrl() {
      return `${window.location.origin}/${
        this.$router.resolve({ name: "enroll-complete" }).href
      }`;
    },
    cancelUrl() {
      return `${window.location.origin}/${
        this.$router.resolve({ name: "enroll-payment" }).href
      }`;
    },
    publishableKey() {
      return this.$store.state.testMode ? STRIPE_PK_TEST : STRIPE_PK_LIVE;
    },
    planId() {
      return this.$store.state.testMode
        ? this.paymentType.testStripePlanId
        : this.paymentType.stripePlanId;
    },
    items() {
      return [{ plan: this.planId, quantity: 1 }];
    },
  },
  methods: {
    checkout() {
      this.loading = true;
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
