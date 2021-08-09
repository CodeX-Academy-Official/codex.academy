<template>
  <div>
    <StripeCheckout
      ref="checkoutRef"
      :pk="publishableKey"
      :mode="mode"
      :lineItems="lineItems"
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
    </StripeCheckout>
  </div>
</template>

<script>
import { StripeCheckout } from "./vue-stripe-checkout";
import { encode } from "@/utils/paymentToken";
const STRIPE_PK_LIVE = "pk_live_xvkqBqkXopjLV7pNaIrhD5mt00gewNRWaX";
const STRIPE_PK_TEST = "pk_test_X6aBGRLfCVNriOGJWcO7iHGV00OnZpy4KQ";

export default {
  props: {
    applicant: Object,
    paymentType: Object,
    successRoute: String,
    cancelRoute: String,
  },
  components: { StripeCheckout },
  data: () => ({
    loading: false,
    items: [],
    lineItems: [],
    mode: undefined,
  }),
  computed: {
    paymentToken() {
      const payload = {
        payment_type: "cc",
        payment_vendor: "stripe",
        email: this.applicant.email,
      };
      const encoded = encode(payload);
      return encoded;
    },
    successUrl() {
      return `${window.location.origin}/${
        this.$router.resolve({ name: this.successRoute }).href
      }?token=${this.paymentToken}`;
    },
    cancelUrl() {
      return `${window.location.origin}/${
        this.$router.resolve({ name: this.cancelRoute }).href
      }?token=${this.paymentToken}`;
    },
    publishableKey() {
      return this.$store.state.testMode ? STRIPE_PK_TEST : STRIPE_PK_LIVE;
    },
  },
  methods: {
    checkout() {
      this.loading = true;
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  mounted() {
    const planId = this.$store.state.testMode
      ? this.paymentType.testStripePlanId
      : this.paymentType.stripePlanId;
    this.items = planId ? [{ plan: planId, quantity: 1 }] : undefined;

    const sku = this.$store.state.testMode
      ? this.paymentType.testStripeSku
      : this.paymentType.stripeSku;
    this.lineItems = sku ? [{ price: sku, quantity: 1 }] : undefined;

    this.mode = sku ? "payment" : "subscription";
  },
};
</script>
