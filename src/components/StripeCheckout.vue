<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="card-title">Card Payment : {{paymentType.stripePlanID}}</h5>
    </div>
    <div class="card-body">
      <span class="around-money">You pay</span>
      <h1 class="paymentTypeAmount">
        <Money :amount="paymentType.monthlyCharge" />
      </h1>
      <span class="around-money">per month</span>
      <p class="mt-3 card-text text-muted">Monthly tuition payments on your credit or debit card.</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary btn-block"
        @click="redirectToCheckout()"
        >
        <strong>Subscribe</strong>
      </button>
    </div>
  </div>

</template>


<script>
import Money from "@/components/Money";
import {loadStripeCheckout} from '@/components/LoadCheckout';
import {
  SUPPORTED_LANGS,
  SUPPORTED_SUBMIT_TYPES,
  BILLING_ADDRESS_COLLECTION_TYPES,
  STRIPE_PK_LIVE,
  STRIPE_PK_TEST,
} from '@/components/StripeConstants';

export default {
  props: {
    paymentType: Object,

    items: {
      type: Array,
      default: undefined
    },
    successUrl: {
      type: String,
      default: window.location.href
    },
    cancelUrl: {
      type: String,
      default: window.location.href
    },
    submitType: {
      type: String,
      validator: (value) => SUPPORTED_SUBMIT_TYPES.includes(value)
    },
    billingAddressCollection: {
      type: String,
      default: 'auto',
      validator: (value) => BILLING_ADDRESS_COLLECTION_TYPES.includes(value)
    },
    clientReferenceId: {
      type: String,
      default: undefined
    },
    customerEmail: {
      type: String,
      default: undefined
    },
    sessionId: {
      type: String,
      default: undefined
    },
    locale: {
      type: String,
      default: 'auto',
      validator: (value) => SUPPORTED_LANGS.includes(value)
    }
  },
  computed: {
    pk(){
        return this.$store.state.testMode? 
        STRIPE_PK_TEST : STRIPE_PK_LIVE;
    },
  },
  components: {
    Money
  },
  data: () => ({
    loading: false,
    amount: 1000,
    planID: "",
  }),
  methods: {
    redirectToCheckout () {
      this.$emit('loading', true);
      loadStripeCheckout(this.pk, 'v3', () => {        
        try {
          let stripe = window.Stripe(this.pk);
          const applicant = this.$store.getters.getApplicant;
          const planID = this.paymentType.stripePlanID;

          stripe.redirectToCheckout({
            billingAddressCollection: this.billingAddressCollection,
            cancelUrl: this.cancelUrl,
            clientReferenceId: this.clientReferenceId,
            customerEmail:  applicant.email,
            items: [{plan: planID, quantity: 1}],
            locale: this.locale,
            submitType: this.submitType,
            successUrl: this.successUrl,
          });
        } catch (e) {
          console.error(e);
          this.$emit('error', e);
        } finally {
          this.$emit('loading', false);
        }
      });
    }
  }
}
</script> 